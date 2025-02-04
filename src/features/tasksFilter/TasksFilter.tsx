import styles from "./TasksFilter.module.css"

interface TasksFilterProps {
  searchQuery: string
  setSearchQuery: (e: string) => void
}

const TasksFilter: React.FC<TasksFilterProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className={styles.root}>
      <input
        type="text"
        placeholder="Поиск задач..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <span className={styles.cleanButton} onClick={e => setSearchQuery("")}>
        x
      </span>
    </div>
  )
}

export default TasksFilter
