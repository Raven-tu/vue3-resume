import { acceptHMRUpdate, defineStore } from 'pinia'

export const useResumestore = defineStore('resume', () => {
  const defaultData = {
    about: {
      name: 'Miguel Ángel Durán',
      role: 'Full Stack Developer con más de 15 años de experiencia & Creador de Contenido de Programación',
      location: 'el Prat de Llobregat, España',
      contack: 'miduga@gmail.com | +34 688888888 | https://linkedin.com/in/midudev',
    },
    experience: [
      {
        company: 'Parabol',
        link: 'https://parabol.co',
        location: 'Remote',
        start: 2021,
        end: 2024,
        position: 'Senior Full Stack Developer',
        description: 'Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL',
      },
      {
        company: 'Clevertech',
        link: 'https://clevertech.biz',
        location: 'Remote',
        start: 2015,
        end: 2021,
        position: 'Lead Android Developer → Full Stack Developer',
        description: 'Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL',
      },
      {
        company: 'Jojo Mobile',
        link: 'https://bsgroup.eu/',
        location: '',
        start: 2012,
        end: 2015,
        position: 'Android Developer → Lead Android Developer',
        description: 'Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress',
      },
      {
        company: 'Nokia Siemens Networks',
        link: 'https://www.nokia.com',
        location: '',
        start: 2010,
        end: 2012,
        position: 'C/C++ Developer',
        description: 'Creating and testing software for LTE base stations',
      },
    ],
    skills: [
      'JavaScript',
      'TypeScript',
      'React/Next.js/Remix',
      'Node.js',
      'GraphQL',
      'Relay',
      'WebRTC',
      'Docker',
      'Kubernetes',
      'MongoDB',
      'MySQL',
      'Redis',
      'Nginx',
      'AWS',
      'GCP',
      'Azure',
      'Git',
      'GitHub',
      'Vue',
      'Nuxt',
    ],
    education: [
      {
        name: 'Wrocław University of Technology',
        start_date: '2007',
        end_date: '2010',
        degree: 'Bachelor\'s Degree in Control systems engineering and Robotics',
      },
    ],
    projects: [
      {
        name: 'Consultly',
        link: 'https://consultly.com/',
        description: 'A platform to build and grow your online business',
        tags: ['Side Project', 'TypeScript', 'Next.js', 'Vite', 'GraphQL', 'WebRTC'],
      },
      {
        name: 'Monito',
        link: 'https://monito.dev/',
        description: 'Browser extension that records everything happening in a web application',
        tags: ['Side Project', 'TypeScript', 'Next.js', 'Browser Extension'],
      },
      {
        name: 'Jarocki.me',
        link: 'https://jarocki.me/',
        description: 'My personal website and blog. Built with Next.js and Notion API',
        tags: ['Side Project', 'Next.js', 'MDX'],
      },
    ],
  }
  const currentData = ref(defaultData)

  async function importData(data: typeof defaultData) {
    currentData.value = data
    await nextTick()
  }

  const resetData = () => {
    currentData.value = defaultData
  }

  return {
    currentData,
    importData,
    resetData,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useResumestore as any, import.meta.hot))
