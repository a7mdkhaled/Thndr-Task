import React from 'react';
import { SearchBarComponent } from './searchbar.styles';

type SearchProps = {
  onTextChange: Function;
};

function SearchBar({ onTextChange }: SearchProps) {
  return (
    <SearchBarComponent testID="search" onChangeText={onTextChange} placeholder="Search!" />
  );
}

export default SearchBar;
