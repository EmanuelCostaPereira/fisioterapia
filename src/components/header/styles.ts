import styled from 'styled-components';

export const Container = styled.div`
  height: 170px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 0px 0px 15px 15px;
  position: relative; /* Necessário para o posicionamento absoluto dos filhos */
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
`;

export const ButtonWrapper = styled.div`
  position: absolute; /* Permite posicionar o elemento onde quisermos dentro do contêiner pai */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta o alinhamento central absoluto */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContact = styled.div`
  position: absolute; /* Permite posicionar o elemento na direita */
  top: 50%; /* Centraliza verticalmente */
  right: 20px; /* Afasta o elemento da direita do contêiner */
  transform: translateY(-50%); /* Centraliza verticalmente o conteúdo */
  display: flex;
  flex-direction: column; /* Empilha o título e os botões verticalmente */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center; /* Centraliza verticalmente o conteúdo */
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
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
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: inline-block;
`;
