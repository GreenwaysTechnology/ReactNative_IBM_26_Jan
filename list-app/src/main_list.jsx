import { createRoot } from 'react-dom/client'

function List({ subjects }) {
    return <ul>
        {subjects.map(subject => {
            return <li>{subject}</li>
        })}
    </ul>
}


function App() {
    const subjects = ['React', 'ReactNative', 'Javascript', 'Mobile', 'Devops', 'Cloud']
    return <List subjects={subjects} />
}

createRoot(document.getElementById('root')).render(<App />)
