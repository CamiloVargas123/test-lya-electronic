import React, { useEffect, useState, createContext, useContext } from "react"
import { getToDoList } from "../api/toDoList"


const listContext = createContext()

export function useList() {
  return useContext(listContext)
}

export function ListProvider({children}){
  const [listStatic, setListStatic] = useState(getToDoList() || []) //static
  const [list, setList] = useState(getToDoList() || []) //dinamic

  useEffect(() => {
    setList(getToDoList() || [])
    setListStatic(getToDoList() || [])
  }, [])

  const value ={
    list,
    setList,
    listStatic,
    setListStatic
  }

  return <listContext.Provider value={value} >{children}</listContext.Provider>
}