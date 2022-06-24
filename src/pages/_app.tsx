import { useRouter } from 'next/router';
import useStore from '@/hooks/store';
import { useEffect } from 'react';
import Header from '@/config';
import DomLayout from '@/components/layout/dom';
import CanvasLayout from '@/components/layout/canvas';

import '@/styles/global.css';
import '@sample-data';

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter();

  useEffect(() => {
    useStore.setState({ router });
  }, [router]);

  return (
    <>
      <Header title={pageProps.title} />
      <DomLayout>
        <Component {...pageProps} />
      </DomLayout>
      {Component?.r3f && (
        <CanvasLayout>{Component.r3f(pageProps)}</CanvasLayout>
      )}
    </>
  );
}

export default App;
