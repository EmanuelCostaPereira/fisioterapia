import React from 'react';
import { Container, Title, Description, ContentWrapper, SubTitle, TherapyImage, ImageWrapper } from './styles';
import miofascialImg1 from '../../../assets/liberacao.webp'; // Certifique-se de ter a imagem no caminho correto
import miofascialImg2 from '../../../assets/liberacao1.webp'; // Certifique-se de ter a imagem no caminho correto

export default function LiberacaoMiofascialPage() {
  return (
    <Container>
      <Title>Liberação Miofascial</Title>
      <ContentWrapper>
        <ImageWrapper>
          <TherapyImage src={miofascialImg1} alt="Imagem de Liberação Miofascial" />
        </ImageWrapper>
        <Description>
          <SubTitle>O que é Liberação Miofascial?</SubTitle>
          Liberação Miofascial é uma técnica terapêutica manual utilizada para aliviar a dor e melhorar a mobilidade através da manipulação da fáscia, um tecido conjuntivo que envolve e suporta músculos e órgãos em todo o corpo. A fáscia pode se tornar rígida ou aderente devido a trauma, inflamação, má postura, ou tensão crônica, o que pode causar dor e limitar a amplitude de movimento.
          <SubTitle>Como Funciona a Liberação Miofascial?</SubTitle>
          A terapia de liberação miofascial envolve o uso de pressão suave e sustentada sobre áreas específicas do corpo para liberar tensões e aderências na fáscia. Ao aplicar essa pressão, o terapeuta visa esticar e remodelar o tecido fascial, ajudando a restaurar a flexibilidade e a mobilidade natural.
          <SubTitle>Benefícios da Liberação Miofascial</SubTitle>
          Um dos principais benefícios da liberação miofascial é o alívio da dor e da rigidez muscular. Além disso, ao melhorar a circulação sanguínea e a drenagem linfática, essa técnica pode acelerar a recuperação de lesões, reduzir a inflamação e melhorar a postura. A liberação miofascial é uma abordagem segura e eficaz, adequada para pessoas de todas as idades.
        </Description>
        <ImageWrapper>
          <TherapyImage src={miofascialImg2} alt="Imagem de Liberação Miofascial" />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  );
}
