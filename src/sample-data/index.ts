import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import countryData from './country.json';

const mock = new MockAdapter(axios);

if (process.env.NODE_ENV === 'development') {
  mock.onGet(/\/api\/country\//).reply(200, countryData);
}

mock.onAny().passThrough();
