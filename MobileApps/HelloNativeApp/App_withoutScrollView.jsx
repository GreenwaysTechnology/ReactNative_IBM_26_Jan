import { StatusBar, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import menuItems from "./mock-data/menus";

//data

function SettingsScreen() {

    return <View style={{flex:1}}>
        {menuItems.map((item, index) => {
            return <TouchableOpacity key={index}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
        })}
    </View>
}

function HomeScreen() {
    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        <SettingsScreen />
    </View >
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ff2f2'
    },
    item: {
        padding: 18,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    text: {
        fontSize:16
    }
})
