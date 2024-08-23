import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <Container>
      <Header />
      <section>
        <Outlet />
      </section>
    </Container>
  );
}
