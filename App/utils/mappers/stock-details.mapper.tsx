type StockDetailsTypes = {
  stocks: {
    stockLogo: string | null;
    homepage_url: string;
    industry: string;
    description: string;
    sic_description: string;
    name: string;
    branding: { logo_url: string };
    ticker: string;
  };
  prices: { c: string; h: string; l: string; o: string; v: string };
};

const mapToUiModel = ({ stocks, prices }: StockDetailsTypes) => {
  const {
    branding,
    ticker,
    homepage_url,
    industry,
    description,
    sic_description,
    name,
  } = stocks;

  const {
    c, h, l, o, v,
  } = prices;

  if (stocks) {
    return {
      stockLogo: branding?.logo_url || null,
      stockTicker: ticker || '',
      url: homepage_url || '',
      stockIndustry: industry || null,
      stockDescription: description || sic_description,
      stockName: name || '',
      closePrice: c || '',
      openPrice: o || '',
      highPrice: h || '',
      lowPrice: l || '',
      volume: v || '',
    };
  }
  return null;
};

export const StockDetailsMapper = { mapToUiModel };
