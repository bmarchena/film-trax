import { useState } from "react";
import { monthsArr, weekdays } from "../constants/calendar";
import DayCell from "./DayCell";
import type { DayObj } from "../types";

interface CalendarProps {
	today: DayObj;
	selectedDate: DayObj;
	setSelectedDate: (day: DayObj) => void;
}

const Calendar = ({ today, selectedDate, setSelectedDate }: CalendarProps) => {
	const [displayDate, setDisplayDate] = useState({
		month: selectedDate.month,
		year: selectedDate.year,
	});

	const monthName = monthsArr[displayDate.month - 1];

	const weekdayColumns = Object.keys(weekdays).map((weekday) => {
		return (
			<div className="border-1 m-0.25" key={weekday}>
				{weekday.toUpperCase()}
			</div>
		);
	});

	function incrementMonth(increment: boolean) {
		const date = { ...displayDate };

		if (increment) {
			date.month++;
			if (date.month > 12) {
				date.month = 1;
				date.year++;
			}
		} else {
			date.month--;
			if (date.month <= 0) {
				date.month = 12;
				date.year--;
			}
		}

		setDisplayDate(date);
	}

	function incrementYear(increment: boolean) {
		const date = { ...displayDate };

		if (increment) date.year++;
		else date.year--;

		setDisplayDate(date);
	}

	function clickDay(day: number) {
		const date = { ...displayDate, day: day };
		date.day = day;
		setSelectedDate(date);
	}

	function generateDayCells() {
		const startOfMonth = new Date(displayDate.year, displayDate.month - 1);
		const endOfMonth = new Date(displayDate.year, displayDate.month, 0);
		const offset = startOfMonth.getUTCDay();

		const dayCells = [];

		const daysInMonth = endOfMonth.getDate();

		for (let i = 0; i < offset; i++) {
			dayCells.push(<div className="border-1 m-0.25" key={`offset-${i}`} />);
		}

		for (let i = 0; i < daysInMonth; i++) {
			const cellDate = {
				month: displayDate.month,
				day: i,
				year: displayDate.year,
			};

			const selected =
				selectedDate.day - 1 === cellDate.day &&
				selectedDate.month === cellDate.month &&
				selectedDate.year === cellDate.year;

			const isToday =
				today.day - 1 === cellDate.day &&
				today.month === cellDate.month &&
				today.year === cellDate.year;

			dayCells.push(
				<DayCell
					date={cellDate}
					isToday={isToday}
					selected={selected}
					clickDay={clickDay}
					key={`${displayDate.month}-${i}`}
				/>
			);
		}

		const padding = 6 - endOfMonth.getDay();

		for (let i = 0; i < padding; i++) {
			dayCells.push(<div className="border-1 m-0.25" key={`padding-${i}`} />);
		}

		return dayCells;
	}

	const dayCells = generateDayCells();

	return (
		<div className="grid grid-cols-7 border-1">
			<div className="border-1 grid grid-cols-3 col-span-full m-0.25 p-5">
				<div className="flex flex-col">
					<img
						src="/src/assets/arrow-left.png"
						className="self-start max-w-10 hover:cursor-pointer hover:text-amber-300"
						onClick={() => incrementMonth(false)}
					/>
					<img
						src="/src/assets/double-arrow-left.png"
						className="self-start max-w-9 hover:cursor-pointer hover:text-amber-300"
						onClick={() => incrementYear(false)}
					/>
				</div>
				<div className="flex flex-col text-xl justify-center">
					{monthName} <br /> {displayDate.year}
				</div>
				<div className="flex flex-col">
					<img
						src="/src/assets/arrow-right.png"
						className="self-end max-w-10 hover:cursor-pointer hover:text-amber-300"
						onClick={() => incrementMonth(true)}
					/>
					<img
						src="/src/assets/double-arrow-right.png"
						className="self-end max-w-9 hover:cursor-pointer hover:text-amber-300"
						onClick={() => incrementYear(true)}
					/>
				</div>
			</div>
			{weekdayColumns}
			{dayCells}
		</div>
	);
};

export default Calendar;
