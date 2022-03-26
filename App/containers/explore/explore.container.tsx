import React, { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { ScreenContainer } from '../../components/Container';
import SearchBar from '../../components/searchbar-component/searchbar.component';
import StocksList from './components/stock-list-component/stocks-list.component';
import { Loader } from './explore.styles';
import { useOvermind, useActions } from '../../overmind';

type ExploreProps = {
  navigation: { navigate: Function };
};

function ExploreScreen({ navigation }: ExploreProps) {
  const { stocks, search }: any = useOvermind();
  const {
    fetchStocks, fetchMoreStocks, searchStocks, clearSearch,
  }: any = useActions();

  const [searchValue, setSearchValue] = useState('');

  const getStocksFromApi = async () => {
    fetchStocks();
  };

  const searchStocksFromApi = async (text: string) => {
    searchStocks({ search: text });
  };

  const LoadMoreStocksFromApi = async () => {
    fetchMoreStocks({ cursor: stocks.next_url });
  };

  const handleSearch = useCallback(
    debounce((text: string) => {
      if (text) {
        searchStocksFromApi(text);
      }
    }, 300),
    [],
  );
  const onTextChange = (text: string) => {
    if (text === '') clearSearch();
    setSearchValue(text);
    handleSearch(text);
  };
  useEffect(() => {
    getStocksFromApi();
  }, []);

  const handleStockPress = (ticker: String) => {
    navigation.navigate('StockDetails', { ticker });
  };

  return (
    <ScreenContainer>
      <SearchBar onTextChange={onTextChange} />
      {stocks.loading ? (
        <Loader />
      ) : (
        <StocksList
          data={searchValue ? search.data : stocks.data}
          LoadMoreStocks={LoadMoreStocksFromApi}
          FetchingMoreStocks={stocks.FetchingMoreStocks || search.loading}
          onStockPress={handleStockPress}
        />
      )}
    </ScreenContainer>
  );
}
export default ExploreScreen;
