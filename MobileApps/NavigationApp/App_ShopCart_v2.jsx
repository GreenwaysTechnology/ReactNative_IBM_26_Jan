import React, { useState, createContext, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* --------------------------
   Cart Context
---------------------------*/
const CartContext = createContext();

/* --------------------------
   Dummy Products
---------------------------*/
const products = [
  { id: '1', name: 'Laptop', price: 800 },
  { id: '2', name: 'Phone', price: 500 },
  { id: '3', name: 'Headphones', price: 100 },
  { id: '4', name: 'Keyboard', price: 50 },
];

/* --------------------------
   Product List
---------------------------*/
function ProductList({ navigation }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate('Details', { product: item })
          }
        >
          <Text style={styles.title}>{item.name}</Text>
          <Text>${item.price}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

/* --------------------------
   Product Details
---------------------------*/
function ProductDetails({ route }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.center}>
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

/* --------------------------
   Cart Screen
---------------------------*/
function CartScreen() {
  const { cart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.center}>Cart is empty</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text>
                ${item.price} × {item.qty}
              </Text>
            </View>

            <View style={styles.qtyRow}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => decreaseQty(item.id)}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <Text style={{ marginHorizontal: 10 }}>
                {item.qty}
              </Text>

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
        <Text style={styles.totalText}>
          Total: ${total}
        </Text>
      </View>
    </View>
  );
}

/* --------------------------
   Navigation Setup
---------------------------*/
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductList} />
      <Stack.Screen name="Details" component={ProductDetails} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

/* --------------------------
   Main App
---------------------------*/
export default function App() {
  const [cart, setCart] = useState([]);

  /* Add product */
  const addToCart = (product) => {
    const existing = cart.find(p => p.id === product.id);

    if (existing) {
      increaseQty(product.id);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  /* Increase quantity */
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    ));
  };

  /* Decrease quantity */
  const decreaseQty = (id) => {
    setCart(cart
      .map(item =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter(item => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty }}
    >
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </CartContext.Provider>
  );
}

/* --------------------------
   Styles
---------------------------*/
const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  cartItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 6,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  qtyBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    width: 30,
    alignItems: 'center',
  },

  totalBox: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
