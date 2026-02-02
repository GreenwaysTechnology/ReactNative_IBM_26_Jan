import { createRoot } from 'react-dom/client'
import React from 'react'

class Parent extends React.Component {

    state = {
        value: 0
    }
    constructor() {
        console.log('Parent Constructor')
        super()
    }
    //after component is mounted in the browser
    //used to write any async functionality like timer code,ajax code,websocket
    componentDidMount() {
        console.log('Parent componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Parent componentDidUpdate is called')

    }

    render() {
        console.log("Parent Render")
        return <div>
            <h1>Value: {this.state.value}</h1>
            <button onClick={() => {
                this.setState(({ ...this.state.value, value: this.state.value + 1 }))
            }}>+</button>
            <Child />
        </div>
    }
}
class Child extends React.Component {
    constructor() {
        console.log('Child Constructor')
        super()
    }
    componentDidMount() {
        console.log('Child componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate is called')

    }
    render() {
        console.log("CHild Render")
        return <div>

        </div>
    }
}

function App() {
    return <>
        <Parent />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
