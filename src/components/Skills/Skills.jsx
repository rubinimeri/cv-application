function Skills({ skills }) {
    const skillItems = skills.map(skill => <li key={skill.id}>{skill.skill}</li>)

    return(
        <ul className="skills">{skillItems}</ul>
    )
}

export default Skills