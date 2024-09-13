/* eslint-disable import/no-unresolved */
import React from 'react';
import DogImg from 'src/assets/images/Original_Dog_meme.jpg';
import biography from 'src/constants/biography.json';
import NavBar from '../NavBar/NavBar';
import {
  Container,
  Content,
  Image,
  Title,
  Biography,
  Description,
} from './Header.styles';

function Header() {
  return (
    <Container data-testid="Header">
      <NavBar />
      <Content data-testid="Content">
        <Image src={DogImg} alt="Dog_meme" />
        <Biography data-testid="Biography">
          <Title>{biography.name}</Title>
          <Description>{biography.description}</Description>
        </Biography>
      </Content>
    </Container>
  );
}

export default Header;
