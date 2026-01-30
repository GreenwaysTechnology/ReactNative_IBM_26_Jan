import { Address } from "./Address"
import { Avatar } from "./Avatar"

const User = ({ id, pic, name, status, address: { city } }) => <div>
    <Avatar pic={pic} />
    <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <h2>Status : {status ? "Available" : "Not Available"}</h2>
    <Address city={city} />
</div>
export { User }