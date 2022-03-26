import { Alert } from 'react-native';
import { StockDetailsMapper } from '../utils/mappers/stock-details.mapper';

export const fetchStocks = async ({ state, effects }, params) => {
  state.stocks.loading = true;
  const stocks = await effects.api.fetchStocks(params);
  if (stocks.status === 200) {
    state.stocks.next_url = stocks.body.next_url.split('cursor=')[1];
    state.stocks.data = stocks.body.results;
    state.stocks.loading = false;
  } else if (stocks.status === 429) {
    Alert.alert(stocks.body.error);
  } else {
    Alert.alert('Something went wrong');
  }
};

export const fetchMoreStocks = async ({ state, effects }, params) => {
  state.stocks.loadingMoreStocks = true;
  const stocks = await effects.api.fetchMoreStocks(params);
  if (stocks.status === 200) {
    state.stocks.next_url = stocks.body.next_url.split('cursor=')[1];
    state.stocks.data = [...state.stocks.data, ...stocks.body.results];
    state.stocks.loadingMoreStocks = false;
  } else if (stocks.status === 429) {
    Alert.alert(stocks.body.error);
  } else {
    Alert.alert('Something went wrong');
  }
};

export const searchStocks = async ({ state, effects }, params) => {
  state.search.loading = true;
  const stocks = await effects.api.searchStocks(params);
  if (stocks.status === 200) {
    state.search.data = stocks.body.results;
    state.search.loading = false;
  } else if (stocks.status === 429) {
    Alert.alert(stocks.body.error);
  } else {
    Alert.alert('Something went wrong');
  }
};

export const clearSearch = async ({ state }) => {
  state.search.loading = false;
  state.search.data = null;
};

// Stock Details

export const fetchStockDetails = async ({ state, effects }, params) => {
  state.tickerDetails.loading = true;
  const stocks = await effects.api.fetchStockDetails(params);
  const prices = await effects.api.fetchPrevClose(params);
  if (stocks.status === 200) {
    if (stocks && prices) {
      const Mapping = StockDetailsMapper.mapToUiModel({
        stocks: stocks.body.results,
        prices: prices.body.results[0],
      });
      state.tickerDetails.data = Mapping;
      state.tickerDetails.loading = false;
    }
    // state.tickerDetails.data = stocks.body.results[0];
    // state.tickerDetails.loading = false;
  } else if (stocks.status === 429) {
    Alert.alert(stocks.body.error);
  } else {
    Alert.alert('Something went wrong');
  }
};

export const fetchPrevClose = async ({ state, effects }, params) => {
  state.tickerDetails.loading = true;
  const stocks = await effects.api.fetchPrevClose(params);
  if (stocks.status === 200) {
    state.tickerDetails.data = [
      ...state.tickerDetails.data,
      ...stocks.body.results,
    ];
    state.tickerDetails.loading = false;
  } else if (stocks.status === 429) {
    Alert.alert(stocks.body.error);
  } else {
    Alert.alert('Something went wrong');
  }
};
