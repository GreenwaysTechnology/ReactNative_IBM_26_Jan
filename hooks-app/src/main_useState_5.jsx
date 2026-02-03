import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
    //state declartion using hook
    const [counter, setCounter] = useState({ increment: 0, decrement: 100 })
    return <div>
        <h1>Counter App</h1>
        <h1>Incremented Value {counter.increment} Decremented Value {counter.decrement}</h1>
        <button onClick={() => {
            setCounter(state => {
                return { ...state, increment: state.increment + 1 }
            })
        }}>+</button>
        <button onClick={() => {
            setCounter(state => {
                return { ...state, decrement: state.decrement - 1 }
            })
        }}>-</button>

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
