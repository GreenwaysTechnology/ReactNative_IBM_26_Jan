import { createRoot } from 'react-dom/client'

function User({ id = 0, email = "foo@google.com", name = "Your Name", address: { city = "city" } = {}, status = false }) {
    return <div>
        <h1>Id : {id}</h1>
        <h2>Name : {name}</h2>
        <h2>Email : {email}</h2>
        <h2>Status : {status ? "Available" : "Not Available"}</h2>
        <h3>Address: {city}</h3>
    </div>
}
function App() {
    return <>
        <User id={1} email='subu@gmail.com' name='Subramanian Murugan' address={{ city: 'Coimbatore' }} status={true} />
        <User />
    </>
}

createRoot(document.getElementById('root')).render(<App />)
