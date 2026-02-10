import { StatusBar, Text, View, StyleSheet, Platform, PermissionsAndroid ,Button} from "react-native"
import { useEffect, useState } from "react";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function MyLocation() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (Platform.OS === 'android') {
            requestLocationPermission();
        }
        getCurrentLocation();
    }, []);

    // Request location permission for Android
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission',
                    message: 'We need access to your location to show it on the map.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location permission granted');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    // Function to get current location
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((position) => {
            setLocation(position.coords);
        },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, { flex: 1, padding: 20, marginTop: 40, marginLeft: 10, marginRight: 10 }]}>
        <Text>Location and Map</Text>
        {location ? (
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={location} title="Your Location" />
            </MapView>
        ) : (
            <Text style={{ alignContent: 'center', alignItems: 'center' }}>Fetching location...</Text>
        )}

        <Button title="Get Location" onPress={getCurrentLocation} />

    </View>
}

function App() {
    return <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <MyLocation />
    </SafeAreaProvider>
}

export default App

//define Style
const styles = StyleSheet.create({

});