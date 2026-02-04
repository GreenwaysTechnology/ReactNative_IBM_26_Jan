import { configureStore } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action constant
const counterIncrement = 'counter/increment'
const counterDecrement = 'counter/decrement'
const counterIncrementBy = 'counter/incrementBy'

const CounterReducer = (count = { value: 10 }, action) => {
    switch (action.type) {
        case counterIncrement:
            return { ...count, value: count.value + 1 }
        case counterIncrementBy:
            return { ...count, value: count.value + action.payload }
        case counterDecrement:
            return { ...count, value: count.value - 1 }
        default:
            return count
    }
}
const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

//react 

function Counter() {
    const count = useSelector(state => {
        return state.counter
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //send action to store via dispatcher
        const incrementAction = {
            type: counterIncrement
        }
        dispatch(incrementAction)
    }

    //action creator
    // const incrementBy = payload => {
    //     return {
    //         type: counterIncrementBy, payload
    //     }
    // }
    const incrementBy = payload => ({ type: counterIncrementBy, payload })
    return <div>
        <h2>Counter : {count.value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: counterDecrement })
        }}>-</button>
        <button onClick={() => {
            dispatch(incrementBy(2))
        }}>IncrementBy</button>

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
