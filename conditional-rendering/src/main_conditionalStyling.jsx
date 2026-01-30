import { createRoot } from 'react-dom/client'

function UserStatus({ loggedIn }) {
    //using if..else
    // if (!loggedIn) {
    //     return <h2>Please Login</h2>
    // } else {
    //     return <h2>Welcome Back!</h2>
    // }
    //using ternary operator
    //return loggedIn ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>
    return <>
        {loggedIn && <h1>Welcome Back</h1>}
    </>
}


function App() {
    return <div>
        <UserStatus loggedIn={true} />
    </div>
}

createRoot(document.getElementById('root')).render(<App />)
