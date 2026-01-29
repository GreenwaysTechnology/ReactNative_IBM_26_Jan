import { createRoot } from 'react-dom/client'

// function User(obj) {
//     console.log(obj)
//     return <div>
//         <h1>Id : {obj.id}</h1>
//         <h2>Name : {obj.name}</h2>
//         <h2>Status : {obj.status ? "Available" : "Not Available"}</h2>
//         <h3>Address: {obj.address.city}</h3>
//     </div>
// }
function User(props) {
    console.log(props)
    return <div>
        <h1>Id : {props.id}</h1>
        <h2>Name : {props.name}</h2>
        <h2>Status : {props.status ? "Available" : "Not Available"}</h2>
        <h3>Address: {props.address.city}</h3>
    </div>
}

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

// createRoot(document.getElementById('root')).render(<User/>)
createRoot(document.getElementById('root')).render(<App />)
