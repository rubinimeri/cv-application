import WorkFormCard from "./WorkFormCard"

function WorkForm({ workExperience, setWorkExperience }) {
    return(
        <form action="" className="work-form">
            <h2>Professional Experience</h2>
            {workExperience.map(work => 
                <WorkFormCard 
                key={work.id} 
                {...work}
                workExperience={workExperience}
                setWorkExperience={setWorkExperience} />
            )}
        </form>
    )
}

export default WorkForm