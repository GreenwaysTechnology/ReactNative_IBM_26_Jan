import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Notes() {

    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    // Load notes from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("notes"));
        // if (saved) {
        //     console.log("saved")
            setNotes(saved);
       // }
    }, []);

    // Save vibes
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        if (!note.trim()) return;
        setNotes([...notes, note]);
        setNote("");
    };

    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    return (
        <div style={styles.container}>
            <h1>📝  Notes</h1>

            <div style={styles.inputBox}>
                <input
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Drop your thought..."
                    style={styles.input}
                />
                <button onClick={addNote} style={styles.button}>
                    Add
                </button>
            </div>

            {notes.map((n, i) => (
                <div key={i} style={styles.note}>
                    {n}
                    <span onClick={() => deleteNote(i)} style={styles.delete}>
                        ❌
                    </span>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 400,
        margin: "50px auto",
        fontFamily: "sans-serif",
        textAlign: "center",
    },
    inputBox: {
        display: "flex",
        gap: 10,
    },
    input: {
        flex: 1,
        padding: 10,
    },
    button: {
        padding: "10px 15px",
        cursor: "pointer",
    },
    note: {
        background: "#f4f4f4",
        padding: 10,
        marginTop: 10,
        display: "flex",
        justifyContent: "space-between",
    },
    delete: {
        cursor: "pointer",
    },
};

function App() {
    return <Notes />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
