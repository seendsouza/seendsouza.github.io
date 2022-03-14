export interface Date {
  month: string
  year: number
}
export interface Dates {
  start: Date
  end: Date
}
export interface Location {
  city: string
  province: string
  country: string
}
export interface Metadata {
  firstName: string
  lastName: string
  email: string
  phone: number
  location: Location
}
export interface Education {
  degree: string
  degreeType: string
  discipline: string
  institution: string
  gpa: string
  location: string
  dates: Dates
  relevantCourseWork: string[]
}
export interface Skills {
  languages: string[]
  technologies: string[]
}
export interface Experience {
  title: string
  officialTitle: string
  exclude: boolean
  company: string
  isCurrent: boolean
  location: string
  dates: Dates
  description: {
    excludeList: number[]
    points: string[]
  }
  skills: {
    enabled: true
    skills: string[]
  }
}

export interface Project {
  name: string
  moduleName: string
  link: string
  skills: string[]
  dates: Dates
  description: string[]
}

export interface Resume {
  metadata: Metadata
  educations: Education[]
  skills: Skills
  experiences: Experience[]
  projects: Project[]
  activities: string[]
}

export interface Entry {
  farLeft: string
  midLeft: string
  midRight: string
  farRight: string
  points: string[]
}

export interface CVEntrySection {
  sectionTitle: string
  entries: Entry[]
}

export interface CVBulletSection {
  sectionTitle: string
  bullets: string[]
}

export interface ResumeOptions {
  isOfficial: boolean
}
