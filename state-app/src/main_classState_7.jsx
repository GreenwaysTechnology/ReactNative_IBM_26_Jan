import { createRoot } from 'react-dom/client'
import React from 'react'

class Review extends React.Component {
    //state declaration
    state = {
        like: 0,
        dislike: 0
    }
    render() {
        return <div>
            <h1>Like {this.state.like} Dislike: {this.state.dislike}</h1>
            <button onClick={() => {
                this.setState(({ ...this.state, like: this.state.like + 1 }))
            }}>Like</button>
            <button onClick={() => {
                this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))
            }}>DisLike</button>
        </div>
    }
}

function App() {
    return <>
        <Review />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
