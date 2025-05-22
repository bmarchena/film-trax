import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
	const date = new Date();
	console.log("date", date);
	const [month, setMonth] = useState(date.getMonth());

	return <Calendar year={2025} month={month} setMonth={setMonth} />;
}

export default App;
