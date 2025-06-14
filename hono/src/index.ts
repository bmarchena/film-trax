import { serve } from "@hono/node-server";
import { env } from "hono/adapter";
import { Hono } from "hono";
import { films } from "./routes/films.js";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});
app.route("/films", films);

serve(
	{
		fetch: app.fetch,
		port: 8080,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	}
);
