import { useState } from "react"
import exampleData from "./exampleData"
import Resume from "./components/Resume";
import PersonalDetailsForm from "./components/PersonalDetails/PersonalDetailsForm";
import SummaryForm from "./components/Summary/SummaryForm";
import EducationForm from "./components/Education/EducationForm";
import WorkForm from "./components/WorkExperience/WorkForm";
import SkillsForm from "./components/Skills/SkillsForm";
import CertificationsForm from "./components/Certifications/CertificationsForm";

import './styles/App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [summary, setSummary] = useState(exampleData.summary);
  const [educationalExperience, setEducationalExperience] = useState(exampleData.educationalExperience);
  const [professionalExperience, setProfessionalExperience] = useState(exampleData.professionalExperience);
  const [skills, setSkills] = useState(exampleData.skills);
  const [certifications, setCertifications] = useState(exampleData.certifications);


  return (
    <main className="app">
      <div className="form-container">
        <PersonalDetailsForm 
         personalInfo={personalInfo}
         setPersonalInfo={setPersonalInfo} />
        <SummaryForm
         summary={summary}
         setSummary={setSummary} />
        <EducationForm 
         educationArray={educationalExperience}
         setEducationArray={setEducationalExperience} />
        <WorkForm 
         workExperience={professionalExperience}
         setWorkExperience={setProfessionalExperience} />
        <SkillsForm 
         skills={skills} 
         setSkills={setSkills} />
        <CertificationsForm
         certifications={certifications}
         setCertifications={setCertifications} />
      </div>
      <Resume 
      personalDetails={personalInfo}
      summary={summary}
      educationArray={educationalExperience}
      workArray={professionalExperience}
      skills={skills}
      certifications={certifications} />
    </main>
    
  )
}

export default App
