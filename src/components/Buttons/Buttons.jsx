import React, {useState} from 'react'
import ModalTask from '../../utils/ModalTask/ModalTask'


import './Buttons.scss'

export default function Buttons() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className='buttons'>
      <div>
        <input type="search" placeholder='Search task' />
      </div>
      <button onClick={() => setIsModalVisible(true)}>Add task</button>
      <ModalTask isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </div>
  )
}
