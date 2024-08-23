import styled from 'styled-components';

export const Container = styled.div`
  height: 170px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 20px; /* Adiciona padding lateral */
`;

export const StyledImage = styled.img`
  height: 140px; 
  width: auto;
`;

export const ButtonWrapper = styled.div`
  flex: 1; /* Permite que o wrapper ocupe o espaço restante */
  display: flex;
  flex-direction: column; /* Empilha o título e o grupo de botões verticalmente */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center; /* Centraliza verticalmente o conteúdo */
`;

export const ButtonContact = styled.div`
  display: flex;
  flex-direction: column; /* Empilha o título e os botões verticalmente */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: center; /* Centraliza verticalmente o conteúdo */
`;

export const Title = styled.h2`
  margin-bottom: 10px; /* Espaçamento entre o título e os botões */
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
`;

export const Link = styled.a`
  text-decoration: none; /* Remove underline dos links */
  display: inline-block; /* Garante que o espaçamento seja aplicado corretamente */
`;
