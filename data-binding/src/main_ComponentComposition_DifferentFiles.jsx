import { createRoot } from 'react-dom/client'
import { User } from './components/user/User'

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
