/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import latestNewsList from 'src/constants/latestNewsList.json';
import {
  Container,
  List,
  Title,
  Button,
  NoticeTitle,
  NoticeDescription,
} from './LatestNewsList.styles';

function LatestNewsList() {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? latestNewsList : latestNewsList.slice(0, 3);

  return (
    <Container data-testid="LatestNewsList">
      <Title>Últimas do blog</Title>
      <List>
        {displayedItems.map((item) => (
          <li>
            <NoticeTitle>{item.titulo}</NoticeTitle>
            <NoticeDescription>{item.descricao}</NoticeDescription>
          </li>
        ))}
      </List>
      <Button onClick={() => setShowAll((lastValue) => !lastValue)}>
        {showAll ? 'Mostrar Menos' : 'Mostrar Todos'}
      </Button>
    </Container>
  );
}

export default LatestNewsList;
