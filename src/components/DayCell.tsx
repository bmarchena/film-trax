import { useState } from "react";

interface DayCellProps {
	day: number;
	selected?: boolean;
	selectDay: (day: number) => void;
}

const DayCell = ({ day, selected, selectDay }: DayCellProps) => {
	const clickHandler = () => {
		selectDay(day + 1);
		console.log(`Clicked on day ${day + 1}`);
	};

	return (
		<div
			className={
				selected
					? "border-1 m-0.25 hover:cursor-pointer text-blue-300"
					: "border-1 m-0.25 hover:cursor-pointer hover:text-amber-300"
			}
			onClick={clickHandler}
		>
			<div className="border-1 p-1">{day + 1}</div>
		</div>
	);
};

export default DayCell;
