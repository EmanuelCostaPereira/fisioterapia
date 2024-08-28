import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Header />
      <section>
        <Outlet />
      </section>
    </Container>
  )
}
