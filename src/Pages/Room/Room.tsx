import React from 'react';
import { PageRoom, ContentRoom, ContentMain, RoomTitle, FormFooter } from './StyleRoom'
import logoImg from '../../Assets/Images/logo.svg'
import { Button } from '../../Components/Button/Button';


export function Room() {
  return (
    <PageRoom>
      <header>
        <ContentRoom>
          <img src={logoImg} alt="Logo Letmeask"/>
          <div>Codigo</div>
        </ContentRoom>
      </header>

      <ContentMain>
        <RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </RoomTitle>

        <form>
          <textarea
          placeholder='O que você quer perguntar?'
          />
          <FormFooter>
            <span>Para enviar uma perguntas, <button>faça seu login</button>.</span>
            <Button className='buttonPergunta' type='submit'>Enviar pergunta</Button>
          </FormFooter>
        </form>
      </ContentMain>
    </PageRoom>
  )
}