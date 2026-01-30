import { createRoot } from 'react-dom/client'

function Hello() {
    return <h1 style={styles.heading} >Hello</h1>
}

function App() {
    return <div style={styles.box}>
        <Hello />
    </div>
}

createRoot(document.getElementById('root')).render(
    <App />
)
const styles = {
    box: {
        padding: 20,
        border: "1px solid #ccc",
        backgroundColor:'yellow'
        
    },
    heading: {
        color: 'blue', fontSize: "50px"
    }
}
