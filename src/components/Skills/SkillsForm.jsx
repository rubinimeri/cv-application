import VisibilityButton from "../VisibilityButton"
import SkillCard from "./SkillCard"

function SkillsForm({ skills, setSkills, isShown, toggleShow }) {
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
            <div>
                <h2>Skills</h2>
                <VisibilityButton
                 isShown={isShown}
                 setToggle={toggleShow}
                 showIndex={4} />
            </div>
            {isShown && skills.map(skill =>
                <SkillCard 
                 key={skill.id}
                 id={skill.id}
                 value={skill.skill}
                 onDelete={handleDelete}
                 onChange={handleChange} />
            )}
            {isShown && <button className="add-btn" onClick={handleNewSkill}>+ Skill</button>}
        </div>
    )
}

export default SkillsForm