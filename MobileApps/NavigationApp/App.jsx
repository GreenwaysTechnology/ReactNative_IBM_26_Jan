import React, { useState, createContext, useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* ---------------- CONTEXT ---------------- */
const AppContext = createContext();

/* ---------------- PRODUCTS ---------------- */
const products = [
    { id: '1', name: 'Laptop', price: 800, image: 'https://picsum.photos/300?1' },
    { id: '2', name: 'Phone', price: 500, image: 'https://picsum.photos/300?2' },
    { id: '3', name: 'Headphones', price: 100, image: 'https://picsum.photos/300?3' },
    { id: '4', name: 'Keyboard', price: 50, image: 'https://picsum.photos/300?4' },
];

/* ---------------- LOGIN ---------------- */
function LoginScreen() {
    const { login } = useContext(AppContext);

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Shop App Login</Text>

            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

/* ---------------- PRODUCT LIST ---------------- */
function ProductList({ navigation }) {
    return (
        <FlatList
            data={products}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => navigation.navigate('Details', { product: item })}
                >
                    <Image source={{ uri: item.image }} style={styles.thumb} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text>${item.price}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

/* ---------------- PRODUCT DETAILS ---------------- */
function ProductDetails({ route }) {
    const { product } = route.params;
    const { addToCart } = useContext(AppContext);

    return (
        <View style={styles.center}>
            <Image source={{ uri: product.image }} style={styles.detailImage} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={{ marginVertical: 10 }}>
                Price: ${product.price}
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => addToCart(product)}
            >
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

/* ---------------- CART ---------------- */
function CartScreen({ navigation }) {
    const { cart, increaseQty, decreaseQty } =
        useContext(AppContext);

    const total = cart.reduce(
        (sum, i) => sum + i.price * i.qty,
        0
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={cart}
                keyExtractor={(i) => i.id}
                ListEmptyComponent={
                    <Text style={styles.center}>Cart is empty</Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: item.image }} style={styles.cartThumb} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text>${item.price} × {item.qty}</Text>
                            </View>
                        </View>

                        <View style={styles.qtyRow}>
                            <TouchableOpacity
                                style={styles.qtyBtn}
                                onPress={() => decreaseQty(item.id)}
                            >
                                <Text>-</Text>
                            </TouchableOpacity>

                            <Text style={{ marginHorizontal: 10 }}>{item.qty}</Text>

                            <TouchableOpacity
                                style={styles.qtyBtn}
                                onPress={() => increaseQty(item.id)}
                            >
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <View style={styles.totalBox}>
                <Text style={styles.totalText}>Total: ${total}</Text>

                {cart.length > 0 && (
                    <TouchableOpacity
                        style={styles.checkoutBtn}
                        onPress={() =>
                            navigation.navigate('Shop', {
                                screen: 'Checkout',
                            })
                        }
                    >
                        <Text style={styles.buttonText}>Checkout</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

/* ---------------- CHECKOUT ---------------- */
function CheckoutScreen({ navigation }) {
    const { cart, placeOrder } = useContext(AppContext);

    const total = cart.reduce(
        (sum, i) => sum + i.price * i.qty,
        0
    );

    return (
        <View style={styles.center}>
            <Text style={styles.title}>Checkout</Text>
            <Text style={{ marginVertical: 10 }}>
                Order Total: ${total}
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    placeOrder();
                    navigation.replace('Success');
                }}
            >
                <Text style={styles.buttonText}>Place Order</Text>
            </TouchableOpacity>
        </View>
    );
}

/* ---------------- SUCCESS ---------------- */
function SuccessScreen({ navigation }) {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>Order Successful!</Text>

            <TouchableOpacity
                style={[styles.button, { marginTop: 20 }]}
                onPress={() => navigation.navigate('Products')}
            >
                <Text style={styles.buttonText}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    );
}

/* ---------------- ORDERS ---------------- */
function OrdersScreen() {
    const { orders } = useContext(AppContext);

    return (
        <FlatList
            data={orders}
            keyExtractor={(_, i) => i.toString()}
            ListEmptyComponent={
                <Text style={styles.center}>No orders yet</Text>
            }
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.title}>Order</Text>
                    <Text>Total: ${item.total}</Text>
                    <Text>Items: {item.count}</Text>
                </View>
            )}
        />
    );
}

/* ---------------- NAVIGATION ---------------- */
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ShopStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductList} />
            <Stack.Screen name="Details" component={ProductDetails} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="Success" component={SuccessScreen} />
        </Stack.Navigator>
    );
}

function Tabs() {
    const { logout } = useContext(AppContext);

    return (
        <Tab.Navigator>
            <Tab.Screen name="Shop" component={ShopStack} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
            <Tab.Screen
                name="Logout"
                component={() => null}
                listeners={{ tabPress: logout }}
            />
        </Tab.Navigator>
    );
}

/* ---------------- APP ---------------- */
export default function App() {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    const login = () => setUser({ name: 'User' });
    const logout = () => setUser(null);

    const addToCart = (product) => {
        const existing = cart.find(p => p.id === product.id);

        if (existing) increaseQty(product.id);
        else setCart([...cart, { ...product, qty: 1 }]);
    };

    const increaseQty = (id) => {
        setCart(cart.map(i =>
            i.id === id ? { ...i, qty: i.qty + 1 } : i
        ));
    };

    const decreaseQty = (id) => {
        setCart(cart
            .map(i =>
                i.id === id ? { ...i, qty: i.qty - 1 } : i
            )
            .filter(i => i.qty > 0)
        );
    };

    const placeOrder = () => {
        const total = cart.reduce(
            (sum, i) => sum + i.price * i.qty,
            0
        );

        setOrders([...orders, { total, count: cart.length }]);
        setCart([]);
    };

    return (
        <AppContext.Provider
            value={{
                login,
                logout,
                cart,
                orders,
                addToCart,
                increaseQty,
                decreaseQty,
                placeOrder,
            }}
        >
            <NavigationContainer>
                {user ? <Tabs /> : <LoginScreen />}
            </NavigationContainer>
        </AppContext.Provider>
    );
}

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: { fontSize: 18, fontWeight: 'bold' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    button: { backgroundColor: 'green', padding: 12, borderRadius: 6 },
    buttonText: { color: 'white', fontWeight: 'bold' },
    checkoutBtn: {
        backgroundColor: '#ff6600',
        padding: 12,
        borderRadius: 6,
        marginTop: 10,
    },
    thumb: { width: 60, height: 60, borderRadius: 6 },
    detailImage: { width: 200, height: 200, borderRadius: 10 },
    cartThumb: { width: 50, height: 50, borderRadius: 6 },
    qtyRow: { flexDirection: 'row', alignItems: 'center' },
    qtyBtn: {
        padding: 8,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 4,
        width: 30,
        alignItems: 'center',
    },
    totalBox: { padding: 16, borderTopWidth: 1, borderColor: '#ddd' },
    totalText: { fontSize: 18, fontWeight: 'bold' },
});
