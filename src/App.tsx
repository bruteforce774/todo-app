import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  function handleAdd() {
    if(!inputText.trim()) return

    const newTodo = {
      id: Date.now(),
      text: inputText.trim(),
      done: false
    }

    setTodos([...todos, newTodo])
    setInputText('')
  }

  return (
    <div>
      <input 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Add a todo...'
      />
      <button onClick={handleAdd}>Add</button>
      <p>{todos.length} todos</p>
    </div>
  )
}

export default App
