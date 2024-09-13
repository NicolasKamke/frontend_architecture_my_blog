/* eslint-disable import/no-unresolved */
import React from 'react';
import Header from 'src/components/Header/Header';
import LatestNewsList from 'src/components/LatestNewsList/LatestNewsList';
import { Container } from './Home.styles';

function Home() {
  return (
    <Container data-testid="Home">
      <Header />
      <LatestNewsList />
    </Container>
  );
}

export default Home;
