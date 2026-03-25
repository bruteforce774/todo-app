import type { Todo } from '../types'
import TodoItem from './TodoItem'

function TodoList({ todos }: { todos: Todo[] }) {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <TodoItem todo={todo} />
    </li>
  ))

  return (
    <ul>{todoItems}</ul>
  )
}

export default TodoList
