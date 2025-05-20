const Calendar = () => {
	const date = new Date(2025, 1);

	console.log("date", date);

	return (
		<div className="grid grid-cols-7">
			<span className="border-1 col-span-full">January</span>
			<div className="border-1">Monday</div>
			<div className="border-1">Tuesday</div>
			<div className="border-1">Wednesday</div>
			<div className="border-1">Thursday</div>
			<div className="border-1">Friday</div>
			<div className="border-1">Saturday</div>
			<div className="border-1">Sunday</div>
			<div className="border-1">1</div>
			<div className="border-1">2</div>
			<div className="border-1">3</div>
			<div className="border-1">4</div>
			<div className="border-1">5</div>
			<div className="border-1">6</div>
			<div className="border-1">7</div>
			<div className="border-1">8</div>
			<div className="border-1">9</div>
			<div className="border-1">10</div>
			<div className="border-1">11</div>
			<div className="border-1">12</div>
			<div className="border-1">13</div>
			<div className="border-1">14</div>
		</div>
	);
};

export default Calendar;
