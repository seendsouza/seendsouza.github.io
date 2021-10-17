import yaml from "js-yaml"
import { readFile, writeFile } from "fs/promises"
import path from "path"
import { validateSchema, mapMonthToNum } from "./common"
import type {
  Dates,
  Education,
  Skills,
  Experience,
  Project,
  Resume,
  Entry,
  CVEntrySection,
  CVBulletSection,
} from "./types"

const datesToString = (dates: Dates): string => {
  const deltaMonths =
    12 * dates.end.year +
    mapMonthToNum(dates.end.month) -
    (12 * dates.start.year + mapMonthToNum(dates.start.month)) +
    1
  return `${dates.start.month.substring(0, 3)} ${dates.start.year} - ${
    dates.end.month === "Present" ? "Present" : dates.end.month.substring(0, 3)
  } ${
    dates.end.month === "Present" ? "" : dates.end.year
  } (${deltaMonths} months)`
}

const generateCVEntriesLaTeX = (cvEntries: CVEntrySection): string => {
  const entries = cvEntries.entries
    .map((entry: Entry) => {
      const items = entry.points
        .map((point: string) => {
          return `\t\t\t\\item{${point}}\n`
        })
        .join("")
      return (
        "\t\\cventry\n" +
        `\t{${entry.farLeft}}\n` +
        `\t{${entry.midLeft}}\n` +
        `\t{${entry.midRight}}\n` +
        `\t{${entry.farRight}}\n` +
        "\t{\n" +
        "\t\t\\begin{cvitems}\n" +
        items +
        "\t\t\\end{cvitems}\n" +
        "\t}\n"
      )
    })
    .join("")
  return (
    `\\cvsection{${cvEntries.sectionTitle}}\n` +
    "\\begin{cventries}\n" +
    entries +
    "\\end{cventries}\n"
  )
}

const generateCVBulletsLaTeX = (cvBullets: CVBulletSection): string => {
  const bullets = cvBullets.bullets
    .map((bullet: string) => {
      return `\t\\cvbullet{${bullet}}\n`
    })
    .join("")
  return (
    `\\cvsection{${cvBullets.sectionTitle}}\n` +
    "\\begin{cvbullets}\n" +
    "\t\\begin{cvbulletitems}\n" +
    bullets +
    "\t\\end{cvbulletitems}\n" +
    "\\end{cvbullets}\n"
  )
}

const generateEducationLaTeX = (educations: Education[]): string => {
  const entries: Entry[] = educations.map((education: Education) => {
    return {
      farLeft: education.degree,
      midLeft: `${education.institution} (${education.gpa})`,
      midRight: education.location,
      farRight: datesToString(education.dates),
      points: [education.relevantCourseWork.join(", ")],
    }
  })

  return generateCVEntriesLaTeX({ sectionTitle: "Education", entries: entries })
}

const generateSkillsLaTeX = (skills: Skills): string => {
  const languages =
    "\\emph{Programming Languages:} " + skills.languages.join(", ")
  const technologies = "\\emph{Technologies:} " + skills.technologies.join(", ")
  return generateCVBulletsLaTeX({
    sectionTitle: "Skills",
    bullets: [languages, technologies],
  })
}

const generateExperienceLaTeX = (experiences: Experience[]): string => {
  const entries: Entry[] = experiences.map(
    (experience: Experience): Entry => {
      const skills =
        "\\underline{Leveraged knowledge in:} " +
        experience.skills.skills.join(", ")
      const points = experience.description.points.filter((_, idx) => {
        return !experience.description.excludeList.includes(idx)
      })
      return {
        farLeft: experience.title,
        midLeft: experience.company,
        midRight: experience.location,
        farRight: datesToString(experience.dates),
        points: experience.skills.enabled
          ? [...points, skills]
          : experience.description.points,
      }
    }
  )
  return generateCVEntriesLaTeX({
    sectionTitle: "Work Experience",
    entries: entries,
  })
}

const generateProjectsLaTeX = (projects: Project[]): string => {
  const entries: Entry[] = projects.map(
    (project: Project): Entry => {
      return {
        farLeft: `\\href{${project.link}}{${project.name}}`,
        midLeft: project.skills.join(", "),
        midRight: "",
        farRight: datesToString(project.dates),
        points: project.description,
      }
    }
  )
  return generateCVEntriesLaTeX({ sectionTitle: "Projects", entries: entries })
}

const generateActivitiesLaTeX = (activities: string[]): string => {
  return generateCVBulletsLaTeX({
    sectionTitle: "Leadership and Activities",
    bullets: activities,
  })
}

const saveFile = (filename: string, contents: string): Promise<void> => {
  return writeFile(
    path.resolve(__dirname, "resume/generated/" + filename),
    contents
  )
}

const generateLaTeXResume = (doc: Resume): Promise<{}> => {
  const filesToCreate = {
    "education.tex": generateEducationLaTeX(doc.educations),
    "skills.tex": generateSkillsLaTeX(doc.skills),
    "experiences.tex": latexify(generateExperienceLaTeX(doc.experiences)),
    "projects.tex": generateProjectsLaTeX(doc.projects),
    "activities.tex": generateActivitiesLaTeX(doc.activities),
  }

  return Promise.all(
    Object.entries(filesToCreate).map(kv => saveFile(kv[0], kv[1]))
  )
}

const latexify = (docStr: string): string => {
  return docStr.replace("%", "\\%")
}

const main = async () => {
  try {
    const filepath = path.resolve(__dirname, "../content/cv/resume.yaml")
    const file = await readFile(filepath)
    const fileStr = latexify(file.toString())
    const doc = yaml.load(fileStr) as Resume
    const isValid = validateSchema(doc)
    if (isValid) {
      await generateLaTeXResume(doc)
    }
  } catch (e) {
    console.error(e)
  }
}

if (require.main === module) {
  main()
}
