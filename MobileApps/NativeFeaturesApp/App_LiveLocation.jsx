import { StatusBar, Text, View, StyleSheet, Platform, PermissionsAndroid, Button } from "react-native"
import { useEffect, useState, useRef } from "react";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function MyLocation() {
    const [location, setLocation] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const watchId = Geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;

                const region = {
                    latitude,
                    longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                };

                setLocation(region);

                // Move camera smoothly
                mapRef.current?.animateToRegion(region, 1000);
            },
            error => console.log(error),
            {
                enableHighAccuracy: true,
                distanceFilter: 5,
                interval: 3000,
            }
        );

        return () => Geolocation.clearWatch(watchId);
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                showsUserLocation
                followsUserLocation
            >
                {location && (
                    <Marker coordinate={location} />
                )}
            </MapView>
        </View>
    );
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
    container: { flex: 1 },
    map: { flex: 1 },
});