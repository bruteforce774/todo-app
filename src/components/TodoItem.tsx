import type { Todo } from '../types'

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <>
      <input type="checkbox" checked={todo.done} onChange={() => {}}>
      {todo.text}
    </>
  )
}

export default TodoItem
