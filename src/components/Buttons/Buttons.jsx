import { Modal, Slider, InputNumber } from 'antd'
import React, {useState} from 'react'
import { setToDoList } from '../../api/toDoList'
import { useList } from '../../provider/ListProvider'


import './Buttons.scss'

export default function Buttons() {
  const { setList } = useList()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputValue, setInputValue] = useState(0)
  const [task, setTask] = useState({title: "", description: ""})

  const addTask = () => {
    setIsModalVisible(false)
    setToDoList(task)
    setList(e => [...e, task])
    setTask({title: "", description: ""})
  }

  return (
    <div className='buttons'>
      <div>
        <input type="search" placeholder='Search task' />
      </div>
      <button onClick={() => setIsModalVisible(true)}>Add task</button>
      <Modal title="Add Task" visible={isModalVisible} onOk={() => addTask()} onCancel={() => setIsModalVisible(false)}>
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
    </div>
  )
}
