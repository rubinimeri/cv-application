import PersonalDetails from "./PersonalDetails/PersonalDetails"
import Summary from "./Summary"

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
             <Summary summary={summary} />
        </div>
    )
}

export default Resume