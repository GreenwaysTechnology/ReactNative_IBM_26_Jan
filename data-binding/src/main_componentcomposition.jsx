import { createRoot } from 'react-dom/client'

const Avatar = ({ pic }) => <img src={pic} height={50} width={50} alt='profile pic' />
const Address = ({ city }) => <h3>City:{city}</h3>

const User = ({ id, pic, name, status, address: { city } }) => <div>
    <Avatar pic={pic} />
    <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <h2>Status : {status ? "Available" : "Not Available"}</h2>
    <Address city={city} />
</div>

function App() {
    return <>
        <User
            pic={"https://imgur.com/1bX5QH6.jpg"}
            id={1}
            name='Subramanian'
            status={true}
            address={{ city: 'Coimbatore' }}
        />
        <User
            pic={"https://imgur.com/1bX5QH6.jpg"}

            id={2}
            name='Murugan'
            status={true}
            address={{ city: 'Coimbatore' }}
        />
        <User
            pic={"https://imgur.com/1bX5QH6.jpg"}

            id={3}
            name='Ram'
            status={false}
            address={{ city: 'Chennai' }}
        />
    </>
}

createRoot(document.getElementById('root')).render(<App />)
