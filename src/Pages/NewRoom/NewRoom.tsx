import React, { FormEvent, useState } from 'react';
import IllustrationImg from '../../Assets/Images/illustration.svg'
import logoImg from '../../Assets/Images/logo.svg'
import { Container,  MainContent } from './StyleNewRoom'
import { Button } from '../../Components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { database } from '../../Services/Firebase'
import { useAuth } from '../../Hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [ newRoom, setNewRoom ] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }

    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })
    
    navigate(`/rooms/${firebaseRoom.key}`)
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
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

