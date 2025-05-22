import { months, weekdays, type MonthAbbr } from "../constants/calendarConsts";
import { generateDayCells } from "../utils/calendarUtils";

interface CalendarProps {
	year: number;
	month: number;
	setMonth: (month: number) => void;
}

const Calendar = ({ year, month, setMonth }: CalendarProps) => {
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
			<div className="border-1 grid grid-cols-3 col-span-full m-0.25 p-5">
				<img
					src="/src/assets/left-arrow.png"
					className="justify-self-start self-center max-w-10 hover:cursor-pointer hover:text-amber-300"
					onClick={() => setMonth(month - 1)}
				/>
				<div className="text-xl">
					{monthName} <br /> {year}
				</div>
				<img
					src="/src/assets/right-arrow.png"
					className="justify-self-end self-center max-w-10 hover:cursor-pointer hover:text-amber-300"
					onClick={() => setMonth(month + 1)}
				/>
			</div>
			{weekdayColumns}
			{dayCells}
		</div>
	);
};

export default Calendar;
