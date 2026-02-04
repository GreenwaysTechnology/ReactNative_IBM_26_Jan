import { configureStore, createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createRoot } from 'react-dom/client'
import { StrictMode, useState,useEffect } from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux';


//middleware code for talking to apis
//promise state variables are added automatically, to track promises
//'users/fetchUsers/pending' or users/fetchUsers/completed ,users/fetchUsers/failed
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json()
})

// Add a new user
export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
    });
    return response.json();
});
// Update an existing user
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, updatedUser }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser),
    });
    return response.json();
});
// Delete a user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    });
    return id;
});


//slice code for talking to UI : slice will get data from the middleware.
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Users
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Add User
            .addCase(addUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Update User
            .addCase(updateUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.list.findIndex((user) => user.id === action.payload.id);
                state.list[index] = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Delete User
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = state.list.filter((user) => user.id !== action.payload);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
const UserReducer = usersSlice.reducer


export const store = configureStore({
    reducer: {
        users: UserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});


//react component which trigers/calls thunk action 

function UserItem({ user, onEdit, onDelete }) {
    return (
        <li>
            <span>{user.name} ({user.email})</span>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
    );
}
function Users() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editingUser, setEditingUser] = useState(null);

    const { list: users, status, error } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddOrUpdateUser = () => {
        if (editingUser) {
            dispatch(updateUser({ id: editingUser.id, updatedUser: { name, email } }));
            setEditingUser(null);
        } else {
            dispatch(addUser({ name, email }));
        }
        setName('');
        setEmail('');
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setName(user.name);
        setEmail(user.email);
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <h1>User Management</h1>

            {/* Loading or Error Messages */}
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}

            {/* User Input */}
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleAddOrUpdateUser}>
                    {editingUser ? 'Update User' : 'Add User'}
                </button>
            </div>

            {/* User List */}
            {status === 'succeeded' && (
                <ul>
                    {users.map((user) => (
                        <UserItem
                            key={user.id}
                            user={user}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
const App = () => {
    return <Provider store={store}>
        <Users />
    </Provider>
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)