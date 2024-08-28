import acupunctureImg1 from '../../../assets/acupuntura.webp'; // Certifique-se de ter a imagem no caminho correto
import acupunctureImg2 from '../../../assets/acupuntura1.webp'; // Certifique-se de ter a imagem no caminho correto
import { AcupunctureImage, Container, ContentWrapper, Description, ImageWrapper, SubTitle, Title } from './styles';

export default function AcupunturaPage() {
  return (
    <Container>
      <Title>Acupunturaaaa</Title>
      <ContentWrapper>
        <ImageWrapper>
          <AcupunctureImage src={acupunctureImg1} alt="Imagem de Acupuntura" />
        </ImageWrapper>
        <Description>
          <SubTitle>O que é Acupuntura?</SubTitle>
          A acupuntura é uma prática terapêutica da medicina tradicional chinesa que envolve a inserção de agulhas finas em pontos específicos do corpo para promover o equilíbrio energético, aliviar a dor e melhorar o bem-estar geral. Essa técnica milenar tem sido usada há milhares de anos para tratar uma ampla variedade de condições, incluindo dores musculares, dores crônicas, ansiedade, insônia, problemas digestivos e muito mais.
          <SubTitle>Como Funciona a Acupuntura?</SubTitle>
          A acupuntura funciona estimulando o sistema nervoso, promovendo a liberação de substâncias químicas naturais no corpo, como endorfinas, que ajudam a reduzir a dor e melhorar o humor. Além disso, a acupuntura pode ajudar a equilibrar o fluxo de energia no corpo, restaurando o equilíbrio natural e promovendo a cura.
          <SubTitle>Benefícios da Acupuntura</SubTitle>
          É uma terapia segura e eficaz quando realizada por profissionais qualificados, sendo reconhecida pela Organização Mundial da Saúde (OMS) como um método válido para o tratamento de várias condições de saúde. A acupuntura pode aliviar a dor, reduzir o estresse, melhorar a qualidade do sono e promover o bem-estar geral.
        </Description>
        <ImageWrapper>
          <AcupunctureImage src={acupunctureImg2} alt="Imagem de Acupuntura" />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  );
}
