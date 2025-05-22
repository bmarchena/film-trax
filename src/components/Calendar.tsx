import { months, weekdays, type MonthAbbr } from "../constants/calendarConsts";
import DayCell from "./DayCell";

interface CalendarProps {
	year: number;
	month: number;
}

const Calendar = ({ year, month }: CalendarProps) => {
	const date = new Date(year, month);

	const weekdayColumns = Object.keys(weekdays).map((weekday) => {
		return (
			<div className="border-1 m-0.25" key={weekday}>
				{weekday.toUpperCase()}
			</div>
		);
	});

	const monthName = months[Object.keys(months)[month] as MonthAbbr];

	const generateDayCells = () => {
		const offset = date.getUTCDay();
		let dayCells = [];

		for (let i = 0; i < offset; i++) {
			dayCells.push(<div className="border-1 m-0.25" key={`offset-${i}`} />);
		}

		const endOfMonth = date;
		endOfMonth.setUTCMonth(month + 1);
		endOfMonth.setDate(0);

		const daysOfMonth = endOfMonth.getDate();

		for (let i = 0; i < daysOfMonth; i++) {
			dayCells.push(<DayCell day={i} key={`${month}-${i}`} />);
		}

		const padding = 6 - endOfMonth.getDay();

		for (let i = 0; i < padding; i++) {
			dayCells.push(<div className="border-1 m-0.25" key={`padding-${i}`} />);
		}

		return dayCells;
	};

	const dayCells = generateDayCells();

	return (
		<div className="grid grid-cols-7 border-1">
			<span className="border-1 col-span-full m-0.25">
				{monthName} <br /> {year}
			</span>
			{weekdayColumns}
			{dayCells}
		</div>
	);
};

export default Calendar;
