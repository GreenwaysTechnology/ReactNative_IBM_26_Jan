import { StatusBar, Text, View, StyleSheet } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context"


function Hello() {
    const insets = useSafeAreaInsets();
    return <View style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }}>
        <Text style={styles.title}>React Native App</Text>
        <Text style={[styles.title, { textAlign: 'left', backgroundColor: 'yellow' }]}>This is React native app</Text>
        <Text style={{ fontWeight: 'bold', color: 'red' }}>This is React native app</Text>

    </View>
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Hello />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({
    title: {
        //css properties
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 3,
        textAlign: 'center'
    }
})