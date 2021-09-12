export interface Date {
  month: string
  year: number
}
export interface Dates {
  start: Date
  end: Date
}
export interface Education {
  degree: string
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
  company: string
  location: string
  dates: Dates
  description: string[]
  skills: string[]
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
