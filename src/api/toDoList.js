function setToDoList(data) {
  let existingEntries = JSON.parse(localStorage.getItem("todolist"))
  if(existingEntries === null) existingEntries = []
  existingEntries.push(data)
  return localStorage.setItem('todolist', JSON.stringify(existingEntries));
}

function getToDoList() {
  return JSON.parse(localStorage.getItem('todolist'));
}

export {
  setToDoList,
  getToDoList
}