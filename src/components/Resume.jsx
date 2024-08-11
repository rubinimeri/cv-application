import PersonalDetails from "./PersonalDetails/PersonalDetails"
import Summary from "./Summary/Summary"
import Education from "./Education/Education"
import Skills from "./Skills/Skills"
import Certifications from "./Certifications/Certifications"
import WorkExperience from "./WorkExperience/WorkExperience"

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
                    <Skills skills={skills} />
                    <Certifications certifications={certifications} />
                </div>
                <div className="right">
                    <WorkExperience workArray={workArray} />
                </div>
             </div>
        </div>
    )
}

export default Resume