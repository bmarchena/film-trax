interface DayCellProps {
	day: number;
}

const DayCell = ({ day }: DayCellProps) => {
	const clickHandler = () => {
		console.log(`Clicked on day ${day + 1}`);
	};

	return (
		<div
			className="border-1 m-0.25 hover:cursor-pointer hover:text-amber-700"
			onClick={clickHandler}
		>
			<div className="border-1 p-1">{day + 1}</div>
		</div>
	);
};

export default DayCell;
