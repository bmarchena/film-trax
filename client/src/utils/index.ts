export const getTodayObj = () => {
	const todayArr = new Date()
		.toLocaleDateString()
		.split("/")
		.map((e) => Number(e));

	const today = {
		month: todayArr[0],
		day: todayArr[1],
		year: todayArr[2],
	};

	return today;
};
