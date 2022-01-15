import React, {useState, useEffect} from 'react'
import { Empty } from 'antd'

import './ToDoList.scss'

export default function ToDoList() {
  const [list, setList] = useState(localStorage.getItem("todolist"))
  console.log(list)
  return (
    <div className='todolist'>
      {
        list ? 
          <ul>
            {list.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        :
          <Empty />
      }
    </div>
  )
}
