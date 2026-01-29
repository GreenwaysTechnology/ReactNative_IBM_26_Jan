import { createRoot } from 'react-dom/client'

//variable pattern
//Heading is variable
//<h1>helloReact</h1> -  Component
const Heading = <h1>Hello React!</h1>

createRoot(document.getElementById('root')).render(Heading)