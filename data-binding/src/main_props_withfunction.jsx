import { createRoot } from 'react-dom/client'

function User(id, name, status, address) {
    return <div>
        <h1>Id : {id}</h1>
        <h2>Name : {name}</h2>
        <h2>Status : {status ? "Available" : "Not Available"}</h2>
        <h3>Address: {address.city}</h3>
    </div>
}

// createRoot(document.getElementById('root')).render(<User/>)
createRoot(document.getElementById('root')).render( User(1, 'Subramanian', true, { city: 'Chennai' }),
    )
