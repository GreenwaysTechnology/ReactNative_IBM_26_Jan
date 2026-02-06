import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"



function ProfileScreen() {
    const insets = useSafeAreaInsets();
    const [name, setName] = useState("Dhivya Sree");
    const [email, setEmail] = useState("dhivya@email.com");
    const [phone, setPhone] = useState("+91 9876543210");

    const onSave = () => {
        console.log("Saved:", { name, email, phone });
    };
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>


        return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Avatar Section */}
            <View style={styles.header}>
                <Image
                    source={{ uri: "https://i.pravatar.cc/150" }}
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.editBadge}>
                    <Text style={{ color: "#fff" }}>✎</Text>
                </TouchableOpacity>
            </View>

            {/* Form Card */}
            <View style={styles.card}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Phone</Text>
                <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    style={styles.input}
                    keyboardType="phone-pad"
                />
            </View>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
                <Text style={styles.saveText}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
        );

    </View >
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <ProfileScreen />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f5f6fa",
    },

    header: {
        alignItems: "center",
        marginBottom: 20,
    },

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65,
    },

    editBadge: {
        position: "absolute",
        bottom: 5,
        right: 120,
        backgroundColor: "#007bff",
        padding: 6,
        borderRadius: 20,
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        elevation: 3,
    },

    label: {
        marginTop: 12,
        fontWeight: "bold",
        color: "#444",
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginTop: 6,
    },

    saveBtn: {
        backgroundColor: "#007bff",
        marginTop: 25,
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
    },

    saveText: {
        color: "#fff",
        fontWeight: "bold",
    }
});