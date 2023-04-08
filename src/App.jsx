import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'




import { Container, TodoList, Input, Button, ListItem,SemList,Trash,Check } from './styles.js'


function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')


  function inputMudou(event) {

    setTask(event.target.value)
  }

  function cliqueNoBotao() {
    if (task) {
      const existingItem = list.find((item) => item.task === task);
      if (!existingItem) {
        setList([...list, { id: uuid(), task, finished: false }]);
      } else {
        toast.warn('Esta tarefa já existe na lista.');
      }
    }
  }


  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setList(newList)
  }

  function finalizaDelete(id) {
    const deleteTarefa = list.filter((item) => item.id !== id)

    setList(deleteTarefa)
  }


  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueNoBotao}>Adicionar</Button>
        <ToastContainer autoClose={3000}/>

        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li >{item.task} </li>
                  <Trash onClick={() => finalizaDelete(item.id)} />
                </ListItem>
              ))
            ) : (
              <SemList> Não há item na lista</SemList>
            )
          }
        </ul>
      </TodoList>
    </Container>
  )
}

export default App
