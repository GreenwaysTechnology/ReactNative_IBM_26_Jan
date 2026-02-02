import { createRoot } from 'react-dom/client'
import React from 'react'

class Counter extends React.Component {
    //state declaration
    state = {
        value: 0
    }

    render() {
        console.log(this.state)
        return <div>
            <h1>Counter {this.state.value}</h1>
        </div>
    }
}

function App() {
    return <>
        <Counter />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
