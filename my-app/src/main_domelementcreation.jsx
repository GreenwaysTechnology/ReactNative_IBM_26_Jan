//dom element creation using js
function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML='Hello, React!'
    const RootElement=document.getElementById('root')
    RootElement.appendChild(Heading)
}
createElement()
