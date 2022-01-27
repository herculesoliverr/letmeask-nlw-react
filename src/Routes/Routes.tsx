import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { NewRoom } from '../Pages/NewRoom/NewRoom';

const Routes = () =>
  useRoutes([
    { path: "/", element: <Home/>},
    { path: "/rooms/new", element: <NewRoom/>}
])

export function Routing() {
  return(
    <Routes/>
  )
}