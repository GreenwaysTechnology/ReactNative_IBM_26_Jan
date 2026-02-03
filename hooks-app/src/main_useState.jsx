import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
    //state declartion using hook
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        setCounter(prevState=>{
            console.log(prevState)
            return prevState + 1 
        })
    }
    return <div>
        <h1>Counter App</h1>
        <h1>Value {counter}</h1>
        <button onClick={onIncrement}>+</button>
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
