import { StatusBar, Text, View, } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context"


function Hello() {
    //it gives you an object containing exact piexl values for the areas you need to avoid.
    const insets = useSafeAreaInsets();
    //JSX 
    return <View style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }}>
        <Text>HelloWorld</Text>
    </View>
}
// function Hello() {
//     //JSX 
//     return <SafeAreaView style={{ flex: 1 }}>
//         <Text>HelloWorld</Text>
//     </SafeAreaView>
// }

function App() {
    //render Other Components

    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Hello />
    </SafeAreaProvider>
}

export default App