import InputGroup from "../InputGroup"

function EducationFormCard(props) {
    const { id, schoolName, degreeName, startDate, endDate } = props;
    const { educationArray, setEducationArray } = props;

    function handleInputChange(e) {
        const { name, value } = e.target
        console.log(e.target.parentElement)
        setEducationArray(educationArray.map(education => 
            education.id === id ? {...education, [name]: value} : education))
    }
    return(
        <div className="education-form-card">
            <InputGroup 
             type="text"
             id="schoolName"
             name="schoolName"
             value={schoolName}
             labelText="School Name"
             changeHandler={handleInputChange} />
            <InputGroup 
             type="text"
             id="degreeName"
             name="degreeName"
             value={degreeName}
             labelText="Degree Name"
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
        </div>
    )
}

export default EducationFormCard