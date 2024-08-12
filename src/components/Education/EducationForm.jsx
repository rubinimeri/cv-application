import EducationFormCard from "./EducationFormCard"

function EducationForm({ educationArray, setEducationArray }) {
    return(
        <form action="" className="education-form">
            <h2>Education</h2>
            {educationArray.map(education => 
            <EducationFormCard
             key={education.id}
             {...education}
             educationArray={educationArray}
             setEducationArray={setEducationArray} />)}
        </form>
    )
}

export default EducationForm