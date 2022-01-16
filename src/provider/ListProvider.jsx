import React, { useState, createContext, useContext } from "react"
import { getToDoList } from "../api/toDoList"


const listContext = createContext()

export function useList() {
  return useContext(listContext)
}

export function ListProvider({children}){
  const [list, setList] = useState(getToDoList())

  const value ={
    list,
    setList
  }

  return <listContext.Provider value={value} >{children}</listContext.Provider>
}