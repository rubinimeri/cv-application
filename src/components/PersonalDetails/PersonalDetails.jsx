function PersonalDetails({ name, jobTitle, number, email, location }) {
    return(
        <div className="personal-details">
            <div>
                <h1>{name}</h1>
                <p>{jobTitle}</p>
            </div>
            <div>
                <p>
                    {number}
                </p>
                <p>
                    {email}
                </p>
                <p>
                    {location}
                </p>
            </div>
        </div>
    )
}

export default PersonalDetails