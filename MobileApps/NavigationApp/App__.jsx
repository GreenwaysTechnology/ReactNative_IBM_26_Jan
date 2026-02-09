import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* ---------------------------
   Dummy Chat Data
----------------------------*/
const chats = [
    { id: '1', name: 'Ravi' },
    { id: '2', name: 'Anita' },
    { id: '3', name: 'John' },
    { id: '4', name: 'Meena' },
];

/* ---------------------------
   Chat List Screen
----------------------------*/
function ChatListScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.chatItem}
                        onPress={() =>
                            navigation.navigate('ChatScreen', {
                                name: item.name,
                            })
                        }
                    >
                        <Text style={styles.chatName}>{item.name}</Text>
                        <Text style={styles.chatMsg}>Last message...</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Floating Button */}
            <View style={styles.fab}>
                <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
            </View>
        </View>
    );
}

/* ---------------------------
   Chat Screen
----------------------------*/
function ChatScreen({ route }) {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>
                Chat with {route.params.name}
            </Text>
        </View>
    );
}

/* ---------------------------
   Status Screen
----------------------------*/
function StatusScreen() {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Status Screen</Text>
        </View>
    );
}

/* ---------------------------
   Calls Screen
----------------------------*/
function CallsScreen() {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Calls Screen</Text>
        </View>
    );
}

/* ---------------------------
   Navigators
----------------------------*/
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* Chat Stack */
function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ChatList"
                component={ChatListScreen}
                options={{ title: 'Chats' }}
            />
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    );
}

/* Bottom Tabs */
function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, // ✅ hides duplicate header
            }}
        >
            <Tab.Screen name="Chats" component={ChatStack} />
            <Tab.Screen name="Status" component={StatusScreen} />
            <Tab.Screen name="Calls" component={CallsScreen} />
        </Tab.Navigator>
    );
}

/* Root App */
export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#ffffff"
            />
            <Tabs />
        </NavigationContainer>
    );
}

/* ---------------------------
   Styles
----------------------------*/
const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    chatItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    chatName: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    chatMsg: {
        color: '#666',
        marginTop: 4,
    },

    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#25D366',
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
});
