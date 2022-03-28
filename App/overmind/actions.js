import { Alert } from 'react-native';
import { FetchStocksMapper } from '../utils/mappers/fetch-stocks.mapper';
import { StockDetailsMapper } from '../utils/mappers/stock-details.mapper';

export const fetchStocks = async ({ state, effects }, params) => {
  state.stocks.loading = true;
  const stocks = await effects.api.fetchStocks(params);
  if (stocks.status === 200) {
    // splitting cursor can also be implemented in a shared handler
    state.stocks.next_url = stocks.body.next_url.split('cursor=')[1];
    const MappedStocks = FetchStocksMapper.mapToUiModel({
      stocks: stocks.body.results,
    });
    state.stocks.data = MappedStocks;
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
    const filtered = stocks.body.results.filter(
      (item) => !stocks.body.results[item.ticker],
    );
    const MappedStocks = FetchStocksMapper.mapToUiModel({
      stocks: filtered,
    });
    state.stocks.data = { ...state.stocks.data, ...MappedStocks };
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

export const fetchStockDetails = async ({ state, effects }, ticker) => {
  state.stockDetails.loading = true;
  const stocks = await effects.api.fetchStockDetails(ticker);
  const prices = await effects.api.fetchPrevClose(ticker);
  if (stocks.status === 200) {
    if (stocks && prices) {
      const Mapping = StockDetailsMapper.mapToUiModel({
        stocks: stocks?.body?.results,
        prices: prices?.body?.results?.[0],
      });
      state.stockDetails.data = Mapping;
      state.stockDetails.loading = false;
    }
    state.stockDetails.data = stocks.body.results[0];
    state.stockDetails.loading = false;
  } else if (stocks.status === 429) {
    Alert.alert(stocks.body.error);
  } else {
    Alert.alert('Something went wrong');
  }
};
