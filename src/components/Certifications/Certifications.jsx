function Certifications({ certifications }) {
    const certficationItems = certifications.map(certification => <li key={certification.id}>{certification.certification}</li>)

    return(
        <ul className="certifications">{certficationItems}</ul>
    )
}

export default Certifications