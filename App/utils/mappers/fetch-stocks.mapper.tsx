type StockDetailsTypes = {
  stocks: {
    name: string;
    ticker: string;
  };
};

type DataTypes = {
  name: string;
  ticker: string;
};

const mapItemToUiModel = (data: DataTypes) => {
  const { ticker, name } = data;

  if (data) {
    return {
      ticker: ticker || '',
      name: name || '',
    };
  }
  return null;
};

const mapToUiModel = ({ stocks }: StockDetailsTypes) => {
  const stocksData = {} as any;
  if (stocks) {
    Object.values(stocks).map(
      (item: any) => (stocksData[`${item.ticker}`] = mapItemToUiModel(item)),
    );
  }
  return stocksData;
};

export const FetchStocksMapper = { mapToUiModel };
