import React from 'react';
import IllustrationImg from '../../Assets/Images/illustration.svg'
import logoImg from '../../Assets/Images/logo.svg'
import googleIconImg from '../../Assets/Images/google-icon.svg'
import {Container, Separator, MainContent, BtnCreateRoom} from './StyleHome'
import { Button } from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';

export function Home() {
  const navigate = useNavigate()
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if(!user){
      await signInWithGoogle()
    }
    navigate('/rooms/new')
  }

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
          <BtnCreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </BtnCreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </MainContent>
      </main>
    </Container>
    );
}

