import { createRoot } from 'react-dom/client'
import React from 'react'
import { produce } from 'immer'

class Review extends React.Component {
    //nested state
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        },
        locationX: 34,
        locationY: 45
    }
    onRate = () => {
        // this.setState(() => {
        //     return produce(this.state, (draft) => {
        //         //biz logic ,mutable way
        //         draft.house.points += 1
        //     })
        // })
        this.setState(produce(this.state, draft => {
            draft.house.points += 1
        }))
    }

    render() {
        return <div>
            <h1>Name : {this.state.house.name}</h1>
            <h2>Pointers : {this.state.house.points}</h2>
            <h2>Location {this.state.locationX},{this.state.locationY}</h2>
            <button onClick={this.onRate}>Rate</button>
        </div>
    }
}

function App() {
    return <>
        <Review />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
