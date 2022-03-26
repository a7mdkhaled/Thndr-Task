import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { ScreenContainer } from '../../components/Container';
import { useOvermind, useActions } from '../../overmind';
import AboutSection from './components/about-section/about-section.component';
import StatisticsSection from './components/statistics-section/statistics-section.component';
import { Title, SubTitle } from './stock-details.styles';

type DetailsProps = {
  route: { params: { ticker: string } };
};
function StockDetails({ route }: DetailsProps) {
  const { tickerDetails }: any = useOvermind();
  const { fetchStockDetails }: any = useActions();
  const { ticker } = route.params;
  const { data } = tickerDetails;

  useEffect(() => {
    fetchStockDetails(ticker);
  }, []);

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
  } = data;
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
