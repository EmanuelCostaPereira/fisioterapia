import auriculotherapyImg1 from '../../../assets/auriculoterapia.webp' // Certifique-se de ter a imagem no caminho correto
import auriculotherapyImg2 from '../../../assets/auriculoterapia1.webp' // Certifique-se de ter a imagem no caminho correto
import {
  Container,
  ContentWrapper,
  Description,
  ImageWrapper,
  SubTitle,
  TherapyImage,
  Title,
} from './styles'

export default function AuriculoterapiaPage() {
  return (
    <Container>
      <Title>Auriculoterapia</Title>
      <ContentWrapper>
        <ImageWrapper className='primary-image'>
          <TherapyImage src={auriculotherapyImg1} alt='Imagem de Auriculoterapia' />
        </ImageWrapper>
        <Description>
          <SubTitle>O que é Auriculoterapia?</SubTitle>
          Auriculoterapia é uma técnica terapêutica baseada na estimulação de pontos específicos na
          orelha para tratar uma variedade de condições de saúde. Originária da medicina tradicional
          chinesa, esta técnica também foi popularizada na França no século XX pelo Dr. Paul Nogier.
          A auriculoterapia se fundamenta na ideia de que a orelha é um microcosmo do corpo humano,
          onde cada ponto corresponde a uma parte específica do corpo ou a um sistema orgânico.
          <SubTitle>Como Funciona a Auriculoterapia?</SubTitle>
          Durante uma sessão de auriculoterapia, o terapeuta identifica pontos sensíveis na orelha e
          os estimula usando pequenas agulhas, sementes, esferas metálicas, ou dispositivos de
          pressão. A estimulação desses pontos visa equilibrar a energia no corpo, aliviar a dor,
          reduzir o estresse, e promover o bem-estar geral.
          <SubTitle>Benefícios da Auriculoterapia</SubTitle>A auriculoterapia é frequentemente
          utilizada para tratar uma ampla gama de condições, incluindo dores crônicas, distúrbios do
          sono, ansiedade, problemas digestivos, dores de cabeça, vícios como tabagismo, e até mesmo
          para auxiliar na perda de peso. Esta técnica é segura, não invasiva e bem tolerada pela
          maioria dos pacientes, tornando-se uma opção atraente para aqueles que procuram terapias
          naturais e integrativas.
        </Description>
        <ImageWrapper>
          <TherapyImage src={auriculotherapyImg2} alt='Imagem de Auriculoterapia' />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  )
}
