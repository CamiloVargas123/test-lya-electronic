import React, {useState} from 'react'
import { Modal, Slider, InputNumber } from 'antd'
import { setToDoList } from '../../api/toDoList'
import { useList } from '../../provider/ListProvider'
import { updateToDoList } from '../../api/toDoList'

import "./ModalTask.scss"

export default function ModalTask(props) {
  const {isModalVisible, setIsModalVisible, data, id} = props

  const { list, setList } = useList()
  const [inputValue, setInputValue] = useState(0)
  const [task, setTask] = useState(data ? {title: data.title, description: data.description, check: data.check} : {title: "", description: "", check: false})

  const addTask = () => {
    setToDoList(task)
    setList(e => [...e, task])
    setIsModalVisible(false)
    setTask({title: "", description: "", check: false})
  }

  const updateTask = () => {
    const newArray = [...list]
    newArray.map((item, idx) => {
      if(idx == id){
        item.title = task.title
        item.description = task.description
      }
    })
    setList(newArray)
    updateToDoList(newArray)
    setIsModalVisible(false)
  }

  return (
    <Modal title="Add Task" visible={isModalVisible} onOk={() => data ? updateTask() : addTask()} onCancel={() => setIsModalVisible(false)}>
      <b>Add random task of cats?</b>
      <div className='random-task'>
        <Slider min={0} max={10} onChange={e => setInputValue(e)} value={inputValue} />
        <InputNumber
          min={0}
          max={10}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={e => setInputValue(e)}
        />
      </div>
      <input name='title' value={task.title} className='input-title' type="text" placeholder='Title' onChange={e => setTask({...task, [e.target.name]: e.target.value.toUpperCase()})} />
      <textarea name='description' value={task.description} onChange={e => setTask({...task, [e.target.name]: e.target.value})} disabled={inputValue > 0} />
    </Modal>
  )
}
