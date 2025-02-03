export const showMonthShort = (year: number, month: number) =>
  new Date(year, month).toLocaleString("en", { month: "short" })

export const showMonthLong = (year: number, month: number) =>
  new Date(year, month).toLocaleString("en", { month: "long" })
