import React from 'react'
import Message from '../components/Message';
import '../styles/App.css'
import Header from './../components/Header';
import CreateMessage from './../components/CreateMessage';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <CreateMessage />
      <Message />
    </div>
  )
}

export default App
