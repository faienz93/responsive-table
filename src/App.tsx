import { useState } from 'react'
import './App.css'
import ScrollableTable from './components/ScrollableTable'
import ResponsiveTable from './components/ResponsiveTable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h2>Scrollable Table</h2>
      <ScrollableTable />
      <h2>Responsive Table</h2>
      <ResponsiveTable />

    </>
  )
}

export default App
