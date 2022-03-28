import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { ScreenContainer } from '../../components/container/Container';
import { useOvermind, useActions } from '../../overmind';
import AboutSection from './components/about-section/about-section.component';
import StatisticsSection from './components/statistics-section/statistics-section.component';
import { Title, SubTitle } from './stock-details.styles';
import { Loader } from '../explore/explore.styles';

type DetailsTypes = {
  route: { params: { ticker: string } };
};

type DataTypes = {
  [key: string]: string;
};

function StockDetails({ route }: DetailsTypes) {
  const { stockDetails } = useOvermind();
  const { fetchStockDetails } = useActions();
  const { ticker } = route.params;
  const { data } = stockDetails;

  useEffect(() => {
    fetchStockDetails(ticker);
  }, []);

  if (stockDetails.loading) return <Loader />;
  const {
    stockName,
    stockTicker,
    openPrice,
    highPrice,
    closePrice,
    lowPrice,
    stockDescription,
    stockIndustry,
    url,
  }: DataTypes = data;

  return (
    <ScreenContainer>
      <ScrollView>
        <Title>{stockTicker}</Title>
        <SubTitle>{stockName}</SubTitle>

        <StatisticsSection
          openPrice={openPrice}
          highPrice={highPrice}
          closePrice={closePrice}
          lowPrice={lowPrice}
        />

        <AboutSection
          url={url}
          stockDescription={stockDescription}
          stockIndustry={stockIndustry}
        />
      </ScrollView>
    </ScreenContainer>
  );
}

export default StockDetails;
