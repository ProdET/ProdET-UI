import { useCountryData, getCountryData } from '@/hooks/useCountryData';
// @ts-ignore
import listOfCountries from 'iso3166-2-db/countryList/dispute/UN/en';
import { useRouter } from 'next/router';

// dom components goes here
const Country = () => {
  const router = useRouter();
  const countryName = router.query.country as string;
  const countryData = useCountryData(countryName).data;

  return (
    <>
      <h1>{router.query.country}</h1>
      {countryData && (
        <ul>
          <li>
            <p>Country: {countryData.name}</p>
          </li>
          <li>
            <p>Emissions: {countryData.carbonEmissions}</p>
          </li>
        </ul>
      )}
    </>
  );
};

// canvas components goes here
Country.r3f = (props: any) => <></>;

export default Country;

export async function getStaticPaths() {
  //define possible paths by all existing countries
  const countryPathList = Object.keys(listOfCountries)
    .sort((a, b) =>
      listOfCountries[a].name > listOfCountries[b].name ? 1 : -1
    )
    .map((isoCode) =>
      `/${listOfCountries[isoCode].name}`.replaceAll(' ', '-').toLowerCase()
    );
  return { paths: countryPathList, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      title: '',
    },
  };
}
