import InputGroup from "../../InputGroup"

function PersonalDetailsForm({ personalInfo, setPersonalInfo }) {
    function handleInputChange(e) {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    }

    return(
        <form action="" className="personal-details-form">
            <h2>Personal Details</h2>
            <InputGroup
             type="text"
             id="name"
             name="name"
             value={personalInfo.name}
             labelText="Full Name"
             changeHandler={handleInputChange} />
            <InputGroup
             type="text"
             id="jobTitle"
             name="jobTitle"
             value={personalInfo.jobTitle}
             labelText="Job Title"
             changeHandler={handleInputChange} />
            <InputGroup
             type="tel"
             id="number"
             name="number"
             value={personalInfo.number}
             labelText="Number"
             changeHandler={handleInputChange} />
            <InputGroup
             type="email"
             id="email"
             name="email"
             value={personalInfo.email}
             labelText="Email"
             changeHandler={handleInputChange} />
            <InputGroup
             type="text"
             id="location"
             name="location"
             value={personalInfo.location}
             labelText="Location"
             changeHandler={handleInputChange} />
        </form>
    )
}

export default PersonalDetailsForm