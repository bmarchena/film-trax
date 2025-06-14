CREATE TABLE "dates" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "dates_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"date" date NOT NULL,
	"film" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "films" (
	"imdbID" varchar(255) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"director" varchar(255),
	"plot" varchar(255),
	"genre" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "dates" ADD CONSTRAINT "dates_film_films_imdbID_fk" FOREIGN KEY ("film") REFERENCES "public"."films"("imdbID") ON DELETE no action ON UPDATE no action;