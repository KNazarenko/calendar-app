import styles from "./NamesOfDays.module.css"

const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const NamesOfDays = () => {
  return (
    <div className={styles.namesContainer}>
      <div className={styles.namesGrid}>
        {names.map((name, index) => (
          <div key={index} className={styles.nameCell}>
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NamesOfDays
