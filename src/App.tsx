import { useState } from 'react'
import './App.css'
import TableComponent from './components/TableComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TableComponent />
      </div>
      
    </>
  )
}

export default App
