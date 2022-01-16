import React from 'react'
import Card from '../Card/Card'
import { useList } from '../../provider/ListProvider'

import { Empty } from 'antd'

import './ToDoList.scss'

export default function ToDoList() {
  const {list} = useList()
  
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
