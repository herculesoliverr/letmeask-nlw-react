import React from 'react';
import { ContainerQuestion, UserInfo } from './StyleQuestion';


type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }

}

export function Question({content, author}: QuestionProps){
  return(
    <ContainerQuestion className='question'>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>

        </div>
      </footer>
    </ContainerQuestion>
  )
}