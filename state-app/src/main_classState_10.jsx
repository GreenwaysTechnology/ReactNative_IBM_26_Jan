import { createRoot } from 'react-dom/client'
import React from 'react'

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
        // this.setState(prevState => {
        //     //return immutable nested state
        //     return {
        //         //level-0 copy
        //         ...prevState, //copy all keys within state - house key,locationX,locationY
        //         house: {
        //             ...prevState.house, //copy all keys within house property
        //             points: prevState.house.points + 2
        //         }
        //     }
        this.setState(({
            ...this.state,
            house: {
                ...this.state.house,
                points: this.state.house.points + 2
            }
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
