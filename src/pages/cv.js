import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Experience from "../components/experience"
import { css } from "@emotion/react"
import resume from "../../content/cv/resume.yaml"

const CV = () => {
  const mapMonthToNum = month => {
    const monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    if (month === "Present") {
      const d = new Date()
      return mapMonthToNum(monthArr[d.getMonth()])
    }
    const idx = monthArr.indexOf(month)
    if (idx >= 0) {
      return idx
    } else {
      throw new Error(`Invalid month ${month}`)
    }
  }

  const datesToString = dates => {
    const deltaMonths =
      12 * dates.end.year +
      mapMonthToNum(dates.end.month) -
      (12 * dates.start.year + mapMonthToNum(dates.start.month)) +
      1
    return `${dates.start.month.substring(0, 3)} ${dates.start.year} - ${
      dates.end.month === "Present"
        ? "Present"
        : dates.end.month.substring(0, 3)
    } ${
      dates.end.month === "Present" ? "" : dates.end.year
    } (${deltaMonths} months)`
  }

  return (
    <Layout>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <h1
          css={css`
            display: inline-block;
          `}
        >
          Sean D'Souza | CV
        </h1>
        <h3
          css={css`
            padding-top: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(3 / 4)};
          `}
        >
          Quick Facts
        </h3>
        <div
          css={css`
            border-style: solid;
            border-radius: ${rhythm(1 / 2)};
            padding: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(1)};
          `}
        >
          {resume.activities.map(description => {
            return (
              <div
                key={description}
                css={css`
                  margin-bottom: ${rhythm(1 / 2)};
                `}
              >
                • {description}{" "}
              </div>
            )
          })}
        </div>
        <h3
          css={css`
            margin-bottom: ${rhythm(3 / 4)};
            padding-top: ${rhythm(1 / 2)};
          `}
        >
          Education
        </h3>

        <div
          css={css`
            border-style: solid;
            border-radius: ${rhythm(1 / 2)};
            padding: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(1)};
          `}
        >
          {resume.educations.map(education => {
            const {
              degree,
              gpa,
              institution,
              dates,
              relevantCourseWork,
            } = education
            return (
              <div key={education.institution}>
                <div
                  css={css`
                    margin-bottom: ${rhythm(1 / 2)};
                  `}
                >
                  •{" "}
                  {degree +
                    " @ " +
                    institution +
                    " (" +
                    datesToString(dates) +
                    ")"}{" "}
                </div>
                <div
                  css={css`
                    margin-bottom: ${rhythm(1 / 2)};
                  `}
                >
                  • {"GPA: " + gpa}
                </div>
                <div
                  css={css`
                    margin-bottom: ${rhythm(1 / 2)};
                  `}
                >
                  • {"Relevant Coursework: " + relevantCourseWork.join(", ")}
                </div>
              </div>
            )
          })}
        </div>
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
            margin-bottom: ${rhythm(3 / 4)};
            padding-top: ${rhythm(1 / 2)};
          `}
        >
          Skills
        </h3>
        <div
          css={css`
            border-style: solid;
            border-radius: ${rhythm(1 / 2)};
            padding: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(1)};
          `}
        >
          {resume.skills.languages.map(language => {
            return (
              <div
                key={language}
                css={css`
                  margin-bottom: ${rhythm(1 / 2)};
                `}
              >
                • {language}{" "}
              </div>
            )
          })}
        </div>

        <div
          css={css`
            border-style: solid;
            border-radius: ${rhythm(1 / 2)};
            padding: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(1)};
          `}
        >
          {resume.skills.technologies.map(technology => {
            return (
              <div
                key={technology}
                css={css`
                  margin-bottom: ${rhythm(1 / 2)};
                `}
              >
                • {technology}{" "}
              </div>
            )
          })}
        </div>
        <h3
          css={css`
            padding-top: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(3 / 4)};
          `}
        >
          Experience
        </h3>
        {resume.experiences.map(experience => {
          return (
            <Experience
              key={experience.title + experience.company}
              topLeftContent={experience.title}
              topRightContent={datesToString(experience.dates)}
              bottomLeftContent={
                experience.company +
                (experience.jobType === "" ? "" : ` (${experience.jobType})`)
              }
              bottomRightContent={experience.location}
              listItems={experience.description.points}
              tags={experience.skills.skills}
            />
          )
        })}

        <h3
          css={css`
            margin-bottom: ${rhythm(3 / 4)};
            padding-top: ${rhythm(1 / 2)};
          `}
        >
          Projects
        </h3>
        {resume.projects.map(project => {
          return (
            <Experience
              key={project.name}
              topLeftContent={project.name}
              topRightContent={datesToString(project.dates)}
              listItems={project.description}
              tags={project.skills}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default CV
