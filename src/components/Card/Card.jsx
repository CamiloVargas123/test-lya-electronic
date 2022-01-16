import React from 'react'
import { useList } from '../../provider/ListProvider'
import { removeToDoList } from '../../api/toDoList'

import './Card.scss'

export default function Card({data, id}) {
  let listTask = data.description.split("\n")
  const {setList} = useList()
  const removeTask = () => {
    setList(e => e.filter((e,i) => i != id))
    removeToDoList(id)
  }
  return (
    <div className='card'>
      <div className='card__header'>
        <h2>{data.title}</h2>
        <button onClick={() => removeTask()}>X</button>
      </div>
      <div className='card__content'>
        <ul>
          {
            listTask.map((e, idx) => e.length > 0 && <li key={idx}>{e}</li>)        
          }
        </ul>
      </div>
      <button className={data.check ? " card__btn check" : "card__btn"} >{data.check ? "Done" : "Progress"}</button>
    </div>
  )
}
