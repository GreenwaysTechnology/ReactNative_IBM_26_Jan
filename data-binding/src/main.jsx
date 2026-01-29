import { createRoot } from 'react-dom/client'

// function User(props) {
//     const { id, name, status, address } = props
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Status : {status ? "Available" : "Not Available"}</h2>
//         <h3>Address: {address.city}</h3>
//     </div>
// }
// function User(props) {
//     const { id, name, status, address: { city } } = props
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Status : {status ? "Available" : "Not Available"}</h2>
//         <h3>Address: {city}</h3>
//     </div>
// }
// function User({ id, name, status, address: { city } }) {
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Status : {status ? "Available" : "Not Available"}</h2>
//         <h3>Address: {city}</h3>
//     </div>
// }
// const User = ({ id, name, status, address: { city } }) => {
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h2>Status : {status ? "Available" : "Not Available"}</h2>
//         <h3>Address: {city}</h3>
//     </div>
// }
const User = ({ id, name, status, address: { city } }) => <div>
    <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <h2>Status : {status ? "Available" : "Not Available"}</h2>
    <h3>Address: {city}</h3>
</div>


function App() {
    return <>
        <User
            id={1}
            name='Subramanian'
            status={true}
            address={{ city: 'Coimbatore' }}
        />
        <User
            id={2}
            name='Murugan'
            status={true}
            address={{ city: 'Coimbatore' }}
        />
        <User
            id={3}
            name='Ram'
            status={false}
            address={{ city: 'Chennai' }}
        />
    </>
}

createRoot(document.getElementById('root')).render(<App />)
