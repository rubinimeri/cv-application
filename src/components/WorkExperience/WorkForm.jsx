import { useState } from "react";
import WorkFormCard from "./WorkFormCard"
import VisibilityButton from "../VisibilityButton"
import FormTitle from "../FormTitle";

function WorkForm({ workExperience, setWorkExperience, isShown, toggleShow }) {
    const [selectedForm, setSelectedForm] = useState(null);


    function handleClick(e) {
        const { id } = e.target;
        setSelectedForm(workExperience.find(work => work.id === id))
    }

    function handleCancel() {
        setWorkExperience(workExperience.map(work =>
            work.id === selectedForm.id ? {...selectedForm} : work
        ))
        setSelectedForm(null);
    }

    function handleSave() {
        setSelectedForm(null);
    }

    function handleAddWork() {
        const newWork = {
            jobTitle: '',
            companyName: '',
            startDate: '',
            endDate: '',
            description: '',
            id: crypto.randomUUID()
        }
        setWorkExperience([...workExperience, newWork])
        setSelectedForm(newWork);
    }
    return(
        <div className="work-form">
            <div>
                <h2>Professional Experience</h2>
                <VisibilityButton
                 isShown={isShown}
                 setToggle={toggleShow}
                 showIndex={3} />
            </div>
            {isShown && selectedForm ? 
                <WorkFormCard
                {...workExperience.find(work => work.id === selectedForm.id)}
                workExperience={workExperience}
                setWorkExperience={setWorkExperience}
                handleCancel={handleCancel}
                handleSave={handleSave} /> :
                isShown && (
                    <>
                      {workExperience.map(work => 
                        <FormTitle
                          key={work.id}
                          id={work.id}
                          title={work.jobTitle}
                          handleClick={handleClick}
                        />
                      )}
                      <button 
                       className="add-btn"
                       onClick={handleAddWork} >+ Experience</button>
                    </>
                  )
                }
        </div>
    )
}

export default WorkForm