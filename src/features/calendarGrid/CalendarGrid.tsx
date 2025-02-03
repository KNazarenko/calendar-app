import { showMonthShort } from "../../utils/utils"
import styles from "./CalendarGrid.module.css"

interface CalendarGridProps {
  year: number
  month: number
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ year, month }) => {
  const daysInMonth = new Date(year, month, 0).getDate()
  const firstDay = new Date(year, month - 1, 1).getDay()

  const showDate = (day: number) => {
    if (day + 1 === 1) {
      return showMonthShort(year, month - 1) + " " + Number(day + 1)
    }
    if (day + 1 === daysInMonth) {
      return showMonthShort(year, month - 1) + " " + Number(day + 1)
    }
    return day + 1 + " "
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
                </>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default CalendarGrid
