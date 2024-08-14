function SkillCard({ id, value, onDelete, onChange }) {
    return(
        <div className="skill-card">
            <textarea value={value} id={id} onChange={onChange}/>
            <button 
             className="delete-skill delete-btn" 
             name={id}
             onClick={onDelete}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    )
}

export default SkillCard