import React from 'react';
import { Container, StyledImage, ButtonWrapper, ButtonGroup, Button, Title, ButtonContact, Link as StyledLink } from './styles';
import { Link, useLocation } from 'react-router-dom';
import headImg from '../../assets/logo1.png';

export function Header() {
  const location = useLocation();

  return (
    <Container> 
      {/* Adiciona a classe "active" quando estiver na página inicial */}
      <Link to="/">
        <StyledImage src={headImg} alt="Header Image" className={location.pathname === "/" ? "active" : ""} />
      </Link>
      <ButtonWrapper>
        <div>
          <Title>Tratamentos</Title>
          <ButtonGroup>
            <Link to="/acupuntura">
              <Button className={location.pathname === "/acupuntura" ? "active" : ""}>Acupuntura</Button>
            </Link>
            <Link to="/auriculoterapia">
              <Button className={location.pathname === "/auriculoterapia" ? "active" : ""}>Auriculoterapia</Button>
            </Link>
            <Link to="/liberacao">
              <Button className={location.pathname === "/liberacao" ? "active" : ""}>Liberação Miofascial</Button>
            </Link>
            <Link to="/ventosa">
              <Button className={location.pathname === "/ventosa" ? "active" : ""}>Ventosas</Button>
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
