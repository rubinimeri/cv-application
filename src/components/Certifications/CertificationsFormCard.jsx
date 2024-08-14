function CertificationsFormCard(props) {
    const { id, certification, onDelete, onChange} = props;

    return(
        <div className="certification-card">
            <textarea value={certification} id={id} onChange={onChange}/>
            <button 
             className="delete-btn" 
             name={id}
             onClick={onDelete}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    )
}

export default CertificationsFormCard