import { z } from "zod";
import { movieRequestSchema, movieSchema } from "../schemas/movie.schema";

export type iMovieRequest = z.infer<typeof movieRequestSchema>;

export type iMovie = z.infer<typeof movieSchema>;