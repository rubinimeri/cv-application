function Certifications({ certifications }) {
    const certficationItems = certifications.map(certification => <li key={certification.id}>{certification.certification}</li>)

    return(
        <div>
            <h2>CERTIFICATIONS</h2>
            <ul className="certifications">{certficationItems}</ul>
        </div>
    )
}

export default Certifications