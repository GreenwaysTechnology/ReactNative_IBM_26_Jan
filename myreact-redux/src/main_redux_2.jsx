import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux -reducer
//counter=0;inital state ; is eq to useState(0)
//action is object , which is sent by ui(react component)
//action since object has property type, which defines the type of biz logic
const CounterReducer = (counter = 0, action) => {
    switch (action.type) {
        case 'counter/increment':
            return counter + 1
        case 'counter/incrementBy':
            return counter + action.payload
        case 'counter/decrement':
            return counter - 1
        default:
            return counter;
    }
}
const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

//react 

function Counter() {
    const counter = useSelector(state => {
        return state.counter
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //send action to store via dispatcher
        const incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }
    return <div>
        <h2>Counter : {counter}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: 'counter/incrementBy', payload: 2 })
        }}>IncrementBy</button>

    </div>
}
function Increment() {
    const counter = useSelector(state => {
        return state.counter
    })
    return <div>
        <h2>Increment Component : {counter}</h2>
    </div>
}

function App() {
    return <Provider store={store}>
        <Counter />
        <Increment />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
