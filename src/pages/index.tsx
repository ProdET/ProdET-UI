import dynamic from 'next/dynamic';
// Step 5 - delete Instructions components
import Instructions from '@/components/dom/Instructions';
import Shader from '@/components/canvas/Shader/Shader';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

// dom components goes here
const Page = (props: any) => {
  const router = useRouter();

  return (
    <>
      <ul>
        <li>
          <Link href='/[country]' as={`/united-states`}>
            <a>goes to /united-states</a>
          </Link>
        </li>
        <li>
          <Link href='/[country]' as={`/canada`}>
            <a>goes to /canada</a>
          </Link>
        </li>
        <li>
          <Link href='/[country]' as={`/norway`}>
            <a>goes to /norway</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props: any) => <></>;

export default Page;

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  };
}
