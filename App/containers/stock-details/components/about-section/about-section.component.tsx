import React from 'react';
import { Alert, Linking, Text } from 'react-native';

import {
  SectionTitle,
  AboutContainer,
  Description,
  UrlButton,
} from './about-section.styles';

type AboutProps = {
  stockDescription: string;
  stockIndustry: string;
  url: string | '';
};

function AboutSection({ url, stockDescription, stockIndustry }: AboutProps) {
  const handleOpenLink = () => Linking.openURL(url).catch(() => Alert.alert("Don't Know How To Open That!"));
  return (
    <AboutContainer>
      <SectionTitle>About</SectionTitle>
      <Description numberOfLines={4}>{stockDescription}</Description>
      {!!stockIndustry && <Text>{stockIndustry}</Text>}
      {!!url && (
        <UrlButton onPress={handleOpenLink}>
          <Text>Visit Website</Text>
        </UrlButton>
      )}
    </AboutContainer>
  );
}

export default AboutSection;
