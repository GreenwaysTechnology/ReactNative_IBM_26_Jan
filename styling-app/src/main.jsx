import { createRoot } from 'react-dom/client'

const profiles = [
    {
        id: 1,
        name: 'Raja',
        role: "Front End Developer",
        email: "raja@company.com",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 1,
        name: 'Rahul',
        role: "Back End Developer",
        email: "rahul@company.com",
        avatar: "https://i.pravatar.cc/150?img=2"

    },
    {
        id: 3,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=3"

    },
    {
        id: 4,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=10"

    },
    {
        id: 5,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=9"

    },
    {
        id: 6,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=8"

    },
    {
        id: 7,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=7"

    },
    {
        id: 8,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=6"

    },
    {
        id: 9,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=5"

    },
    {
        id: 10,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=4"

    },
    {
        id: 11,
        name: 'Divya',
        role: "UI/UX Designer",
        email: "divya@company.com",
        avatar: "https://i.pravatar.cc/150?img=11"

    }
]


function App() {
    return <div style={styles.page}>
        <header style={styles.header}>
            <h2>Dashboard</h2>
        </header>
        <div styles={styles.main}>
            <aside style={styles.sidebar}>
                Side Bar
            </aside>
            <section style={styles.content}>
                <h3>Team Members</h3>
                <div style={styles.cards}>
                    {
                        profiles.map(profile => {
                            return <section key={profile.id} style={styles.card}>
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    style={styles.avatar}
                                />
                                <div style={styles.name}>{profile.name}</div>
                                <div style={styles.role}>{profile.role}</div>
                                <div style={styles.email}>{profile.email}</div>

                            </section>
                        })
                    }

                </div>
            </section>
            <footer style={styles.footer}>
                @2026 Company
            </footer>
        </div>
    </div>
}

createRoot(document.getElementById('root')).render(
    <App />
)
const styles = {
    page: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        backgroundColor: "#fafafa"
    },
    header: {
        padding: 20,
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center"
    },
    main: {
        display: "flex",
        flex: 1,
    },
    sidebar: {
        width: 200,
        backgroundColor: "#f4f4f4",
        padding: 20
    },
    content: {
        flex: 1,
        padding: 20,
        minWidth: 0,
        backgroundColor: "#c8ffff"

    },
    cards: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
    },
    card: {
        width: 220,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 15,
        boxShadow: "0 2px 8px rgba(202, 14, 14, 0.1)",
        textAlign: "center"
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: 10
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",

    },
    role: {
        fontSize: 14,
        color: "#777",
        marginBottom: 8

    },
    email: {
        fontSize: 13,
        color: "#555"

    },

    footer: {
        padding: 15,
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center"
    }
}
