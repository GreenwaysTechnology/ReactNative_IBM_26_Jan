import { createRoot } from 'react-dom/client'

function MyButton({ active }) {

    return <button style={{
        backgroundColor: active ? "black" : "gray",
        color: "white"
    }}>Click</button>
}


function App() {
    return <div>
        <MyButton active={true} />
    </div>
}

createRoot(document.getElementById('root')).render(<App />)
