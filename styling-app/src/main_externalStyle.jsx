import { createRoot } from 'react-dom/client'
// import './index.css'
import './Hello.css'

function Hello(){
  return <h1 className="title" >Hello</h1>
}

function App(){
  return <div>
        <Hello/>
  </div>
}

createRoot(document.getElementById('root')).render(
    <App />
)
