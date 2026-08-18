import { useEffect, useState } from "react";
import { monthNames, weekdayNames } from "../../constants/calendar";
import DayCell from "./DayCell";
import type { DayObj, MonthYear } from "../../types";
import { getTodayObj, getMonthGrid } from "../../utils";

interface CalendarProps {
	selectedDate: DayObj;
	setSelectedDate: (day: DayObj) => void;
}

function isSameDay(a: DayObj, b: DayObj) {
	return a.day === b.day && a.month === b.month && a.year === b.year;
}

const Calendar = ({ selectedDate, setSelectedDate }: CalendarProps) => {
	const today = getTodayObj();

	const [displayDate, setDisplayDate] = useState<MonthYear>({
		month: today.month,
		year: today.year,
	});

	useEffect(() => {
		setSelectedDate(today);
	}, []);

	const monthName = monthNames[displayDate.month - 1];

	const weekdayHeader = weekdayNames.map((dayName) => {
		return (
			<div className="border-1 m-0.25" key={dayName}>
				{dayName.toUpperCase()}
			</div>
		);
	});

	function incrementMonth(increment: boolean) {
		setDisplayDate(({ month, year }) => {
			if (increment) {
				month++;
				if (month > 12) {
					month = 1;
					year++;
				}
			} else {
				month--;
				if (month <= 0) {
					month = 12;
					year--;
				}
			}
			return { month, year };
		});
	}

	function incrementYear(increment: boolean) {
		setDisplayDate(({ month, year }) => ({
			month,
			year: increment ? year + 1 : year - 1,
		}));
	}

	function clickDay(day: number) {
		setSelectedDate({ ...displayDate, day });
	}

	const { offset, padding, days } = getMonthGrid(
		displayDate.month,
		displayDate.year,
	);

	const dayCells = [
		...Array.from({ length: offset }, (_, i) => (
			<div className="border-1 m-0.25" key={`offset-${i}`} />
		)),
		...days.map((cellDate) => (
			<DayCell
				date={cellDate}
				isToday={isSameDay(today, cellDate)}
				selected={isSameDay(selectedDate, cellDate)}
				clickDay={clickDay}
				key={`${cellDate.year}-${cellDate.month}-${cellDate.day}`}
			/>
		)),
		...Array.from({ length: padding }, (_, i) => (
			<div className="border-1 m-0.25" key={`padding-${i}`} />
		)),
	];

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
			{weekdayHeader}
			{dayCells}
		</div>
	);
};

export default Calendar;
