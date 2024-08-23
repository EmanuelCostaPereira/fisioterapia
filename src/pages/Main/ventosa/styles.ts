import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: justify;
  color: #555;
  max-width: 700px;
  line-height: 1.6;
  margin: 0 20px; /* Adiciona margem ao redor do texto */
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* Permite que o conteúdo se adapte em telas menores */
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TherapyImage = styled.img`
  width: 300px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

