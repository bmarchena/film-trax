import { months, type AbbrMonth } from "../constants/months";
import { generateDayCells } from "../utils/dates";

interface CalendarProps {
	year: number;
	month: AbbrMonth;
}

const Calendar = ({ year, month }: CalendarProps) => {
	// const date = new Date(2025, 0);
	// console.log("date", date);
	// console.log("jan", days["jan"]);

	console.log("days", generateDayCells(month));

	return (
		<div className="grid grid-cols-7 border-1">
			<span className="border-1 col-span-full m-0.25">
				{months[month]} - {year}
			</span>
			<div className="border-1 m-0.25">Mon</div>
			<div className="border-1 m-0.25">Tue</div>
			<div className="border-1 m-0.25">Wed</div>
			<div className="border-1 m-0.25">Thu</div>
			<div className="border-1 m-0.25">Fri</div>
			<div className="border-1 m-0.25">Sat</div>
			<div className="border-1 m-0.25">Sun</div>
			{generateDayCells(month)}
		</div>
	);
};

export default Calendar;
