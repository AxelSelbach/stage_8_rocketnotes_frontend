import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/AxelSelbach.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>Axel Selbach</strong>
        </div>
      </Profile>
    </Container>
  )
}