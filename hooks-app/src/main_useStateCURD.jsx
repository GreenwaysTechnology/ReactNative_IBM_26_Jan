import { produce } from 'immer'
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Post(props) {
    //inital post data
    const [posts, setPosts] = useState([
        {
            id: 1, title: 'Post 1', body: 'This is first post'
        },
        {
            id: 2, title: 'Post 2', body: 'This is Second post'
        }
    ])
    // to hold form state value
    const [form, setForm] = useState({ id: null, title: '', body: '' })

    // To track button state - add or update
    const [isEditing, setIsEditing] = useState(false)

    // listener for form handling
    const handleSubmit = (e) => {
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }
    //functions for adding and updating
    const updatePost = () => {
        setPosts(posts.map(post => (post.id === form.id ? form : post)))
        setForm({ title: '', body: '', id: null })
        setIsEditing(false)
    }
    const addPost = () => {
        const newPost = { id: posts.length + 1, title: form.title, body: form.body }
        setPosts([...posts, newPost])
        //reset form fieldss
        setForm({ title: '', body: '', id: null })
    }
    const handleEdit = post => {
        setForm({ title: post.title, body: post.body, id: post.id })
        setIsEditing(true)
    }
    const handleDelete = id => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return <div>
        {/* Form to add post into an array */}
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    required
                    onChange={e => setForm({ ...form, title: e.target.value })}
                />
            </div>
            <div>
                <textarea
                    placeholder="body"
                    value={form.body}
                    onChange={e => setForm({ ...form, body: e.target.value })}
                />
            </div>
            <div>
                <button type="submit">{isEditing ? " Update" : " Add"} Post</button>
            </div>
        </form>
        {/* List all posts */}
        {posts.map(post => {
            return <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={() => {
                    handleEdit(post)
                }}>Edit</button>
                <button onClick={() => {
                    handleDelete(post.id)
                }}>Delete</button>
            </li>
        })}
    </div>
}

function App() {
    return <Post />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
