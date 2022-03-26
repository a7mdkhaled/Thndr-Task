import styled from 'styled-components/native';

const PressableStockButton = styled.TouchableOpacity`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StockTitle = styled.Text`
  color: white;
  font-size: 20px;
  letter-spacing: 2px;
`;

const StockSubtitle = styled.Text`
  color: white;
  letter-spacing: 1px;
`;

const SeperatorLine = styled.View`
  background-color: white;
  height: 0.1px;
  flex:1;
  padding:0.3px
`;

const Container = styled.View`
  flex:1;
`;

export {
  PressableStockButton, StockTitle, StockSubtitle, SeperatorLine, Container,
};
