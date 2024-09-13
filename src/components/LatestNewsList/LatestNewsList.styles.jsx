// Importando a biblioteca styled-components
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 25px;
`;

const Title = styled.h2`
  font-size: xx-large;
`;

const Button = styled.button`
  color: #2f558d;
  background: transparent;
  border: transparent;
  cursor: pointer;
  padding: 0;
  font-size: medium;
  font-weight: bold;
`;

const NoticeTitle = styled.h3``;
const NoticeDescription = styled.span``;

export { Container, Title, Button, List, NoticeTitle, NoticeDescription };
