import type { DayObj, MonthGrid } from "../types";

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

export const getMonthGrid = (month: number, year: number): MonthGrid => {
	const startOfMonth = new Date(year, month - 1, 1);
	const endOfMonth = new Date(year, month, 0);

	const offset = startOfMonth.getDay();
	const padding = 6 - endOfMonth.getDay();
	const daysInMonth = endOfMonth.getDate();

	const days: DayObj[] = [];
	for (let day = 1; day <= daysInMonth; day++) {
		days.push({ month, day, year });
	}

	return { offset, padding, days };
};
