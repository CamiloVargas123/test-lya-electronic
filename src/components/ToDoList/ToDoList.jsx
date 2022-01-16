import React from 'react'
import Card from '../Card/Card'

import { Empty } from 'antd'

import './ToDoList.scss'

export default function ToDoList({list}) {
  
  return (
    <div className='todolist'>
      {
        list ? 
          <ul className='todolist__cards'>
            {list.map((item, idx) => {
              return <li key={idx}><Card data={item} /></li>
            })}
          </ul>
        :
          <Empty />
      }
    </div>
  )
}
