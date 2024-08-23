// src/components/Button/styles.ts

import styled from 'styled-components';

// Definindo os estilos para o botão usando styled-components
export const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
