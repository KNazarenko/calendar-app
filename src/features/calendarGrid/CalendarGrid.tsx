import { showMonthShort } from "../../utils/utils"
import styles from "./CalendarGrid.module.css"
import { useGetPublicHolidayApiSliceQuery } from "./publicHolidayApiSlice"

const countryCode = "UA"

interface CalendarGridProps {
  year: number
  month: number
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ year, month }) => {
  const { data, isError, isLoading, isSuccess } =
    useGetPublicHolidayApiSliceQuery({
      year: year,
      countryCode,
    })

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  const daysInMonth = new Date(year, month, 0).getDate()
  const firstDay = new Date(year, month - 1, 1).getDay()
  console.log(firstDay)

  const showDate = (day: number) => {
    if (day + 1 === 1) {
      return showMonthShort(year, month - 1) + " " + Number(day + 1)
    }
    if (day + 1 === daysInMonth) {
      return showMonthShort(year, month - 1) + " " + Number(day + 1)
    }
    return day + 1 + " "
  }

  if (isSuccess) {
    console.log(data)
    const getHoliday = (day: number) => {
      const dateStr = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
      return data.find(holiday => holiday.date === dateStr)?.localName || ""
    }
    return (
      <div className={styles.calendarContainer}>
        <div className={styles.calendarGrid}>
          {[...Array(firstDay).fill(null), ...Array(daysInMonth).keys()].map(
            (day, index) => (
              <div key={index} className={styles.calendarCell}>
                {day !== null && (
                  <>
                    <span className={styles.calendarDay}>{showDate(day)}</span>
                    <span className={styles.holidayName}>
                      {getHoliday(day + 1)}
                    </span>
                  </>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    )
  }

  return null
}

export default CalendarGrid
