import { useRouter } from 'next/router';
import useStore from '@/hooks/store';
import { useEffect } from 'react';
import Header from '@/config';
import DomLayout from '@/components/layout/dom';
import CanvasLayout from '@/components/layout/canvas';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/styles/global.css';
import '@/sample-data';
import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const API_URL = publicRuntimeConfig.NEXT_PUBLIC_API_URL;
const queryClient = new QueryClient();
if (API_URL) {
  axios.defaults.baseURL = API_URL;
}

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter();
  useEffect(() => {
    useStore.setState({ router });
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header title={pageProps.title} />
        <DomLayout>
          <Component {...pageProps} />
        </DomLayout>
        {Component?.r3f && (
          <CanvasLayout>{Component.r3f(pageProps)}</CanvasLayout>
        )}
      </>
    </QueryClientProvider>
  );
}

export default App;
