import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInputText] = useState('')

  function handleAdd() {

  }

  return (
    <div>
      <input value={inputText}/>
      <button onClick={handleAdd}>Add</button>
      <p>{todos.length}</p>
    </div>
  )
}

export default App
