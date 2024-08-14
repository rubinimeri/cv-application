function CertificationsFormCard(props) {
    const { id, certification, onDelete, onChange} = props;

    return(
        <div className="certification-card">
            <textarea value={certification} id={id} onChange={onChange}/>
            <button 
             className="delete-certification" 
             name={id}
             onClick={(e) => {
                e.preventDefault();
                onDelete(e)
             }}>
                Delete Certification
            </button>
        </div>
    )
}

export default CertificationsFormCard