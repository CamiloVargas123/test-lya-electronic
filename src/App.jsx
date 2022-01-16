import { useState } from 'react'
import ToDoList from './components/ToDoList/ToDoList'
import Buttons from './components/Buttons/Buttons'
import { getToDoList } from './api/toDoList'

import './App.scss'

function App() {
  const [list, setList] = useState(getToDoList())
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='container App-header__content'>
          <h1>ToDo List</h1>
          <p>Technical tests of Lya-Electronic</p>
        </div>
      </header>
      <div className='container App-content'>
        <Buttons setList={setList} />
        <ToDoList list={list} />
      </div>
    </div>
  )
}

export default App
