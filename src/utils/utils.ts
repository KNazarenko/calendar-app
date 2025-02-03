export const showMonthShort = (year: number, month: number) =>
  new Date(year, month).toLocaleString("en", { month: "short" })

export const showMonthLong = (year: number, month: number) =>
  new Date(year, month).toLocaleString("en", { month: "long" })

export const dateStrYMD = (year: number, month: number, day: number) =>
  `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
