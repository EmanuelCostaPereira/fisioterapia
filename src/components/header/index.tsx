import React from 'react';
import { Container, StyledImage, ButtonWrapper, ButtonGroup, Button, Title, ButtonContact, Link as StyledLink } from './styles';
import { Link } from 'react-router-dom';
import headImg from '../../assets/logo1.png';

export function Header() {
  return (
    <Container> 
      <Link to="/">
        <StyledImage src={headImg} alt="Header Image" />
      </Link>
      <ButtonWrapper>
        <div>
          <Title>Tratamentos</Title>
          <ButtonGroup>
            <Link to="/acupuntura">
              <Button>Acupuntura</Button>
            </Link>
            <Link to="/ventosa">
            <Button>Ventosas</Button>
            </Link>
            <Link to="/liberacao">
            <Button>Liberação Miofascial</Button>
            </Link>
            <Link to="/auriculoterapia">
            <Button>Auriculoterapia</Button>
            </Link>
          </ButtonGroup>
        </div>
      </ButtonWrapper>
      <ButtonContact>
        <Title>Contatos</Title>
        <ButtonGroup>
          <StyledLink href="https://www.instagram.com/drgustavoacupuntura/" target="_blank" rel="noopener noreferrer">
            <Button>Instagram</Button>
          </StyledLink>
          <StyledLink href="https://wa.me/5551995920506?text=Ol%C3%A1%20Gustavo%2C%20vi%20o%20seu%20site%2C%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
            <Button>Whatsapp</Button>
          </StyledLink>
        </ButtonGroup>
      </ButtonContact>
    </Container>
  );
}
