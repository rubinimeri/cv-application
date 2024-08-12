function SkillCard({ id, value, onDelete, onChange }) {
    return(
        <div className="skill-card">
            <input type="text" value={value} id={id} onChange={onChange}/>
            <button 
             className="delete-skill" 
             id={id}
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