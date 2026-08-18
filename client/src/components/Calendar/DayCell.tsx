import type { DayObj } from "../../types";

interface DayCellProps {
	date: DayObj;
	selected: boolean;
	isToday: boolean;
	clickDay: (day: number) => void;
}

const DayCell = ({ date, selected, isToday, clickDay }: DayCellProps) => {
	const clickHandler = () => {
		clickDay(date.day);
	};

	// Could move this inline using a template string + ternary operator, but I prefer the readablity this way
	const outerClass = selected
		? "border-1 m-0.25 hover:cursor-pointer text-blue-300"
		: "border-1 m-0.25 hover:cursor-pointer hover:text-amber-500";

	const innerClass = isToday
		? "border-1 p-1 bg-gray-200"
		: selected
		? "border-1 p-1 bg-orange-200"
		: "border-1 p-1";

	return (
		<div className={outerClass} onClick={clickHandler}>
			<div className={innerClass}>{date.day}</div>
		</div>
	);
};

export default DayCell;
