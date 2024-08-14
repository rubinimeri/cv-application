function SkillCard({ id, value, onDelete, onChange }) {
    return(
        <div className="skill-card">
            <textarea value={value} id={id} onChange={onChange}/>
            <button 
             className="delete-skill" 
             name={id}
             onClick={(e) => {
                e.preventDefault();
                onDelete(e)
             }}>
                Delete Skill
            </button>
        </div>
    )
}

export default SkillCard