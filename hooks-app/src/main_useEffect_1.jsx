import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
    //state declartion using hook
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('componentdidMount')
    }, [])
    useEffect(() => {
        console.log('compoentDidUpdate',value)
    }, [value])
    return <div>
        <h2>Value: {value}</h2>
        <button onClick={() => {
            setValue(value + 1)
        }}>+</button>
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
