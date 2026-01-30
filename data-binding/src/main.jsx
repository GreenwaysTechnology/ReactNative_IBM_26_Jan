import { createRoot } from 'react-dom/client'

import { Avatar } from "./components/user/Avatar"

export const UserDetails = ({ title, id = 0, userName = 'Your Name', email = 'Your email', city = "Your City", status = false, profilePic = '' }) => <div>
    <h1>{title}</h1>
    <Avatar pic={profilePic} />
    <h3>Id : {id}</h3>
    <h3>Name : {userName}</h3>
    <h4>Email : {email}</h4>
    <h4>City : {city}</h4>
    <h4>Status : {status ? "Available" : "Not Available"}</h4>
</div>

//passing pro from user to userdetails manually.

// const User = ({ id = 0, userName = 'Your Name', email = 'Your email', address: { city = "Your City" }, status = false, profilePic = '' }) => <div>
//     <UserDetails id={id}
//         userName={userName}
//         email={email}
//         city={city}
//         status={status}
//         profilePic={profilePic} />
// </div>
const User = props => <div>
    {/* forwarding props : pass all props to child component */}
    <UserDetails {...props} title="Profile Management system" />
</div>
function App() {
    const profilePic = 'https://imgur.com/1bX5QH6.jpg'
    return <>
        <User id={1} profilePic={profilePic} email='subu@gmail.com' userName='Subramanian Murugan' address={{ city: 'Coimbatore' }} status={true} />
    </>
}
createRoot(document.getElementById('root')).render(<App />)

