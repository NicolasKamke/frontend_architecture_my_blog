// Importando a biblioteca styled-components
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 350px;
  background-color: #2f558d;
  color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const Biography = styled.div`
  height: 100%;
  width: 50%;
`;

const Title = styled.h1`
  font-size: xxx-large;
`;

const Description = styled.span`
  display: flex;
`;

export { Container, Content, Image, Title, Biography, Description };
