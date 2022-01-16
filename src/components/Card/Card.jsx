import React from 'react'

import './Card.scss'

export default function Card({data}) {
  console.log("data", data)
  let list = data.description.split("\n")
  return (
    <div className='card'>
      <h2>{data.title}</h2>
      <div>
        <ul>
          {
            list.map(e => e.length > 0 && <li>{e}</li>)        
          }
        </ul>
      </div>
      <button className={data.check ? "check" : undefined}>{data.check ? "Done" : "Progress"}</button>
    </div>
  )
}
