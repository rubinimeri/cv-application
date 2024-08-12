import InputGroup from "../InputGroup"

function WorkFormCard(props) {
    const { id, jobTitle, companyName, startDate, endDate, description } = props
    const { workExperience, setWorkExperience } = props

    function handleInputChange(e) {
        const { name, value } = e.target
        setWorkExperience(workExperience.map(work => 
            work.id === id ? {...work, [name]: value} : work))
    }

    return(
        <div className="work-form-card">
            <InputGroup
             type="text"
             id="jobTitle"
             name="jobTitle"
             value={jobTitle}
             labelText="Job Title"
             changeHandler={handleInputChange} />
            <InputGroup
             type="text"
             id="companyName"
             name="companyName"
             value={companyName}
             labelText="Company Name"
             changeHandler={handleInputChange} />
             <InputGroup
             type="text"
             id="startDate"
             name="startDate"
             value={startDate}
             labelText="Start Date"
             changeHandler={handleInputChange} />
             <InputGroup
             type="text"
             id="endDate"
             name="endDate"
             value={endDate}
             labelText="End Date"
             changeHandler={handleInputChange} />
             <InputGroup
             type="text"
             id="description"
             name="description"
             value={description}
             labelText="Description"
             changeHandler={handleInputChange} />
        </div>
    )
}

export default WorkFormCard