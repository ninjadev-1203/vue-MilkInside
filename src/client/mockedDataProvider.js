import homepageSections from '@/client/mockData/homepage-sections';
import serviceSections from '@/client/mockData/service-sections';

const mockedDataMap = {
  'homepage-sections': homepageSections,
  'service-sections': serviceSections,
};

class MockResponseObject {
  #data;

  constructor(url) {
    this.#data = mockedDataMap[url] || {};
  }

  json() {
    return this.#data;
  }
}
// eslint-disable-next-line import/prefer-default-export
export const getMockedData = (url) => new MockResponseObject(url);
