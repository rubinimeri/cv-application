function PersonalDetails({ name, jobTitle, number, email, location }) {
    return(
        <div className="personal-details">
            <div>
                <h1>{name}</h1>
                <p>{jobTitle}</p>
            </div>
            <div>
                <p>
                    {number} <i className="fa-solid fa-phone"></i>
                </p>
                <p>
                    {email} <i className="fa-solid fa-envelope"></i>
                </p>
                <p>
                    {location} <i className="fa-solid fa-location-dot"></i>
                </p>
            </div>
        </div>
    )
}

export default PersonalDetails