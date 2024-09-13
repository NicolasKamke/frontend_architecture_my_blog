import React from 'react';
import { Container, Button } from './NavBar.styles';

function NavBar() {
  return (
    <Container data-testid="NavBar">
      <Button type="button">Blog</Button>
      <Button type="button">Sobre</Button>
      <Button type="button">Descrição</Button>
    </Container>
  );
}

export default NavBar;
