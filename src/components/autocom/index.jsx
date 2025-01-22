import { useEffect, useState } from "react"




export default function SearchAutoComplete(){

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)

    async function fetchListofUsers(){
        try {
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()

            console.log(data);
            
            
        } catch (error) {
            console.log(error);
            setError(error)
        }
    }

    useEffect(() => {
        fetchListofUsers()
    }, [])

    return <div className="search-autocomplete-container">
        <input name="seach-users" placeholder="Search Users..."/>
    </div>
}