import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
	// const date = new Date();
	// console.log("date", date);
	// date.getMonth()
	const [month, setMonth] = useState(4);
	const [year, setYear] = useState(2025);

	return (
		<Calendar year={year} month={month} setMonth={setMonth} setYear={setYear} />
	);
}

export default App;
