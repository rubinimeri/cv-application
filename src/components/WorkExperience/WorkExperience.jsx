import WorkCard from "./WorkCard"

function WorkExperience({ workArray }) {
    return(
        <div className="work">
            <h2>PROFESSIONAL EXPERIENCE</h2>
            {workArray.map(work => 
            <WorkCard 
            key={work.id}
            jobTitle={work.jobTitle}
            companyName={work.companyName}
            startDate={work.startDate}
            endDate={work.endDate}
            description={work.description} />)}
        </div>
    )
}

export default WorkExperience