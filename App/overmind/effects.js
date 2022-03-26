import http from '../utils/api-service';
import { routes } from '../utils/endpoints';

export const api = {
  async fetchStocks() {
    const headers = {
      Authorization: 'Bearer Qlhn8IQlUILjoPAWcEDpEwwqEior9ZPy',
    };
    const query = { limit: '20' };
    const options = {
      headers,
      query,
    };
    return http.get(routes.fetchStocks, options);
  },
  async fetchMoreStocks(data) {
    const headers = {
      Authorization: 'Bearer Qlhn8IQlUILjoPAWcEDpEwwqEior9ZPy',
    };
    const query = { cursor: data?.cursor };
    const options = {
      headers,
      query,
    };
    return http.get(routes.fetchStocks, options);
  },
  async searchStocks(data) {
    const headers = {
      Authorization: 'Bearer Qlhn8IQlUILjoPAWcEDpEwwqEior9ZPy',
    };
    const query = { limit: '20', search: data?.search };
    const options = {
      headers,
      query,
    };
    return http.get(routes.fetchStocks, options);
  },
  // Stock Details
  async fetchStockDetails(data) {
    const headers = {
      Authorization: 'Bearer Qlhn8IQlUILjoPAWcEDpEwwqEior9ZPy',
    };
    const options = {
      headers,
    };
    return http.get(`${routes.fetchStocks}/${data}`, options);
  },
  async fetchPrevClose(data) {
    const headers = {
      Authorization: 'Bearer Qlhn8IQlUILjoPAWcEDpEwwqEior9ZPy',
    };
    const query = { adjusted: true };
    const options = {
      headers,
      query,
    };
    return http.get(`${routes.prevClose}/${data}/prev`, options);
  },
};
