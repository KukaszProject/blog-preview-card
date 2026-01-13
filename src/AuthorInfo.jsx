function AuthorInfo({ avatar, name, date }) {
    return (
        <div className="author-info">
            <img src={avatar} alt={name} />
            <span>{name}</span>
        </div>
    );
}

export default AuthorInfo;