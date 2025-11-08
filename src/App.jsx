import { useState } from 'react'
import './App.css'
import AgeCalculator from './components/AgeCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <AgeCalculator />
    </div>
  );
}

export default App
