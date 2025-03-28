import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSclice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
   <>
    {todos.map((todo) =>(
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
    ))}
   </>
  )
}

export default Todos