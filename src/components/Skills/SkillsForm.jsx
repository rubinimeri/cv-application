import SkillCard from "./SkillCard"

function SkillsForm({ skills, setSkills }) {
    function handleDelete(e) {
        const { name } = e.target
        setSkills(skills.filter(skill => skill.id !== name))
    }

    function handleChange(e) {
        const { id, value } = e.target
        setSkills(skills.map(skill => 
            skill.id === id ? {...skill, skill: value} : skill
        ))
    }

    function handleNewSkill() {
        setSkills([...skills, {skill: '', id: crypto.randomUUID()}])
    }

    return(
        <div className="skills-form">
            <h2>Skills</h2>
            {skills.map(skill =>
                <SkillCard 
                 key={skill.id}
                 id={skill.id}
                 value={skill.skill}
                 onDelete={handleDelete}
                 onChange={handleChange} />
            )}
            <button onClick={handleNewSkill}>Add New Skill</button>
        </div>
    )
}

export default SkillsForm