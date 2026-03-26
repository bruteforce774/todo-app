import { useState } from 'react'
import type { Todo } from './types.ts'
import TodoList from './components/TodoList.tsx'
import AddTodo from './components/AddTodo.tsx'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAdd(text: string) {

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      done: false
    }

    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
