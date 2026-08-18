export interface Film {
	title: string;
	director: string;
	actors: string;
	plot: string;
	posterURL: string;
	type: string;
	year: string;
	imdbId: string;
}

export interface DayObj {
	month: number;
	day: number;
	year: number;
}

export interface MonthYear {
	month: number;
	year: number;
}

export interface MonthGrid {
	offset: number;
	padding: number;
	days: DayObj[];
}
