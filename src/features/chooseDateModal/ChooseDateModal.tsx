import styles from "./ChooseDateModal.module.css"

interface ChooseDateModalProps {
  month: number
  setMonth: (e: number) => void
  year: number
  setYear: (e: number) => void
}

const ChooseDateModal: React.FC<ChooseDateModalProps> = ({
  month,
  setMonth,
  year,
  setYear,
}) => {
  return (
    <div className={styles.root}>
      <select value={month} onChange={e => setMonth(Number(e.target.value))}>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {new Date(0, i).toLocaleString("en", { month: "long" })}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={year}
        onChange={e => setYear(Number(e.target.value))}
        min="1900"
        max="2100"
      />
    </div>
  )
}

export default ChooseDateModal
