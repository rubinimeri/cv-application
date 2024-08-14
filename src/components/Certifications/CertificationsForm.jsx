import CertificationsFormCard from "./CertificationsFormCard"
import VisibilityButton from "../VisibilityButton"

function CertificationsForm({ certifications, setCertifications, isShown, toggleShow }) {
    function handleDelete(e) {
        const button = e.target.closest('button');
        const { name } = button;
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
            <div>
                <h2>Certifications</h2>
                <VisibilityButton
                 isShown={isShown}
                 setToggle={toggleShow}
                 showIndex={5} />
            </div>
            {isShown && certifications.map(certification =>
                <CertificationsFormCard 
                 key={certification.id}
                 {...certification}
                 onDelete={handleDelete}
                 onChange={handleChange} />
            )}
            {isShown && <button className="add-btn" onClick={handleNewCertification}>+ Certification</button>}
        </div>
    )
}

export default CertificationsForm