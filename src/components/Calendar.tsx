import { useState } from "react";
import { monthsArr, weekdays } from "../constants/calendarConsts";
import DayCell from "./DayCell";

const Calendar = () => {
	const today = new Date()
		.toLocaleDateString()
		.split("/")
		.map((e) => Number(e));

	const [date, setDate] = useState(today);

	const [selectedDay, setSelectedDay] = useState(today);

	const monthName = monthsArr[date[0] - 1];

	const weekdayColumns = Object.keys(weekdays).map((weekday) => {
		return (
			<div className="border-1 m-0.25" key={weekday}>
				{weekday.toUpperCase()}
			</div>
		);
	});

	function incrementMonth(increment: boolean) {
		const newDate = [...date];

		if (increment) {
			newDate[0] = newDate[0] + 1;
			if (newDate[0] > 12) {
				newDate[0] = 1;
				newDate[2] = newDate[2] + 1;
			}
		} else {
			newDate[0] = newDate[0] - 1;
			if (newDate[0] < 0) {
				newDate[0] = 12;
				newDate[2] = newDate[2] - 1;
			}
		}

		setDate([...newDate]);
	}

	function incrementYear(increment: boolean) {
		const newDate = [...date];
		if (increment) newDate[2] = newDate[2] + 1;
		else newDate[2] = newDate[2] - 1;
		setDate([...newDate]);
	}

	function selectDay(day: number) {
		const newDate = [...date];
		newDate[1] = day;
		setSelectedDay([...newDate]);
	}

	function generateDayCells() {
		const startOfMonth = new Date(date[2], date[0] - 1);
		const endOfMonth = new Date(date[2], date[0], 0);

		const offset = startOfMonth.getUTCDay();
		const dayCells = [];

		for (let i = 0; i < offset; i++) {
			dayCells.push(<div className="border-1 m-0.25" key={`offset-${i}`} />);
		}

		const daysInMonth = endOfMonth.getDate();

		for (let i = 0; i < daysInMonth; i++) {
			const selected =
				selectedDay[1] - 1 === i &&
				selectedDay[0] === date[0] &&
				selectedDay[2] === date[2];

			dayCells.push(
				<DayCell
					day={i}
					selected={selected}
					selectDay={selectDay}
					key={`${endOfMonth.getMonth()}-${i}`}
				/>
			);
		}

		const padding = 6 - endOfMonth.getDay();

		for (let i = 0; i < padding; i++) {
			dayCells.push(<div className="border-1 m-0.25" key={`padding-${i}`} />);
		}

		return dayCells;
	}

	return (
		<>
			<div className="grid grid-cols-7 border-1">
				<div className="border-1 grid grid-cols-3 col-span-full m-0.25 p-5">
					<div>
						<img
							src="/src/assets/arrow-left.png"
							className="justify-self-start self-center max-w-10 hover:cursor-pointer hover:text-amber-300"
							onClick={() => incrementMonth(false)}
						/>
						<img
							src="/src/assets/double-arrow-left.png"
							className="justify-self-start self-center max-w-9 hover:cursor-pointer hover:text-amber-300"
							onClick={() => incrementYear(false)}
						/>
					</div>
					<div className="text-xl">
						{monthName} <br /> {date[2]}
					</div>
					<div>
						<img
							src="/src/assets/arrow-right.png"
							className="justify-self-end self-center max-w-10 hover:cursor-pointer hover:text-amber-300"
							onClick={() => incrementMonth(true)}
						/>
						<img
							src="/src/assets/double-arrow-right.png"
							className="justify-self-end self-center max-w-9 hover:cursor-pointer hover:text-amber-300"
							onClick={() => incrementYear(true)}
						/>
					</div>
				</div>
				{weekdayColumns}
				{generateDayCells()}
			</div>
			<button onClick={() => console.log(`Date is ${date}`)}>
				Click for Date
			</button>
		</>
	);
};

export default Calendar;
