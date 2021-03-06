import React, { useState, useEffect} from 'react'
import { Modal, Slider, InputNumber } from 'antd'
import { setToDoList } from '../../api/toDoList'
import { useList } from '../../provider/ListProvider'
import { updateToDoList } from '../../api/toDoList'
import { getCatPhrases } from '../../api/getCatPhrases'

import "./ModalTask.scss"

const generateIdWithDate = () => {
  return Date.now()
}

export default function ModalTask(props) {
  const {isModalVisible, setIsModalVisible, data} = props
  const { list, setList, listStatic, setListStatic } = useList()
  const [inputValue, setInputValue] = useState(0)
  const [task, setTask] = useState(data ? {...data} : {})
  const [randomTask, setRandomTask] = useState([])

  const addTask = () => {
    if(task.hasOwnProperty("title") && (task.hasOwnProperty("description") || inputValue > 0)){
      const newTask = {...task}
      newTask.id = generateIdWithDate()
      newTask.check = false
      if(inputValue > 0){
        newTask.description = formatData()
      }
      setToDoList(newTask)
      setList([...list, newTask])
      setListStatic([...list, newTask])
      setIsModalVisible(false)
      setTask({})
    }
  }

  const updateTask = () => {
    const newArray = [...listStatic]
    newArray.map(item => {
      if(item.id == data.id){
        item.title = task.title
        item.description = inputValue > 0 ? formatData() : task.description
      }
    })
    setList(newArray)
    setListStatic(newArray)
    updateToDoList(newArray)
    setIsModalVisible(false)
  }

  useEffect(() => {
    getRandomData()
  }, [inputValue])

  const formatData = () => {
    let stringData = ""
    for (let i = 0; i < randomTask.length; i++) {
      stringData += randomTask[i].fact + "\n";
    }
    return stringData
  }

  const getRandomData = () => {
    if(inputValue > 0){
      getCatPhrases(inputValue).then(res => {
        return setRandomTask(res.data)
      }).catch(e => setRandomTask([]) )
    }
  }

  return (
    <Modal title="Add Task" visible={isModalVisible} onOk={() => data ? updateTask() : addTask()} onCancel={() => setIsModalVisible(false)}>
      <b>Add random task of cats?</b>
      <div className='random-task'>
        <Slider min={0} max={10} onChange={e => setInputValue(e)} value={inputValue} />
        <InputNumber
          min={0}
          max={10}
          value={inputValue}
          onChange={e => setInputValue(e)}
        />
      </div>
      <input value={task.title} className='input-title' type="text" placeholder='Title' onChange={e => setTask({...task, title: e.target.value.toUpperCase()})} />
      <textarea value={task.description} onChange={e => setTask({...task, description: e.target.value})} disabled={inputValue > 0} />
    </Modal>
  )
}
