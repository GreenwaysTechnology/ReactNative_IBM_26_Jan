import { StatusBar, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, FlatList } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import menuItems from "./mock-data/menus";
import { useEffect, useState } from "react";

//data

function UserListScreen() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setUsers(data)
        }
        catch (err) {
            console.log("Api error", err)
        }
        finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <View style={styles.loader}>
            <ActivityIndicator size="large" color="#00fbff" />
        </View>
    }

    //renderItem constant
    const renderItem = ({ item }) => {
        return <View style={styles.card}>
            <Image style={styles.avatar} source={{ uri: `https://i.pravatar.cc/150?u=${item.email}` }} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.company}>{item.company.name}</Text>
            </View>
        </View>

    }

    return <>
        <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 15 }}
        />
    </>
}

function HomeScreen() {
    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        <UserListScreen />
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
        flex: 1
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 3,
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    info: {
        marginLeft: 12,
        flex: 1,
        justifyContent: "center",
    },

    name: {
        fontSize: 16,
        fontWeight: "bold",
    },

    email: {
        color: "#666",
        marginTop: 2,
    },

    company: {
        marginTop: 4,
        color: "#007bff",
        fontSize: 13,
    },
});

