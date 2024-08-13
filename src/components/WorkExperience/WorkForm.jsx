import WorkFormCard from "./WorkFormCard"
import VisibilityButton from "../VisibilityButton"

function WorkForm({ workExperience, setWorkExperience, isShown, toggleShow }) {
    return(
        <div className="work-form">
            <div>
                <h2>Professional Experience</h2>
                <VisibilityButton
                 isShown={isShown}
                 setToggle={toggleShow}
                 showIndex={3} />
            </div>
            {isShown && workExperience.map(work => 
                <WorkFormCard 
                key={work.id} 
                {...work}
                workExperience={workExperience}
                setWorkExperience={setWorkExperience} />
            )}
        </div>
    )
}

export default WorkForm