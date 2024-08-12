import { useState } from "react"
import exampleData from "./exampleData"
import Resume from "./components/Resume";
import PersonalDetailsForm from "./components/PersonalDetails/PersonalDetailsForm";

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
