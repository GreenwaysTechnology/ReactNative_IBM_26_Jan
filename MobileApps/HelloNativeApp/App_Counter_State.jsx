import { useState } from "react";
import { StatusBar, Text, View, Image, StyleSheet, TouchableOpacity, Button } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"


function CounterScreen() {

    const insets = useSafeAreaInsets();
    const [counter, setCounter] = useState(0)

    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        {/* Action Buttons */}
        <Text style={{
            textAlign: 'center'
            , fontWeight: 'bold',
            color: 'red',
            fontSize: 50
        }}>{counter}</Text>
        {/* <Button title="+" onPress={() => {
            setCounter(counter + 1)
        }} /> */}
        <TouchableOpacity style={styles.button} onPress={() => {
            setCounter(counter + 1)
        }}>
            <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>

    </View >
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <CounterScreen />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        alignItems: 'center',
        paddingTop: 40,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});