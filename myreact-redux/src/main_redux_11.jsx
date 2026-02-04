import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { StrictMode, useState } from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'

const initialState = {
    items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ],
};
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 1,
                name: action.payload,
            };
            //immutable api
            state.items.push(newItem);
        },
        updateItem: (state, action) => {
            const { id, name } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.name = name;
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});
export const { addItem, updateItem, deleteItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;

export const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
});
const Item = () => {
    const items = useSelector((state) => state.items.items);
    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState('');
    const [editingItem, setEditingItem] = useState(null);
    const [editingName, setEditingName] = useState('');

    const handleAdd = () => {
        if (newItem.trim()) {
            dispatch(addItem(newItem));
            setNewItem('');
        }
    };

    const handleUpdate = (id) => {
        if (editingName.trim()) {
            dispatch(updateItem({ id, name: editingName }));
            setEditingItem(null);
            setEditingName('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>CRUD with Redux Toolkit</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add new item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {editingItem === item.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editingName}
                                    onChange={(e) => setEditingName(e.target.value)}
                                />
                                <button onClick={() => handleUpdate(item.id)}>Save</button>
                                <button onClick={() => setEditingItem(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {item.name}{' '}
                                <button onClick={() => {
                                    setEditingItem(item.id);
                                    setEditingName(item.name);
                                }}>
                                    Edit
                                </button>{' '}
                                <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
const App = () => {
    return <Provider store={store}>
        <Item />
    </Provider>
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
