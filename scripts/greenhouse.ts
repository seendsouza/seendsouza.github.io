import { remote } from "webdriverio"
import yaml from "js-yaml"
import { readFile, writeFile } from "fs/promises"
import { validateSchema, mapMonthToNum } from "./common"
import type { Resume, Location } from "./types"
import path from "path"

class Education {
  browser: any
  index: number
  constructor(browser: any, index: number) {
    this.browser = browser
    this.index = index
  }
  get education() {
    return this.browser.$("#education_section").$$(".education")[this.index]
  }

  get schoolName() {
    return this.education.$$(".field")[0].$("input")
  }
  get degree() {
    return this.education.$$(".field")[1].$("input")
  }
  get discipline() {
    return this.education.$$(".field")[2].$("input")
  }
  get startMonth() {
    return this.education.$$(".field")[3].$$("input")[0]
  }
  get startYear() {
    return this.education.$$(".field")[3].$$("input")[1]
  }
  get endMonth() {
    return this.education.$$(".field")[4].$$("input")[0]
  }
  get endYear() {
    return this.education.$$(".field")[4].$$("input")[1]
  }
}

class Employment {
  browser: any
  index: number
  constructor(browser: any, index: number) {
    this.browser = browser
    this.index = index
  }
  get employment() {
    return this.browser.$("#employment_section").$$(".employment")[this.index]
  }
  get current() {
    return this.browser.$(`#employment_current_${this.index}`)
  }
  get companyName() {
    return this.browser.$(`#employment_company_name_${this.index}`)
  }
  get title() {
    return this.browser.$(`#employment_title_${this.index}`)
  }
  get startMonth() {
    return this.employment.$$(".field")[2].$$("input")[0]
  }
  get startYear() {
    return this.employment.$$(".field")[2].$$("input")[1]
  }
  get endMonth() {
    return this.employment.$$(".field")[3].$$("input")[0]
  }
  get endYear() {
    return this.employment.$$(".field")[3].$$("input")[1]
  }
}

class Page {
  browser: any
  constructor(browser: any) {
    this.browser = browser
  }

  async open(path: string) {
    await this.browser.url(path)
  }

  get firstName() {
    return this.browser.$("#first_name")
  }
  get lastName() {
    return this.browser.$("#last_name")
  }
  get email() {
    return this.browser.$("#email")
  }
  get phone() {
    return this.browser.$("#phone")
  }
  get location() {
    return this.browser.$("#job_application_location")
  }

  getEducation(index: number) {
    return new Education(this.browser, index)
  }

  getEmployment(index: number) {
    return new Employment(this.browser, index)
  }
}
const waitForSelectAndClick = async (browser: any, expectedText: string) => {
  await browser.waitUntil(async () => {
    return (await browser.$(".select2-match").getText()) === expectedText
  })
  await browser.$(".select2-match").click()
}
const monthToDigits = (month: string) => {
  const idx = mapMonthToNum(month)
  const strIdx = (idx + 1).toString()
  return strIdx.length == 2 ? strIdx : "0" + strIdx
}
const fillInEmployment = async (page: Page, resume: Resume) => {
  for (let i = 0; i < resume.experiences.length; i++) {
    const employmentFragment = page.getEmployment(i)
    const experience = resume.experiences[i]
    await employmentFragment.companyName.setValue(experience.company)

    await employmentFragment.title.setValue(experience.title)

    await employmentFragment.startMonth.setValue(
      monthToDigits(experience.dates.start.month)
    )
    await employmentFragment.startYear.setValue(experience.dates.start.year)
    await employmentFragment.endMonth.setValue(
      monthToDigits(experience.dates.end.month)
    )
    await employmentFragment.endYear.setValue(experience.dates.end.year)
    if (experience.isCurrent) {
      await employmentFragment.current.click()
    }

    if (i < resume.experiences.length - 1) {
      await page.browser.$("#add_employment").click()
    }
  }
}

const fillInEducation = async (page: Page, resume: Resume) => {
  for (let i = 0; i < resume.educations.length; i++) {
    const educationFragment = page.getEducation(i)
    const education = resume.educations[i]
    await educationFragment.schoolName.setValue(education.institution)
    await waitForSelectAndClick(page.browser, education.institution)

    await educationFragment.education.$$(".field")[1].$("a").click()
    await educationFragment.degree.keys(education.degreeType)
    await waitForSelectAndClick(page.browser, education.degreeType)

    await educationFragment.discipline.setValue(education.discipline)
    await waitForSelectAndClick(page.browser, education.discipline)

    await educationFragment.startMonth.setValue(
      monthToDigits(education.dates.start.month)
    )
    await educationFragment.startYear.setValue(education.dates.start.year)
    await educationFragment.endMonth.setValue(
      monthToDigits(education.dates.end.month)
    )
    await educationFragment.endYear.setValue(education.dates.end.year)

    if (i < resume.educations.length - 1) {
      await page.browser.$("#add_education").click()
    }
  }
}

const locationToString = (location: Location) => {
  return `${location.city}, ${location.province}, ${location.country}`
}
const fillInBasicInfo = async (page: Page, resume: Resume) => {
  await page.firstName.setValue(resume.metadata.firstName)
  await page.lastName.setValue(resume.metadata.lastName)
  await page.email.setValue(resume.metadata.email)
  await page.phone.setValue(resume.metadata.phone)
  await page.location.setValue(locationToString(resume.metadata.location))
}

const main = async () => {
  let doc: Resume
  try {
    const filepath = path.resolve(__dirname, "../content/cv/resume.yaml")
    const file = await readFile(filepath)
    doc = yaml.load(file.toString()) as Resume
  } catch (e) {
    console.error(e)
  }

  const browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  })

  await browser.url(process.env.JOB_URL)
  const page = new Page(browser)
  await fillInBasicInfo(page, doc)
  await fillInEducation(page, doc)
  await fillInEmployment(page, doc)
}

main()
