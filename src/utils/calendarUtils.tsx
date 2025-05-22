import DayCell from "../components/DayCell";

export const generateDayCells = (date: Date, month: number) => {
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

	console.log("date", date);
	console.log("endOfMonth", endOfMonth.getDay());
	console.log("padding", padding);

	for (let i = 0; i < padding; i++) {
		dayCells.push(<div className="border-1 m-0.25" key={`padding-${i}`} />);
	}

	return dayCells;
};
