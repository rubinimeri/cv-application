function Skills({ skills }) {
    const skillItems = skills.map(skill => <li key={skill.id}>{skill.skill}</li>)

    return(
        <div>
            <h2>SKILLS</h2>
            <ul className="skills">{skillItems}</ul>
        </div>
    )
}

export default Skills