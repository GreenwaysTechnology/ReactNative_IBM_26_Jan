import { configureStore, createSlice } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'

const initialState = { value: 10 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //write all reducers
        increment(state, action) {
            //immerjs default
            console.log(state)
            state.value++
        },
        decrement(state, action) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }

    }
})
//extract reducers and action constants
const CounterReducer = counterSlice.reducer
const { increment, decrement, incrementBy } = counterSlice.actions


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
            type: increment
        }
        dispatch(incrementAction)
    }
    return <div>
        <h2>Counter : {count.value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: incrementBy, payload: 2 })
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
