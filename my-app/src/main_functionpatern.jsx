import { createRoot } from 'react-dom/client'

// function Heading() {
//     //must return jsx 
//     return <h1>Hello React!</h1>
// }

// const Heading = () => {
//     //must return jsx 
//     return <h1>Hello React!</h1>
// }
const Heading = () => <h1>Hello React!</h1>

// createRoot(document.getElementById('root')).render(Heading())
createRoot(document.getElementById('root')).render(<Heading></Heading>)