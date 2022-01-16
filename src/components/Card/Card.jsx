import React from 'react'
import { useList } from '../../provider/ListProvider'
import { removeToDoList, updateToDoList } from '../../api/toDoList'

import './Card.scss'

export default function Card({data, id}) {
  let listTask = data.description.split("\n")
  const { list, setList } = useList()
  console.log(list)
  const removeTask = () => {
    setList(e => e.filter((e,i) => i != id))
    removeToDoList(id)
  }
  const checkTask = () => {
    const newArray = [...list]
    newArray[id].check = !newArray[id].check
    setList(newArray)
    updateToDoList(newArray)
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
      <button className={data.check === true ? " card__btn check" : "card__btn"} onClick={() => checkTask()} >{data.check === true ? "Done" : "Progress"}</button>
    </div>
  )
}
