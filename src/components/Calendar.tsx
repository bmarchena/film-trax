import { months, weekdays, type MonthAbbr } from "../constants/calendarConsts";
import { generateDayCells } from "../utils/calendarUtils";

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

	const dayCells = generateDayCells(date, month);

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
