import { createRoot } from 'react-dom/client'
import React from 'react'
import { produce } from 'immer'

class User extends React.Component {

    state = {
        users: [],
        error: null,
        isLoading: false
    }
    fetchUsers = async () => {
        try {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const response = await fetch(url)
            const users = await response.json()
            this.setState(produce(this.state, draft => {
                draft.users = users
                draft.isLoading = true
            }))
        }
        catch (err) {
            this.setState(produce(this.state, draft => {
                draft.error = err
                draft.isLoading = true
            }))
        }
    }
    componentDidMount() {
        //api calls
        this.fetchUsers();
    }


    render() {
        const { users, error, isLoading } = this.state
        //show different ui: one for error, loading, data
        if (error) {
            return <h1>Something went Wrong!</h1>
        } else if (!isLoading) {
            return <h1>Loading...</h1>
        } else {
            return <ul>
                {users.map(user => {
                    return <li key={user.id}>
                        <span>{user.name} {user.email}</span>
                    </li>
                })}
            </ul>
        }

    }
}

function App() {
    return <>
        <User />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
