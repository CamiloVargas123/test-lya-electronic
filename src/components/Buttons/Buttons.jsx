import React from 'react'

import './Buttons.scss'

export default function Buttons() {
  return (
    <div className='buttons'>
      <div>
        <input type="search" placeholder='Search task' />
      </div>
      <button>Add task</button>
    </div>
  )
}
