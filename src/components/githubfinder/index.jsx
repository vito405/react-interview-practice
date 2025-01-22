import { useEffect, useState } from "react"
import User from './user'
import './gitnub.css'

export default function GitHubFinder() {
    const [userName, setUserName] = useState('vito405')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)


        const data = await res.json();
        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName('')
        }

    }

    function handleSubmit() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h1>Loading Data ! Please wait</h1>
    }

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input
                name="search-by-username"
                type="text"
                placeholder="Search github Username.."
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData} /> : null
        }
    </div>
}