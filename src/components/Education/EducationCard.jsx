function EducationCard({ schoolName, degreeName, startDate, endDate }) {
    return(
        <div className="education-card">
            <p className="school"><b>{schoolName}</b></p>
            <p className="degree">{degreeName}</p>
            <p><span>{startDate} - {endDate}</span></p>
        </div>
    )
}

export default EducationCard