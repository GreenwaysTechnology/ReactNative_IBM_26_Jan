import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
    //state declartion using hook
    const [increment, setIncrement] = useState(0)
    const [decrement, setDecrement] = useState(100)
    return <div>
        <h1>Counter App</h1>
        <h1>Incremented Value {increment} Decremented Value {decrement}</h1>
        <button onClick={() => setIncrement(increment + 1)}>+</button>
        <button onClick={() => setDecrement(decrement - 1)}>-</button>

    </div>
}

function App() {
    return <Counter />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
