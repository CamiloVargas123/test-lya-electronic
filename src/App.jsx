import { useState } from 'react'
import ToDoList from './components/ToDoList/ToDoList'
import Buttons from './components/Buttons/Buttons'


import './App.scss'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='container App-header__content'>
          <h1>ToDo List</h1>
          <p>Technical tests of Lya-Electronic</p>
        </div>
      </header>
      <div className='container App-content'>
        <Buttons />
        <ToDoList />
      </div>
    </div>
  )
}

export default App
