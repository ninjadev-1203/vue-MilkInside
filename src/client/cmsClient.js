import memoize from 'memoizee';
import { getMockedData } from '@/client/mockedDataProvider';

const useMockedData = true;
const API_URL = 'http://44.201.111.18:1337/api/';
const ROUTE_HOMEPAGE = 'homepage-sections';
const ROUTE_SERVICE = 'service-sections';
const ROUTE_WORK = 'work-sections';
const ROUTE_ABOUT = 'about-us-sections';

async function fetchEndpoint(url) {
  if (useMockedData) {
    return getMockedData(url);
  }

  const response = await fetch(API_URL + url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response;
}

export const getHomepageSections = memoize(() => fetchEndpoint(ROUTE_HOMEPAGE)
  .then((response) => response.json()));

export const getServiceSections = memoize(() => fetchEndpoint(ROUTE_SERVICE)
  .then((response) => response.json()));

export const getWorkSections = memoize(() => fetchEndpoint(ROUTE_WORK)
  .then((response) => response.json()));

export const getAboutSections = memoize(() => fetchEndpoint(ROUTE_ABOUT)
  .then((response) => response.json()));
