import React, { memo, useState } from 'react';
import { FlatList } from 'react-native';
import { Loader } from '../../explore.styles';
import {
  PressableStockButton,
  StockTitle,
  StockSubtitle,
  SeperatorLine,
  Container,
} from './stocks-list.styles';

type RenderItemsProps = {
  item: { name: string; ticker: string };
  onStockPress: Function;
};

type StockList = {
  data: [] | null;
  LoadMoreStocks: Function;
  FetchingMoreStocks: Boolean;
  onStockPress: Function;
};

function RenderItems({ onStockPress, item }: RenderItemsProps) {
  const { ticker, name } = item;
  return (
    <PressableStockButton onPress={() => onStockPress(ticker)} key={name}>
      <StockTitle>{ticker}</StockTitle>
      <StockSubtitle>{name}</StockSubtitle>
    </PressableStockButton>
  );
}

function StocksList({
  data,
  LoadMoreStocks,
  FetchingMoreStocks,
  onStockPress,
}: StockList) {
  const [scrollBegin, setScrollBegin] = useState(false);

  const Seperator = memo(() => <SeperatorLine />);
  const Renderfooter = memo(() => <Loader color="red" />);

  return (
    <Container>
      <FlatList
        data={Object.values(data)}
        accessibilityLabel="stocks"
        testID="stocks"
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Seperator}
        // couldn't find a uniqe value so I had to use the index
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <RenderItems onStockPress={onStockPress} item={item} />
        )}
        onEndReached={() => {
          if (!scrollBegin) {
            LoadMoreStocks();
          }
        }}
        onEndReachedThreshold={0.4}
        onMomentumScrollBegin={() => {
          setScrollBegin(true);
        }}
        onMomentumScrollEnd={() => {
          setScrollBegin(false);
        }}
        ListFooterComponent={FetchingMoreStocks && Renderfooter}
      />
    </Container>
  );
}

export default memo(StocksList);
