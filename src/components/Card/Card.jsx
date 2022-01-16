import React from 'react'

import './Card.scss'

export default function Card({data}) {
  let list = data.description.split("\n")
  return (
    <div className='card'>
      <h2>{data.title}</h2>
      <div>
        <ul>
          {
            list.map((e, idx) => e.length > 0 && <li key={idx}>{e}</li>)        
          }
        </ul>
      </div>
      <button className={data.check ? "check" : undefined}>{data.check ? "Done" : "Progress"}</button>
    </div>
  )
}
