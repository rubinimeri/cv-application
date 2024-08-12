const exampleData = {
    personalInfo: {
        name: 'Rubin Imeri',
        jobTitle: 'Fullstack Developer',
        number: '+389-72-769-233',
        email: 'rubinimeri6@gmail.com',
        location: 'Skopje, Macedonia'
    },
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, felis sit amet varius blandit, purus sapien sagittis diam, ac pharetra est augue a arcu. Morbi non pellentesque arcu. Sed faucibus, diam sed tempor eleifend, lacus ante blandit velit, et molestie quam urna ac lectus. Etiam aliquet nisl in elit mattis, quis imperdiet ipsum molestie. Integer eu vulputate ex. Nulla facilisi. Cras sem est, maximus interdum enim ac, eleifend dignissim ipsum. Phasellus efficitur velit sed rutrum suscipit.',
    skills: [
        {
            skill: 'Strong organizational and time-management skills',
            id: crypto.randomUUID()
        },
        {
            skill: 'Exceptional communication and interpersonal skills',
            id: crypto.randomUUID()
        },
        {
            skill: 'Ability to work independently and as part of a team',
            id: crypto.randomUUID()
        },
        {
            skill: 'Detail-oriented and ablte to handle multiple tasks simultaneously',
            id: crypto.randomUUID()
        },
    ],
    certifications: [
        {
            certification: 'Degree in computer science',
            id: crypto.randomUUID()
        },
        {
            certification: 'CS50 certification',
            id: crypto.randomUUID()
        }
    ],
    professionalExperience: [
        {
            jobTitle: 'Fullstack Developer',
            companyName: 'Example Company',
            startDate: '2018',
            endDate: '2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, felis sit amet varius blandit, purus sapien sagittis diam, ac pharetra est augue a arcu. Morbi non pellentesque arcu. Sed faucibus, diam sed tempor eleifend, lacus ante blandit velit, et molestie quam urna ac lectus.',
            id: crypto.randomUUID()
        },
        {
            jobTitle: 'Fullstack Engineer',
            companyName: 'Example Company 2.0',
            startDate: '2022',
            endDate: 'Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, felis sit amet varius blandit, purus sapien sagittis diam, ac pharetra est augue a arcu. Morbi non pellentesque arcu. Sed faucibus, diam sed tempor eleifend, lacus ante blandit velit, et molestie quam urna ac lectus.',
            id: crypto.randomUUID()
        }
    ],
    educationalExperience: [
        {
            schoolName: 'SHMQSH "Zef Lush Marku"',
            degreeName: 'Computer Science',
            startDate: '2020',
            endDate: '2024',
            id: crypto.randomUUID()
        },
        {
            schoolName: 'SHMQSH "Zef Lush Marku"',
            degreeName: 'Computer Science',
            startDate: '2020',
            endDate: '2024',
            id: crypto.randomUUID()
        }, 
    ]
}

export default exampleData;