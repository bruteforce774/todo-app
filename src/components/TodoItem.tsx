import type { Todo } from '../types'

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <>
      <input type="checkbox" checked={todo.done} onChange={() => {}} />
      <span>{todo.text}</span>
    </>
  )
}

export default TodoItem
