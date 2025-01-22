import { useState } from 'react'
import './App.css'
import ScrollableTable from './components/ScrollableTable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h2>Scrollable Table</h2>
      <ScrollableTable />


    </>
  )
}

export default App
