interface DayCellProps {
	dayIndex: number;
}

const DayCell = ({ dayIndex }: DayCellProps) => {
	const clickHandler = () => {
		console.log(`Clicked on day ${dayIndex + 1}`);
	};

	return (
		<div
			className="border-1 m-0.25 hover:cursor-pointer"
			onClick={clickHandler}
		>
			<div className="border-1 p-1">{dayIndex + 1}</div>
		</div>
	);
};

export default DayCell;
