import React from 'react';
import copyImg from '../../Assets/Images/copy.svg'
import { BtnRoomCode } from './StyleRoomCode';


type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipBoard(){
    navigator.clipboard.writeText(props.code)
  }


  return (
    <BtnRoomCode onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </BtnRoomCode>
  )
}