import styles from "./MonthsButtons.module.css"

interface MonthsButtonsProps {
  handlePlusMonth: () => void
  handleMinesMonth: () => void
}

const MonthsButtons: React.FC<MonthsButtonsProps> = ({
  handleMinesMonth,
  handlePlusMonth,
}) => {
  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={handlePlusMonth}>
        Plus month
      </button>
      <button className={styles.button} onClick={handleMinesMonth}>
        Mines month
      </button>
    </div>
  )
}

export default MonthsButtons
