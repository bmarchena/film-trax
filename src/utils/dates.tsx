import DayCell from "../components/DayCell";
import { days } from "../constants/days";

import type { AbbrMonth } from "../constants/months";

export function generateDayCells(month: AbbrMonth) {
	const numDays = days[month];
	let dayCells = [];

	for (let i = 0; i < numDays; i++) {
		dayCells.push(<DayCell dayIndex={i} key={`${month}-${i + 1}`} />);
	}

	return dayCells;
}
