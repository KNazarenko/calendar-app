import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type PublicHoliday = {
  countryCode: string
  name: string
  date: string
  localName: string
}

export const publicHolidayApiSlice = createApi({
  reducerPath: "publicHolidayApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://date.nager.at/api/v3",
  }),
  tagTypes: ["PublicHoliday"],
  endpoints: build => ({
    getPublicHolidayApiSlice: build.query<
      PublicHoliday[],
      { year: number; countryCode: string }
    >({
      query: ({ year, countryCode }) => ({
        url: `/PublicHolidays/${year}/${countryCode}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetPublicHolidayApiSliceQuery } = publicHolidayApiSlice
