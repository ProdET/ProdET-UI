import { useRouter } from 'next/router';
import useStore from '@/hooks/store';
import { useEffect } from 'react';
import Header from '@/config';
import DomLayout from '@/components/layout/dom';
import '@/styles/global.css';
import CanvasLayout from '@/components/layout/canvas';

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
