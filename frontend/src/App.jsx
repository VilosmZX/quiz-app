import { useEffect } from 'react';
import { useState } from 'react'
import io from 'socket.io-client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UserContextProvider from './context/Context';
import GamePage from './pages/GamePage/GamePage';

function App() {

  return (
   <BrowserRouter>
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='game' element={<GamePage />}/>
        </Routes>
    </UserContextProvider>
   </BrowserRouter>
  )
}

export default App
