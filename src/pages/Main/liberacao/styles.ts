import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #555;
  max-width: 600px;
  line-height: 1.5;
`;
