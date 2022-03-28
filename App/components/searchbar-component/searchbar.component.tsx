import React from 'react';
import { SearchBarComponent } from './searchbar.styles';

type SearchProps = {
  onTextChange: Function;
};

function SearchBar({ onTextChange }: SearchProps) {
  return (
    <SearchBarComponent accessibilityLabel="search" testID="search" onChangeText={onTextChange} placeholder="Search!" />
  );
}

export default SearchBar;
