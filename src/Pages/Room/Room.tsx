import { useParams } from 'react-router-dom';
import React, { FormEvent, useState } from 'react';
import { PageRoom, ContentRoom, ContentMain, RoomTitle, FormFooter, QuestionList } from './StyleRoom';
import logoImg from '../../Assets/Images/logo.svg';
import { Button } from '../../Components/Button/Button';
import { RoomCode } from '../../Components/RoomCode/RoomCode';
import { useAuth } from '../../Hooks/useAuth';
import { database } from '../../Services/Firebase';
import { Question } from '../../Components/Questions/Questions';
import { useRoom } from '../../Hooks/useRoom';


type RoomParams = {
  id: string;
}

export function Room() {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  const roomId = params.id;
  const {questions, title} = useRoom(roomId!)

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()
    if (newQuestion.trim() === ''){
      return;
    }

    if (!user){
      throw new Error ('You must be logged in!')
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
        <QuestionList>
          {questions.map(question => {
            return(
              <Question
              key={question.id}
              content={question.content}
              author={question.author}
              />
            )
          })}
        </QuestionList>

      </ContentMain>
    </PageRoom>
  )
}

// function userAuth() {
//   throw new Error('Function not implemented.');
// }
