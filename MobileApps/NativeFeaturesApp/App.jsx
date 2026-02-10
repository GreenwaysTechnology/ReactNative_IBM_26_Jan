import { StatusBar, Text, View, StyleSheet, Alert, Platform, PermissionsAndroid, Button } from "react-native"
import { useEffect, useState, useRef } from "react";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import { Camera, useCameraDevice, useCameraDevices } from "react-native-vision-camera";

function MyCamera() {
    const device = useCameraDevice('back')
    const devices = useCameraDevices()

    useEffect(() => {
        console.log('Available devices:', devices);
    }, [device]);

    useEffect(() => {
        const requestPermission = async () => {
            const cameraPermission = await Camera.requestCameraPermission();
            const microphonePermission = await Camera.requestMicrophonePermission();

            if (cameraPermission !== 'authorized' || microphonePermission !== 'authorized') {
                Alert.alert('Permission denied', 'Camera or Microphone permission is required.');
            }
        };

        requestPermission();
    }, []);

    if (device == null) {
        return <Text>Loading camera...</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
            <View style={styles.buttonContainer}>
                <Button title="Capture" onPress={() => Alert.alert('Feature not implemented')} />
            </View>
        </View>
    );

}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <MyCamera />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({
    container: { flex: 1 },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
});