import { useParams } from 'react-router-dom';
import React, { FormEvent, useEffect, useState } from 'react';
import { PageRoom, ContentRoom, ContentMain, RoomTitle, FormFooter } from './StyleRoom';
import logoImg from '../../Assets/Images/logo.svg';
import { Button } from '../../Components/Button/Button';
import { RoomCode } from '../../Components/RoomCode/RoomCode';
import { useAuth } from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { database } from '../../Services/Firebase';

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

type RoomParams = {
  id: string;
}

export function Room() {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  const roomId = params.id;
  const [questions, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('')

  const errorUser = () => toast.error('You must be logged in!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    useEffect(() => {
      const roomRef = database.ref(`rooms/${roomId}`)
      roomRef.on('value', room => {
        const databaseRoom = room.val();
        const firebaseQuestions: FirebaseQuestions = databaseRoom.questions  ?? {};
        const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered
          }
        })

        setTitle(databaseRoom.title)
        setQuestions(parsedQuestions)
      })

    }, [roomId])

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()
    if (newQuestion.trim() === ''){
      return;
    }

    if (!user){
      errorUser()
    }

    const questions = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(questions)

    setNewQuestion('')
  }

  return (
    <PageRoom>
      <header>
        <ContentRoom>
          <img src={logoImg} alt="Logo Letmeask"/>
          <RoomCode code={params.id!}/>
        </ContentRoom>
      </header>

      <ContentMain>
        <RoomTitle>
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} perguntas</span>}
        </RoomTitle>

        <form onSubmit={handleSendQuestion}>
          <textarea
          placeholder='O que você quer perguntar?'
          onChange={event => setNewQuestion(event.target.value)}
          value={newQuestion}
          />
          <FormFooter>
            { user ? (
              <div className='user-info'>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar uma perguntas, <button type='button'>faça seu login</button>.</span>
            )}
            <Button  className='buttonPergunta' type='submit' disabled={!user}>Enviar pergunta</Button>
          </FormFooter>
        </form>
        {JSON.stringify(questions)}
      </ContentMain>
    </PageRoom>
  )
}

function userAuth() {
  throw new Error('Function not implemented.');
}
