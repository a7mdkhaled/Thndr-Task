import React from 'react';
import {
  SectionTitle,
  Pricetitle,
  StatisticsContainer,
} from './statistics-section.styles';

type StatisticsProps = {
  openPrice: string;
  highPrice: string;
  closePrice: string;
  lowPrice: string;
};

function StatisticsSection({
  openPrice,
  highPrice,
  closePrice,
  lowPrice,
}: StatisticsProps) {
  return (
    <StatisticsContainer>
      <SectionTitle>Statistices</SectionTitle>
      <Pricetitle>{`Open Price: ${openPrice}`}</Pricetitle>
      <Pricetitle>{`High Price: ${highPrice}`}</Pricetitle>
      <Pricetitle>{`Close Price: ${closePrice}`}</Pricetitle>
      <Pricetitle>{`Low Price: ${lowPrice}`}</Pricetitle>
    </StatisticsContainer>
  );
}

export default StatisticsSection;
