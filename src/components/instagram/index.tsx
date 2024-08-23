// src/components/Button/index.tsx

import React from 'react';
import { StyledButton } from './styles';

// Definindo o componente de botão que redireciona para o Instagram
const Instagram = () => {
  return (
    <StyledButton href="https://www.instagram.com/drgustavoacupuntura/" target="_blank" rel="noopener noreferrer">
      Instagram
    </StyledButton>
  );
};

export default Instagram;
