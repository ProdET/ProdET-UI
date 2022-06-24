import Instructions from '@/components/dom/Instructions';
import Box from '@/components/canvas/Box';

// Step 5 - delete Instructions components
const Page = (props: any) => {
  return (
    <>
      <Instructions />
    </>
  );
};

Page.r3f = (props: any) => (
  <>
    <Box route='/' />
  </>
);

export default Page;

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  };
}
