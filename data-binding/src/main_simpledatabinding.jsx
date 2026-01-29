import { createRoot } from 'react-dom/client'

function User() {
    //data
    const id = 1
    const name = "Subramanian Murugan"
    const status = true
    const address = {
        city: 'Coimbatore'
    }
    return <div>
        <h1>Id : {id}</h1>
        <h2>Name : {name}</h2>
        <h2>Status : {status ? "Available" :"Not Available"}</h2>
        <h3>Address: {address.city}</h3>
    </div>
}

createRoot(document.getElementById('root')).render(<User/>)
