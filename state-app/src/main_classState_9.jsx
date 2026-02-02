import { createRoot } from 'react-dom/client'
import React from 'react'

//the component have state and listener 
class Review extends React.Component {
    //state declaration
    state = {
        like: 0,
        dislike: 0
    }
    //
    onLike = () => {
        this.setState(({ ...this.state, like: this.state.like + 1 }))
    }
    onDislike = () => {
        this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))
    }
    render() {
        return <ReviewDisplay {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
    }
}
//the component have only UI
const ReviewDisplay = props => {
    return <div>
        <h1>Like {props.like} Dislike: {props.dislike}</h1>
        <button onClick={props.onLike}>Like</button>
        <button onClick={props.onDislike}>Dislike</button>
    </div>
}

function App() {
    return <>
        <Review />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
