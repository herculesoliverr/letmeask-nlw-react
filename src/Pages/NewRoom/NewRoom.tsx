import React from 'react';
import IllustrationImg from '../../Assets/Images/illustration.svg'
import logoImg from '../../Assets/Images/logo.svg'
import { Container,  MainContent } from './StyleNewRoom'
import { Button } from '../../Components/Button/Button';
import { Link } from 'react-router-dom';

export function NewRoom() {
  return (
    <Container>
      <aside>
        <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Logo Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link> </p>
        </MainContent>
      </main>
    </Container>
    );
}

