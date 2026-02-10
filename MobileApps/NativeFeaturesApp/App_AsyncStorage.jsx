import { StatusBar, Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage";


//AsyncStorage stores data in a keyvalue pair
const STORAGE_KEY = "USERS_DB"

function UserRegistration() {
    //user data 
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadUsers()
    }, [])
    async function loadUsers() {
        const data = await AsyncStorage.getItem(STORAGE_KEY)
        if (data) {
            setUsers(JSON.parse(data))
        }
    }
    function addUser() {
        if (!name || !email) return;

        const newUser = {
            id: Date.now().toString(),
            name,
            email,
        };

        saveUsers([...users, newUser]);
        clearForm();
    }
    /* ---------------- CLEAR FORM ---------------- */
    const clearForm = () => {
        setName('');
        setEmail('');
        setEditId(null);
    };
    const deleteUser = (id) => {
        const filtered = users.filter(u => u.id !== id);
        saveUsers(filtered);
    };

    const saveUsers = async (data) => {
        setUsers(data);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };
    const updateUser = () => {
        const updated = users.map(u =>
            u.id === editId ? { ...u, name, email } : u
        );

        saveUsers(updated);
        clearForm();
    };

    const startEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setEditId(user.id);
    };

    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, { flex: 1, padding: 20, marginTop: 40, marginLeft: 10, marginRight: 10 }]}>
        <Text style={styles.title}>Registration Form</Text>
        <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
        />
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={editId ? updateUser : addUser}
        >
            <Text style={styles.btnText}>
                {editId ? 'Update User' : 'Register User'}
            </Text>
        </TouchableOpacity>
        <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            {item.name}
                        </Text>
                        <Text>{item.email}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => startEdit(item)}
                        >
                            <Text style={styles.edit}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => deleteUser(item.id)}
                        >
                            <Text style={styles.delete}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
        {/*  */}
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={() => startEdit(item)}
            >
                <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => deleteUser(item.id)}
            >
                <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
        </View>

    </View>
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <UserRegistration />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "red",
        fontWeight: 'bold',
        marginBottom: 10,
    },

    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },

    button: {
        backgroundColor: 'green',
        padding: 12,
        alignItems: 'center',
        marginBottom: 20,
    },

    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
    },

    edit: {
        color: 'blue',
        marginRight: 10,
    },

    delete: {
        color: 'red',
    },
});