import { useState } from 'react'
import Home from './Home'

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [inputValue, setInputValue] = useState<any>(0)


  const increment = (inc: number) => {
     setCount(count + inc);
     setInputValue(0);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <Home 
       input={inputValue} setInput={setInputValue}
      />
      {/* <input 
        type="text" 
         
        onChange={(e) => setInputValue(e.target.value)} 
      /> */}
      <button onClick={() => increment(Number(inputValue))}>Increment</button>
    </div>
  )
}

export default App