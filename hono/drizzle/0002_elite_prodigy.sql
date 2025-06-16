ALTER TABLE "dates" RENAME COLUMN "film" TO "imdbId";--> statement-breakpoint
ALTER TABLE "films" RENAME COLUMN "imdbID" TO "imdbId";--> statement-breakpoint
ALTER TABLE "dates" DROP CONSTRAINT "dates_film_films_imdbID_fk";
