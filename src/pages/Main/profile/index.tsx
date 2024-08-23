import React from 'react';
import { Container, Title, Description } from './styles';

export default function ProfilePage() {
  return (
    <Container>
      <Title>Sobre mim</Title>
      <Description>
      Sou fisioterapeuta formado pela Faculdade IPA, com especialização em acupuntura e liberação miofascial.
       Meu compromisso é proporcionar tratamentos personalizados e integrativos, combinando técnicas tradicionais e modernas para 
       ajudar meus pacientes a alcançar alívio da dor e recuperação funcional. Acredito na importância de entender cada indivíduo 
       como um todo, adaptando minhas abordagens para atender às suas necessidades específicas e promover o bem-estar integral.
        Estou sempre em busca de aprimorar minhas habilidades e conhecimentos para oferecer o melhor cuidado possível.
      </Description>
    </Container>
  );
}
