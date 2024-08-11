import PersonalDetails from "./PersonalDetails/PersonalDetails"
import Summary from "./Summary"
import Education from "./Education/Education"

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
             <div className="education-work">
                <div className="left">
                    <Education educationArray={educationArray} />
                </div>
                <div className="right">

                </div>
             </div>
        </div>
    )
}

export default Resume