import { useEffect, useState } from "react"
import DropDown from "./dropdown";




export default function SearchAutoComplete() {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)
    const [searchParm, setSearchParam] = useState('')
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    function handleOnChange(event) {
        const query = event.target.value.toLowerCase()
        setSearchParam(query)
        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilteredUsers(filteredData)
            setShowDropDown(true)
        } else {
            setShowDropDown(false)
        }
    }

    function handleClick(e){
        console.log(e.target.innerText);
        setShowDropDown(false)
        setSearchParam(e.target.innerText);
        setFilteredUsers([])
        
    }

    async function fetchListofUsers() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()

            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName))
                setLoading(false)
                setError(null)

            }

        } catch (error) {
            setLoading(false)
            console.log(error);
            setError(error)
        }
    }

    useEffect(() => {
        fetchListofUsers()
    }, [])


    return <div className="search-autocomplete-container">
        {
            loading ? <h1>Loading data ! Please Wait</h1>
                : (<input
                    value={searchParm}
                    name="seach-users"
                    placeholder="Search Users..."
                    onChange={handleOnChange}
                />
                )}
        {
            showDropDown && <DropDown handleClick={handleClick} data={filteredUsers} />
        }
    </div>
}