import VisibilityButton from "../VisibilityButton"
import EducationFormCard from "./EducationFormCard"

function EducationForm({ educationArray, setEducationArray, isShown, toggleShow }) {
    return(
        <div className="education-form">
            <div>
                <h2>Education</h2>
                <VisibilityButton
                 isShown={isShown}
                 setToggle={toggleShow}
                 showIndex={2} />
            </div>
            {isShown && educationArray.map(education => 
            <EducationFormCard
             key={education.id}
             {...education}
             educationArray={educationArray}
             setEducationArray={setEducationArray} />)}
        </div>
    )
}

export default EducationForm