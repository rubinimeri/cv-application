import EducationCard from "./EducationCard"

function Education({ educationArray }) {
    return(
        <div>
            <h2>EDUCATION</h2>
            {educationArray.map(education => 
            <EducationCard 
             key={education.id}
             schoolName={education.schoolName}
             degreeName={education.degreeName}
             startDate={education.startDate}
             endDate={education.endDate} /> )}
        </div>
    )
}

export default Education