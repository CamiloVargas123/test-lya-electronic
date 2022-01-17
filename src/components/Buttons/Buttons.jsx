import React, {useState} from 'react'
import ModalTask from '../../utils/ModalTask/ModalTask'
import { useList } from '../../provider/ListProvider'

import './Buttons.scss'

export default function Buttons() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [search, setSearch] = useState("")
  const { setList, listStatic } = useList()
  

  const  handleSearch = e => {
    setSearch(e.target.value)
    filter(e.target.value)
  }
  const filter = text => {
    let result = listStatic.filter((item) => {
      if(item.description.toString().toLowerCase().includes(text.toLowerCase()) || item.title.toString().toLowerCase().includes(text.toLowerCase())){
        return item
      }
    })
    setList(result)
  }

  return (
    <div className='buttons'>
      <div>
        <input type="search" placeholder='Search task' value={search} onChange={handleSearch} />
      </div>
      <button onClick={() => setIsModalVisible(true)}>Add task</button>
      {isModalVisible && <ModalTask isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />}
    </div>
  )
}
