import { configureStore, createReducer } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//action constant
const counterIncrement = 'counter/increment'
const counterDecrement = 'counter/decrement'
const counterIncrementBy = 'counter/incrementBy'

const initalState = { value: 10 }
const CounterReducer = createReducer(initalState, builder => {
    builder.
        addCase(counterIncrement, (state, action) => {
            //logic
            //immer js code: produce function is built in
            state.value++
        }).
        addCase(counterIncrementBy, (state, action) => {
            //immer js code: produce function is built in
            state.value += action.payload
        }).
        addCase(counterDecrement, (state, action) => {
            state.value--
        }).addDefaultCase((state, action) => { })
})


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
    return <div>
        <h2>Counter : {count.value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: counterDecrement })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: counterIncrementBy, payload: 2 })
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
