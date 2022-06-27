import { useCountryData } from '@/hooks/useCountryData';
import listOfCountries from 'iso3166-2-db';

// dom components goes here
const Country = () => {
  const country = useCountryData('canada').data;

  return <></>;
};

// canvas components goes here
Country.r3f = (props: any) => <></>;

export default Country;

export async function getStaticPaths() {
  const listOfCountries = ['/Canada'];
  return { paths: listOfCountries, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      title: '',
    },
  };
}
