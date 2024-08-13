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

  const [activeIndex, setActiveIndex] = useState(0);

  function toggleActiveIndex(index) {
    activeIndex === index ? setActiveIndex(0) : setActiveIndex(index)
  }

  const summaryProps = {
    summary: summary,
    setSummary: setSummary,
    isShown: activeIndex === 1,
    toggleShow: toggleActiveIndex
  }

  const educationProps = {
    educationArray: educationalExperience,
    setEducationArray: setEducationalExperience,
    isShown: activeIndex === 2,
    toggleShow: toggleActiveIndex
  }

  const workProps = {
    workExperience: professionalExperience,
    setWorkExperience: setProfessionalExperience,
    isShown: activeIndex === 3,
    toggleShow: toggleActiveIndex
  }

  const skillProps = {
    skills,
    setSkills,
    isShown: activeIndex === 4,
    toggleShow: toggleActiveIndex
  }

  const certificationProps = {
    certifications,
    setCertifications,
    isShown: activeIndex === 5,
    toggleShow: toggleActiveIndex
  }

  return (
    <main className="app">
      <div className="form-container">
        <PersonalDetailsForm 
         personalInfo={personalInfo}
         setPersonalInfo={setPersonalInfo} />
        <SummaryForm {...summaryProps} />
        <EducationForm {...educationProps} />
        <WorkForm {...workProps} />
        <SkillsForm {...skillProps} />
        <CertificationsForm {...certificationProps} />
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
