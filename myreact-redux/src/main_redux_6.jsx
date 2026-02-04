import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action constant
const counterIncrement = 'counter/increment'
const counterDecrement = 'counter/decrement'
const counterIncrementBy = 'counter/incrementBy'

const IncrementReducer = (count = { value: 10 }, action) => {
    switch (action.type) {
        case counterIncrement:
            return { ...count, value: count.value + 1 }
        default:
            return count
    }
}
const IncrementByReducer = (count = { value: 10 }, action) => {
    switch (action.type) {
        case counterIncrementBy:
            return { ...count, value: count.value + action.payload }
        default:
            return count
    }
}
const DecrementReducer = (count = { value: 10 }, action) => {
    switch (action.type) {
        case counterDecrement:
            return { ...count, value: count.value - 1 }
        default:
            return count
    }
}
const store = configureStore({
    reducer: {
        increment: IncrementReducer,
        incrementBy: IncrementByReducer,
        decrement: DecrementReducer
    }
})

//react 

function Increment() {
    const counter = useSelector(state => {
        return state.increment
    })
    console.log('counter',counter)

    return <h1>Increment : {counter.value}</h1>
}
function Decrement() {
    const counter = useSelector(state => {
        return state.decrement
    })
    return <h1>Decrement : {counter.value}</h1>
}
function IncrementBy() {
    const counter = useSelector(state => {
        return state.incrementBy
    })
    return <h1>IncrementBy : {counter.value}</h1>
}
function Counter() {
    return <div>
        <Increment />
        <Decrement/>
        <IncrementBy/>
    </div>
}


function App() {
    return <Provider store={store}>
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
