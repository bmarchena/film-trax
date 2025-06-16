import { Hono } from "hono";
import { db } from "../db/index.js";
import { datesTable, filmsTable } from "../db/schema.js";
import { eq } from "drizzle-orm";

export const dates = new Hono();

dates.get("/", async (c) => {
	const data = await db
		.select()
		.from(datesTable)
		.innerJoin(filmsTable, eq(datesTable.imdbId, filmsTable.imdbId));
	return c.json({ dates: data });
});

dates.post("/add", async (c) => {
	const data = await c.req.json();
	await db.insert(datesTable).values(data);
	return c.text("New date added!");
});

dates.delete("/remove/:id", async (c) => {
	const dateID = Number(c.req.param("id"));
	await db.delete(datesTable).where(eq(datesTable.id, dateID));
	return c.text("Date removed!");
});
