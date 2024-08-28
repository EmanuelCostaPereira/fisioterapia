import { Link as RouterLink } from 'react-router-dom'; // Importa Link do react-router-dom
import styled from 'styled-components';

// Define uma interface para as props
interface MobileMenuProps {
  isOpen: boolean;
}

export const Container = styled.div`
  height: 170px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 0px 0px 15px 15px;
  position: relative;

  @media (max-width: 1241px) {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
  }
`;

export const StyledImage = styled.img`
  height: 140px;
  width: auto;
  cursor: pointer; 
  transition: box-shadow 0.3s;
  border-radius: 50%;

  &:hover,
  &.active {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 1241px) {
    height: 100px;
    margin-bottom: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1241px) {
    position: static;
    transform: none;
    margin-bottom: 20px;
  }
`;

export const ButtonContact = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1241px) {
    position: static;
    transform: none;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;

  @media (max-width: 1241px) {
    font-size: 24px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1241px) {
    flex-direction: column;
    gap: 10px; /* Espaçamento entre botões no modo mobile */
  }
`;

export const ButtonGroupSocial = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1241px) {
    flex-direction: column;
    gap: 10px; /* Espaçamento entre botões no modo mobile */
  }
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondary};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.white}; /* Cor branca apenas quando ativo */
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 1241px) {
    width: 100%; /* Botões ocupam 100% da largura no mobile */
  }
`;


export const StyledLink = styled.a`
  text-decoration: none;
  display: inline-block;
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1241px) {
    display: block;
    position: absolute;
    right: 37px;
    top: 37px;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: flex; /* Mantém display flex em telas maiores */
  width: 100%;

  @media (max-width: 1241px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

// Adicionando o StyledLink para estilizar o Link do react-router-dom
export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
