import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const filmsTable = pgTable("films", {
	imdbId: varchar({ length: 255 }).notNull().primaryKey(),
	title: varchar({ length: 255 }).notNull(),
	director: varchar({ length: 255 }),
	actors: varchar({ length: 255 }),
	plot: varchar({ length: 255 }),
	posterURL: varchar({ length: 255 }),
	genre: varchar({ length: 255 }),
});

export const datesTable = pgTable("dates", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	date: date({ mode: "string" }).notNull(),
	imdbId: varchar({ length: 255 }),
});
