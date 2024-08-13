import WorkFormCard from "./WorkFormCard"

function WorkForm({ workExperience, setWorkExperience }) {
    return(
        <div className="work-form">
            <h2>Professional Experience</h2>
            {workExperience.map(work => 
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