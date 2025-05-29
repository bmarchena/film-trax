interface DayCellProps {
	date: Array<number>;
	selected?: boolean;
	selectDay: (day: number) => void;
}

const DayCell = ({ date, selected, selectDay }: DayCellProps) => {
	const clickHandler = () => {
		selectDay(date[1] + 1);
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
			<div className="border-1 p-1">{date[1] + 1}</div>
		</div>
	);
};

export default DayCell;
