import { useState } from "react"
import "./App.css"
import ChooseDateModal from "./features/chooseDateModal/ChooseDateModal"
import NamesOfDays from "./features/namesOfDays/NamesOfDays"
import CalendarGrid from "./features/calendarGrid/CalendarGrid"
import { showMonthLong } from "./utils/utils"
import MonthsButtons from "./features/monthsButtons/MonthsButtons"

const App = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())

  const [showModal, setShowModal] = useState(false)

  const handleMouseOver = () => {
    setShowModal(true)
  }

  const handleMouseOut = () => {
    setShowModal(false)
  }

  const handlePlusMonth = () => {
    if (month === 12) {
      console.log("last month")
      setYear(year + 1)
      setMonth(1)
    } else {
      setMonth(month + 1)
    }
  }

  const handleMinesMonth = () => {
    if (month === 1) {
      console.log("first month")
      setYear(year - 1)
      setMonth(12)
    } else {
      setMonth(month - 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Some icons</div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          Calendar
        </div>
      </header>
      {showModal && (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <ChooseDateModal
            year={year}
            month={month}
            setMonth={setMonth}
            setYear={setYear}
          />
        </div>
      )}
      <section>
        <div className="container">
          <MonthsButtons
            handlePlusMonth={handlePlusMonth}
            handleMinesMonth={handleMinesMonth}
          />
          <div className="calendarTitle">
            {showMonthLong(year, month - 1)} {year}
          </div>
          <MonthsButtons
            handlePlusMonth={handlePlusMonth}
            handleMinesMonth={handleMinesMonth}
          />
        </div>
        <NamesOfDays />
        <CalendarGrid year={year} month={month} />
      </section>
    </div>
  )
}

export default App
