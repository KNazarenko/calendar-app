import styles from "./CalendarGrid.module.css"

interface CalendarGridProps {
  year: number
  month: number
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ year, month }) => {
  const daysInMonth = new Date(year, month, 0).getDate()
  const firstDay = new Date(year, month - 1, 1).getDay()

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarGrid}>
        {[...Array(firstDay).fill(null), ...Array(daysInMonth).keys()].map(
          (day, index) => (
            <div key={index} className={styles.calendarCell}>
              {day !== null && (
                <>
                  <span className={styles.calendarDay}>{day + 1}</span>
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
