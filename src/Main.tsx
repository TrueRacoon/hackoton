import { FC } from 'react';
import { Title } from './Title';
import { SearchBar } from './SearchBar';
import { Calendar } from './Calendar';

export const Main: FC = () => {
  return (
    <>
      <Title>Календарь собраний</Title>
      <SearchBar />
      <Calendar />
    </>
  );
};
