import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { NewRoom } from '../Pages/NewRoom/NewRoom';
import { Room } from '../Pages/Room/Room';

const Routes = () =>
  useRoutes([
    { path: "/", element: <Home/>},
    { path: "/rooms/new", element: <NewRoom/>},
    { path: "/rooms/:id", element: <Room/>}
])

export function Routing() {
  return(
    <Routes/>
  )
}