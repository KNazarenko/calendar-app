import { useState } from "react"
import "./App.css"
import ChooseDateModal from "./features/chooseDateModal/ChooseDateModal"
import NamesOfDays from "./features/namesOfDays/NamesOfDays"
import CalendarGrid from "./features/calendarGrid/CalendarGrid"
import { showMonthLong } from "./utils/utils"

const App = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())

  const [showModal, setShowModal] = useState(true)

  const handleMouseOver = () => {
    setShowModal(true)
  }

  const handleMouseOut = () => {
    setShowModal(false)
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
        <div className="calendarTitle">
          {showMonthLong(year, month - 1)} {year}
        </div>
        <NamesOfDays />
        <CalendarGrid year={year} month={month} />
      </section>
    </div>
  )
}

export default App
