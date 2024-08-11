function WorkCard({ jobTitle, companyName, startDate, endDate, description }) {
    return(
        <div className="work-card">
            <p><b>{jobTitle}</b></p>
            <p>{companyName} | {startDate} - {endDate}</p>
            <p>{description}</p>
        </div>
    )
}

export default WorkCard