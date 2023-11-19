export type ProfileDataProps = {
  title: string
  items: {
    title: string
    subTitle: string
    date: string
    description: string
  }[]
}

export const profileData = [
  {
    title: 'Work Experience',
    items: [
      {
        title: 'Senior Designer at Font Awesome',
        subTitle: 'Remote',
        date: '2020 - Present',
        description:
          'Making icons & illustrations — sometimes writing about them too',
      },
      {
        title: 'Front-End Developer at Freelance',
        subTitle: 'Remote',
        date: '2016 - 2020',
        description: 'Working for clients around the world.',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: "Master's Degree in Computer Science",
        subTitle: 'University of Paris',
        date: '2015 - 2016',
        description: 'Specialized in web development.',
      },
      {
        title: "Bachelor's Degree in Computer Science",
        subTitle: 'University of Paris',
        date: '2012 - 2015',
        description: 'Specialized in web development.',
      },
    ],
  },
]
