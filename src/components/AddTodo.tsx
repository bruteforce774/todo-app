import { useState } from 'react'

function AddTodo({ onAdd }: { onAdd: (text: string) => void }) {
  const [inputText, setInputText] = useState('')

  function handleClick() {
    if (!inputText.trim()) return
    onAdd(inputText)
    setInputText('')
  }

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Add a todo...'
      />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddTodo