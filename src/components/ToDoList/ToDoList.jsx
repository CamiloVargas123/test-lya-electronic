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
        list.length > 0 ? 
          <ul className='todolist__cards'>
            {list.map((item, idx) => {
              return <li key={idx}><Card data={item} id={idx} /></li>
            })}
          </ul>
        :
          <Empty />
      }
    </div>
  )
}
