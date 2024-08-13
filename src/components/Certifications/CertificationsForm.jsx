import CertificationsFormCard from "./CertificationsFormCard"

function CertificationsForm({ certifications, setCertifications }) {
    function handleDelete(e) {
        const { name } = e.target
        setCertifications(certifications.filter(certification => 
            certification.id !== name))
    }

    function handleChange(e) {
        const { id, value } = e.target
        setCertifications(certifications.map(certification => 
            certification.id === id ? {...certification, certification: value} : certification
        ))
    }

    function handleNewCertification() {
        setCertifications([...certifications, {certification: '', id: crypto.randomUUID()}])
    }

    return(
        <div className="certifications-form">
            <h2>Certifications</h2>
            {certifications.map(certification =>
                <CertificationsFormCard 
                 key={certification.id}
                 {...certification}
                 onDelete={handleDelete}
                 onChange={handleChange} />
            )}
            <button onClick={handleNewCertification}>Add New Certification</button>
        </div>
    )
}

export default CertificationsForm