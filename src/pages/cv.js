import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Experience from "../components/experience"
import { css } from "@emotion/core"
import workExperience from "../../content/cv/experience.json"
import projects from "../../content/cv/projects.json"
import quickFacts from "../../content/cv/quick_facts.json"
import education from "../../content/cv/education.json"
import skills from "../../content/cv/skills.json"

const Home = () => {
  return (
    <Layout>
      <div>
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
          {quickFacts.descriptions.map(description => {
            return (
              <div
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
          {education.descriptions.map(description => {
            return (
              <div
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
          {skills.descriptions.map(description => {
            return (
              <div
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
            padding-top: ${rhythm(1 / 2)};
            margin-bottom: ${rhythm(3 / 4)};
          `}
        >
          Experience
        </h3>
        {workExperience.experiences.map(experience => {
          return (
            <Experience
              topLeftContent={experience.title}
              topRightContent={experience.date_range}
              bottomLeftContent={
                experience.organization +
                (experience.job_type === "" ? "" : ` (${experience.job_type})`)
              }
              bottomRightContent={experience.location}
              listItems={experience.descriptions}
              tags={experience.technologies}
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
        {projects.experiences.map(experience => {
          return (
            <Experience
              topLeftContent={experience.title}
              topRightContent={experience.date_range}
              listItems={experience.descriptions}
              tags={experience.technologies}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Home
