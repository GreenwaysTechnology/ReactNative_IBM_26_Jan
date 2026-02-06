import { StatusBar, Text, View,  StyleSheet, TouchableOpacity, SectionList, ActivityIndicator, FlatList, Alert } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"

const CONTACTS = [
    {
        title: 'A',
        data: [
            { id: '1', name: 'Alice', status: 'Available' },
            { id: '2', name: 'Adam', status: 'Busy' },
        ],
    },
    {
        title: 'B',
        data: [
            { id: '3', name: 'Bob', status: 'At work' },
            { id: '4', name: 'Ben', status: 'In meeting' },
        ],
    },
];

function ContactsScreen() {
    return (
        <SectionList
            sections={CONTACTS}
            keyExtractor={(item) => item.id}

            renderItem={({ item }) => (
                <View style={styles.row}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {item.name.charAt(0)}
                        </Text>
                    </View>

                    <View style={styles.contactInfo}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.status}>{item.status}</Text>
                    </View>
                </View>
            )}

            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>{title}</Text>
            )}

            stickySectionHeadersEnabled
        />
    );
}

function HomeScreen() {
    const insets = useSafeAreaInsets();
    return <View style={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
    }, styles.container]}>
        <ContactsScreen />
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
  container: { flex: 1, backgroundColor: '#fff' },

  sectionHeader: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: '#f5f5f5',
    color: '#666',
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  contactInfo: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    flex: 1,
    paddingBottom: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  status: {
    color: '#666',
    marginTop: 2,
  },
});
