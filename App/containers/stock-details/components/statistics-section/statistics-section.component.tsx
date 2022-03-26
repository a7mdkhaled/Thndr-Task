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
      <Pricetitle>
        Open:
        {openPrice}
      </Pricetitle>
      <Pricetitle>
        highPrice:
        {highPrice}
      </Pricetitle>
      <Pricetitle>
        closePrice:
        {closePrice}
      </Pricetitle>
      <Pricetitle>
        lowPrice:
        {lowPrice}
      </Pricetitle>
    </StatisticsContainer>
  );
}

export default StatisticsSection;
