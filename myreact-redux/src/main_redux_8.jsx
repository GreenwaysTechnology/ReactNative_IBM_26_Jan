import { configureStore, createReducer } from '@reduxjs/toolkit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//action constant
const counterIncrement = 'counter/increment'
const counterDecrement = 'counter/decrement'
const counterIncrementBy = 'counter/incrementBy'

//old way of writing reducer
// const CounterReducer = (count = { value: 10 }, action) => {
//     switch (action.type) {
//         case counterIncrement:
//             // return { ...count, value: count.value + 1 }
//             return produce(count, (draft) => {
//                 draft.value += 1
//             })
//         case counterIncrementBy:
//             //return { ...count, value: count.value + action.payload }
//             return produce(count, (draft) => {
//                 draft.value += action.payload
//             })
//         case counterDecrement:
//             // return { ...count, value: count.value - 1 }
//             return produce(count, (draft) => {
//                 draft.value -= 1
//             })
//         default:
//             return count
//     }
// }
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
