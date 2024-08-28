import auriculoterapiaImg1 from '../../../assets/auriculoterapia.webp' // Certifique-se de ter a imagem no caminho correto
import auriculoterapiaImg2 from '../../../assets/auriculoterapia1.webp' // Certifique-se de ter a imagem no caminho correto
import {
  AuriculoterapiaImage,
  Container,
  ContentWrapper,
  Description,
  ImageWrapper,
  SubTitle,
  Title,
} from './styles'

export default function AuriculoterapiaPage() {
  return (
    <Container>
      <Title>Auriculoterapia</Title>
      <ContentWrapper>
        <ImageWrapper className='primary-image'>
          <AuriculoterapiaImage src={auriculoterapiaImg1} alt='Imagem de Auriculoterapia' />
        </ImageWrapper>
        <Description>
          <SubTitle>O que é Auriculoterapia?</SubTitle>A auriculoterapia é uma técnica de medicina
          alternativa que se baseia na estimulação de pontos específicos na orelha para tratar
          diversas condições de saúde e promover o bem-estar.auriculoterapia se concentra
          exclusivamente na orelha, A teoria da auriculoterapia é que a orelha é um microcosmo do
          corpo humano e que diferentes pontos na orelha correspondem a diferentes órgãos e sistemas
          do corpo.
          <SubTitle>Como Funciona a Auriculoterapia?</SubTitle> Durante uma sessão de
          auriculoterapia, o terapeuta identifica pontos sensíveis na orelha e os estimula usando
          pequenas agulhas, sementes, esferas metálicas, ou dispositivos de pressão. A estimulação
          desses pontos visa equilibrar a energia no corpo, aliviar a dor, reduzir o estresse, e
          promover o bem-estar geral.
          <SubTitle>Benefícios da Auriculoterapia</SubTitle>A auriculoterapia é frequentemente
          utilizada para tratar uma ampla gama de condições, incluindo dores crônicas, distúrbios do
          sono, ansiedade, problemas digestivos, dores de cabeça, vícios como tabagismo, e até mesmo
          para auxiliar na perda de peso. Esta técnica é segura, não invasiva e bem tolerada pela
          maioria dos pacientes.
        </Description>
        <ImageWrapper className='second-image'>
          <AuriculoterapiaImage src={auriculoterapiaImg2} alt='Imagem de Auriculoterapia' />
        </ImageWrapper>
      </ContentWrapper>
    </Container>
  )
}
