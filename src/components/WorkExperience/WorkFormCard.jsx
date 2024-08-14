import InputGroup from "../InputGroup"

function WorkFormCard(props) {
    const { id, jobTitle, companyName, startDate, endDate, description } = props
    const { workExperience, setWorkExperience } = props
    const { handleCancel, handleSave } = props;

    function handleInputChange(e) {
        const { name, value } = e.target
        setWorkExperience(workExperience.map(work => 
            work.id === id ? {...work, [name]: value} : work))
    }

    function handleDelete() {
        handleCancel();
        setWorkExperience(workExperience.filter(work => 
            work.id !== id
        ))
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
             <div className="input-group">
                 <label htmlFor="description">Description</label>
                 <textarea
                  name="description"
                  id="description"
                  value={description}
                  onChange={handleInputChange}>
                  </textarea>
             </div>
             <div className="buttons">
                 <button
                  onClick={handleSave}
                  className="save-btn">Save</button>
                 <button
                  onClick={handleDelete}
                  className="delete-btn">
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                 <button
                  onClick={handleCancel}
                  className="cancel-btn">Cancel</button>
             </div>
        </div>
    )
}

export default WorkFormCard