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
        <form action="" className="skills-form">
            <h2>Skills</h2>
            {skills.map(skill =>
                <SkillCard 
                 key={skill.id}
                 id={skill.id}
                 value={skill.skill}
                 onDelete={handleDelete}
                 onChange={handleChange} />
            )}
            <button onClick={(e) => {
                e.preventDefault();
                handleNewSkill();
            }}>Add New Skill</button>
        </form>
    )
}

export default SkillsForm