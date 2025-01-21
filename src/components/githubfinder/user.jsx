


export default function User({ user }) {
    const [avatar_url, following, followers, login, public_repos, name, type, url] = user

    return <div className="user">
        <div>
            <img src={avatar_url} className="avatar" alt="userd"/>
        </div>
        <div>
            <a >{name || login}</a>
        </div>
    </div>
}