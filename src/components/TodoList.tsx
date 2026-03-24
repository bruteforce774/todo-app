import type { Todo } from '../types'
import TodoItem from './TodoItem'

function TodoList({ todos }: { todos: Todo[] }) {
  // map over todos and render a TodoItem for each
  // each TodoItem needs a key prop — use todo.id
}

export default TodoList
