import React, {useState} from 'react'
import { useList } from '../../provider/ListProvider'
import { removeToDoList, updateToDoList } from '../../api/toDoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import ModalTask from '../../utils/ModalTask/ModalTask'

import './Card.scss'

export default function Card({data, id}) {
  let listTask = data.description.split("\n")
  const { list, setList, setListStatic } = useList()
  
  const [isModalVisible, setIsModalVisible] = useState(false)

  const removeTask = () => {
    setList(e => e.filter((e,i) => i != id))
    setListStatic(e => e.filter((e,i) => i != id))
    removeToDoList(id)
  }
  const checkTask = () => {
    const newArray = [...list]
    newArray[id].check = !newArray[id].check
    setList(newArray)
    setListStatic(newArray)
    updateToDoList(newArray)
  }

  const editTask = () => {
    setIsModalVisible(true)
  }

  return (
    <div className='card'>
      <div className='card__header'>
        <button className='card__header__btn-edit' onClick={() => editTask()}><FontAwesomeIcon icon={faEdit} /></button>
        <ModalTask isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} data={list[id]} id={id} />
        <h2>{data.title}</h2>
        <button className='card__header__btn-delete' onClick={() => removeTask()}><FontAwesomeIcon icon={faTimes} /></button>
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
