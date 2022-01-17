import React, {useState} from 'react'
import { Modal, Slider, InputNumber } from 'antd'
import { setToDoList } from '../../api/toDoList'
import { useList } from '../../provider/ListProvider'
import { updateToDoList } from '../../api/toDoList'

import "./ModalTask.scss"

const generateIdWithDate = () => {
  return Date.now()
}

export default function ModalTask(props) {
  const {isModalVisible, setIsModalVisible, data} = props
  const { list, setList, listStatic, setListStatic } = useList()
  const [inputValue, setInputValue] = useState(0)
  const [task, setTask] = useState(data ? {...data} : {})

  const addTask = () => {
    if(task.title.length > 0 && task.description.length > 0){
      const newTask = {...task}
      newTask.id = generateIdWithDate()
      newTask.check = false
      setToDoList(newTask)
      setList([...list, newTask])
      setListStatic([...list, newTask])
      setIsModalVisible(false)
      setTask({title: "", description: ""})
    }
  }

  const updateTask = () => {
    const newArray = [...listStatic]
    newArray.map(item => {
      if(item.id == data.id){
        item.title = task.title
        item.description = task.description
      }
    })
    setList(newArray)
    setListStatic(newArray)
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
