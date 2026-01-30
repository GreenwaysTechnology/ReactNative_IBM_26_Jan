import { createRoot } from 'react-dom/client'

function Hello() {
    return <h1 style={{ color: 'blue', fontSize: "50px" }} >Hello</h1>
}

function App() {
    return <div>
        <Hello />
    </div>
}

createRoot(document.getElementById('root')).render(
    <App />
)
