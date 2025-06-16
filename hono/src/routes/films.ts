import { Hono } from "hono";
import { db } from "../db/index.js";
import { filmsTable } from "../db/schema.js";
import { eq } from "drizzle-orm";

export const films = new Hono();

films.get("/", async (c) => {
	const data = await db.select().from(filmsTable);
	return c.json({ films: data });
});

films.get("/ids", async (c) => {
	const data = (
		await db.select({ id: filmsTable.imdbId }).from(filmsTable)
	).map((obj) => obj.id);
	return c.json({ ids: data });
});

films.post("/add", async (c) => {
	const data = await c.req.json();
	await db.insert(filmsTable).values(data);
	return c.text(`New film added: ${data.title}`);
});

films.delete("/remove/:id", async (c) => {
	const imdbId = c.req.param("id");
	await db.delete(filmsTable).where(eq(filmsTable.imdbId, imdbId));
	return c.text(`Film removed!`);
});
