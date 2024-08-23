import React from 'react';
import { Container, Title, Description, ContentWrapper, SubTitle, TherapyImage, ImageWrapper } from './styles';
import ventosasImg1 from '../../../assets/ventosas.webp'; // Certifique-se de ter a imagem no caminho correto

export default function VentosasPage() {
  return (
    <Container>
      <Title>Ventosas</Title>
      <ContentWrapper>
        <ImageWrapper>
          <TherapyImage src={ventosasImg1} alt="Imagem de Ventosas" />
        </ImageWrapper>
        <Description>
          <SubTitle>O que é Ventosas?</SubTitle>
          Ventosas é uma terapia tradicional que faz parte da medicina chinesa e de outras culturas ao redor do mundo. Essa técnica envolve o uso de copos, geralmente de vidro, bambu ou plástico, que são aquecidos ou aplicados com um método de sucção para criar um vácuo. Quando os copos são colocados sobre a pele, o vácuo resultante eleva suavemente a pele e os tecidos subjacentes, promovendo uma série de benefícios terapêuticos.
          <SubTitle>Como Funciona a Ventosaterapia?</SubTitle>
          A terapia com ventosas é conhecida por ajudar a melhorar a circulação sanguínea local, reduzir a dor muscular, aliviar tensões e promover o relaxamento. Ao aumentar o fluxo sanguíneo para uma área específica, as ventosas podem acelerar o processo de recuperação e reduzir a inflamação.
          <SubTitle>Benefícios da Ventosaterapia</SubTitle>
          As ventosas também são apreciadas por sua capacidade de promover o bem-estar geral e ajudar na desintoxicação do corpo. Esta terapia é segura quando realizada por um profissional qualificado e pode ser uma excelente adição a um plano de tratamento integrativo para o alívio da dor e a promoção da saúde.
        </Description>
        <ImageWrapper>
          <TherapyImage src={ventosasImg1} alt="Imagem de Ventosas" />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  );
}
