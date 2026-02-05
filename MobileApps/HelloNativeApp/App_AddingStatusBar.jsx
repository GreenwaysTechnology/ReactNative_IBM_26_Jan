import { StatusBar, Text, View } from "react-native"


function Hello() {
    //JSX 
    return <View>
        <Text>HelloWorld</Text>
    </View>
}

function App() {
    //render Other Components
    return <>
        <StatusBar barStyle="dark-content"/>
        <Hello/>
    </>
}

export default App