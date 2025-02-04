import { useState } from "react"
import { dateStrYMD, dateTodayYMD, showMonthShort } from "../../utils/utils"
import className from "classnames"
import styles from "./CalendarGrid.module.css"
import { useGetPublicHolidayApiSliceQuery } from "./publicHolidayApiSlice"

const countryCode = "UA"

interface ITask {
  task: string
  taskDate: string
}

const mockTasks: { [key: string]: ITask[] } = {
  "2025-02-05": [
    { task: "Clean a car", taskDate: "2025-02-05" },
    { task: "Buy some carrot", taskDate: "2025-02-05" },
  ],
  "2025-02-03": [
    { task: "Go shopping", taskDate: "2025-02-03" },
    { task: "Play tennis", taskDate: "2025-02-03" },
  ],
  "2025-02-27": [
    { task: "Go swimming", taskDate: "2025-02-03" },
    { task: "Repair a boat", taskDate: "2025-02-03" },
    { task: "Buy some ice", taskDate: "2025-02-03" },
  ],
  "2025-03-03": [
    { task: "Buy some milk", taskDate: "2025-02-03" },
    { task: "Go running", taskDate: "2025-02-03" },
    { task: "Repair a car", taskDate: "2025-02-03" },
  ],
}

interface CalendarGridProps {
  year: number
  month: number
  searchQuery: string
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  year,
  month,
  searchQuery,
}) => {
  const [tasks, setTasks] = useState<{ [key: string]: ITask[] }>(mockTasks)
  const [draggedTask, setDraggedTask] = useState<{
    draggedTaskDate: string
    task: ITask
  } | null>(null)
  const isToday = (day: number): boolean =>
    dateTodayYMD() === dateStrYMD(year, month, day)

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

  const showDate = (day: number) => {
    if (day + 1 === 1) {
      return showMonthShort(year, month - 1) + " " + Number(day + 1)
    }
    if (day + 1 === daysInMonth) {
      return showMonthShort(year, month - 1) + " " + Number(day + 1)
    }
    return day + 1 + " "
  }

  const addTask = (day: number) => {
    const task = prompt("Введите задачу:")
    const taskDate = dateStrYMD(year, month, day)

    if (task && taskDate) {
      setTasks(prev => ({
        ...prev,
        [taskDate]: [...(prev[taskDate] || []), { task, taskDate }],
      }))
    }
  }

  const handleDragStart = (date: string, task: ITask) => {
    setDraggedTask({ draggedTaskDate: date, task })
  }

  const handleDrop = (date: string) => {
    if (draggedTask) {
      setTasks(prev => {
        const newTasks = { ...prev }
        newTasks[draggedTask.draggedTaskDate] = newTasks[
          draggedTask.draggedTaskDate
        ].filter(t => t !== draggedTask.task)
        newTasks[date] = [...(newTasks[date] || []), draggedTask.task]
        return newTasks
      })
      setDraggedTask(null)
    }
  }

  if (isSuccess) {
    const getHoliday = (day: number) => {
      const dateStr = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
      return data.find(holiday => holiday.date === dateStr)?.localName || ""
    }

    return (
      <div className={styles.calendarContainer}>
        <div className={styles.calendarGrid}>
          {[...Array(firstDay).fill(null), ...Array(daysInMonth).keys()].map(
            (day, index) => (
              <div
                key={index}
                className={className(styles.calendarCell, {
                  [styles.calendarCellToday]: isToday(day + 1),
                })}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop(dateStrYMD(year, month, day + 1))}
              >
                {day !== null && (
                  <>
                    <div className={styles.cellHeader}>
                      <span className={styles.calendarDay}>
                        {showDate(day)}
                      </span>
                      <button
                        className={styles.addTaskButton}
                        onClick={() => addTask(day + 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className={styles.holidayName}>
                      {getHoliday(day + 1)}
                    </span>
                    <ul className={styles.taskList}>
                      {(tasks[dateStrYMD(year, month, day + 1)] || [])
                        .filter(task =>
                          task.task
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                        )
                        .map((task, i) => (
                          <li
                            key={i}
                            className={styles.taskItem}
                            draggable
                            onDragStart={() =>
                              handleDragStart(
                                dateStrYMD(year, month, day + 1),
                                task,
                              )
                            }
                          >
                            - {task.task}
                          </li>
                        ))}
                    </ul>
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
