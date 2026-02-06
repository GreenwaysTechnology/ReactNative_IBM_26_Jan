import { StatusBar, Text, View, StyleSheet } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"


function Layout() {
    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        {/* Flex items:children */}
        <View style={{
            flex: 1, backgroundColor: 'lightgreen', 
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={styles.title}>Welcome</Text>
        </View>

    </View >
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Layout />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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