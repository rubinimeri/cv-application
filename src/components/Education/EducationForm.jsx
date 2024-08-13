import { useState } from "react";
import VisibilityButton from "../VisibilityButton"
import EducationFormCard from "./EducationFormCard"

function FormTitle({ id, title, handleClick }) {
    return(
        <button className="form-title" id={id} onClick={handleClick}>
            {title}
        </button>
    )
}

function EducationForm({ educationArray, setEducationArray, isShown, toggleShow }) {
    const [selectedForm, setSelectedForm] = useState(null);


    function handleClick(e) {
        const { id } = e.target;
        setSelectedForm(educationArray.find(education => education.id === id))
    }

    function handleCancel() {
        setEducationArray(educationArray.map(education =>
            education.id === selectedForm.id ? {...selectedForm} : education
        ))
        setSelectedForm(null);
    }

    function handleSave() {
        setSelectedForm(null);
    }

    function handleAddEducation() {
        const newEducation = {
            schoolName: null,
            degreeName: null,
            startDate: null,
            endDate: null,
            id: crypto.randomUUID()
        }
        setEducationArray([...educationArray, newEducation])
        setSelectedForm(newEducation);
    }
    return(
        <div className="education-form">
            <div>
                <h2>Education</h2>
                <VisibilityButton
                 isShown={isShown}
                 setToggle={toggleShow}
                 showIndex={2} />
            </div>

            {isShown && selectedForm ? 
                <EducationFormCard
                {...educationArray.find(education => education.id === selectedForm.id)}
                educationArray={educationArray}
                setEducationArray={setEducationArray}
                handleCancel={handleCancel}
                handleSave={handleSave} /> :
                isShown && (
                    <>
                      {educationArray.map(education => 
                        <FormTitle
                          key={education.id}
                          id={education.id}
                          title={education.schoolName}
                          handleClick={handleClick}
                        />
                      )}
                      <button 
                       className="add-btn"
                       onClick={handleAddEducation} >+ Education</button>
                    </>
                  )
                }
        </div>
    )
}

export default EducationForm