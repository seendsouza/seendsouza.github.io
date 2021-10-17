import type { Resume } from "./types"
export const validateSchema = (doc: Resume): boolean => {
  // TODO: Validate against a JSON Schema Draft 07
  return true
}
export const mapMonthToNum = (month: string) => {
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
