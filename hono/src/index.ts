import { serve } from "@hono/node-server";
import { env } from "hono/adapter";
import { Hono } from "hono";
import { films } from "./routes/films.js";
import { dates } from "./routes/dates.js";

const app = new Hono();

app.route("/films", films);
app.route("/dates", dates);

serve(
	{
		fetch: app.fetch,
		port: 8080,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	}
);
