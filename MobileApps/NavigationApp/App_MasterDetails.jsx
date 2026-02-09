import { ActivityIndicator, FlatList, StyleSheet, useColorScheme, View, Text, Button, TouchableHighlight, Alert } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

const Error = props => {
    return <>
        <Text>{props.error}</Text>
    </>
}

const Spinner = props => {
    return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size='large' color="#0000ff" />
    </View>
}
const PostsScreen = props => {
    let initalState = {
        isLoaded: false,
        items: [],
        error: null
    }
    const [posts, setPosts] = useState(initalState)

    async function fetchPosts() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const values = await (await fetch(url)).json()
            setPosts({ ...posts, isLoaded: true, items: posts.items.concat(values) })
        }
        catch (err) {
            setPosts({ ...posts, isLoaded: true, error: err })
        }
    }
    //useEffect : ComponentDidMount 
    useEffect(() => {
        setTimeout(() => {
            fetchPosts()
        }, 5000)
    }, [])

    const onSelect = (item) => {
        props.navigation.navigate('PostsDetails', item)
    }

    const { error, isLoaded, items } = posts
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <TouchableHighlight activeOpacity={0.4} underlayColor='yellow' onPress={() => { onSelect(item) }} >
                    <View>
                        <Text style={styles.item}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            }}
        />
    }

}
const PostsDetailScreen = props => {
    const { title, body } = props.route.params
    return <View style={styles.container}>
        <Text style={{ fontSize: 25, color: 'blue' }}>{title}</Text>
        <Text style={{ fontSize: 20, color: 'red' }}>{body}</Text>
    </View>
}



//Screens 
const HomeScreen = (props) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableHighlight onPress={() => {
        props.navigation.navigate("Posts")
    }} activeOpacity={0.4} underlayColor={'lightgreen'}>
        <Text style={{
            fontSize: 40,
        }}>Posts</Text>
    </TouchableHighlight>



</View>


function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <AppContent />
        </SafeAreaProvider>
    );
}

function AppContent() {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >
            <NavigationContainer>
                <Stack.Navigator>
                    {/* Screens */}
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Posts" component={PostsScreen} />
                    <Stack.Screen name="PostsDetails" component={PostsDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default App;
