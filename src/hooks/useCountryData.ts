import axios from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

interface CountryResponse {
  name: string;
  population: number;
  carbonEmissions: string;
}

export const getCountryData = async (countryName: string) => {
  const { data } = await axios.get<CountryResponse>(
    `/api/country/${countryName}`
  );
  return data;
};

export const useCountryData = (
  countryName: string,
  options?: UseQueryOptions<CountryResponse, Error>
) => {
  return useQuery<CountryResponse>(
    ['country', { countryName }],
    () => getCountryData(countryName),
    options
  );
};
