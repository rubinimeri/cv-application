import PersonalDetails from "./PersonalDetails/PersonalDetails"

function Resume({ 
    personalDetails, summary, educationArray, 
    workArray, skills, certifications }) {

    return(
        <div className="resume">
            <PersonalDetails
             name={personalDetails.name}
             jobTitle={personalDetails.jobTitle}
             number={personalDetails.number}
             email={personalDetails.email}
             location={personalDetails.location} />
        </div>
    )
}

export default Resume