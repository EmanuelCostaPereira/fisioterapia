import React from 'react';
import { Container, StyledImage, ButtonWrapper, ButtonGroup, Button, Title, ButtonContact, Link } from './styles';
import headImg from '../../assets/logo 1.png';

export function Header() {
  return (
    <Container>
      <StyledImage src={headImg} alt="Header Image" />
      <ButtonWrapper>
        <div>
          <Title>Tratamentos</Title>
          <ButtonGroup>
            <Button>Acupuntura</Button>
            <Button>Ventosas</Button>
            <Button>Liberação Miofascial</Button>
            <Button>Auriculoterapia</Button>
          </ButtonGroup>
        </div>
      </ButtonWrapper>
      <ButtonContact>
        <Title>Contatos</Title>
        <ButtonGroup>
          <Link href="https://www.instagram.com/drgustavoacupuntura/" target="_blank" rel="noopener noreferrer">
            <Button>Instagram</Button>
          </Link>
          <Link href="https://wa.me/5551995920506?text=Ol%C3%A1%20Gustavo%2C%20vi%20o%20seu%20site%2C%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
            <Button>Whatsapp</Button>
          </Link>
        </ButtonGroup>
      </ButtonContact>
    </Container>
  );
}
