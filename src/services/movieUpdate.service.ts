import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movies } from "../entities";
import { iMovie, iMovieUpdate } from "../interfaces/movie.interface";

export const updateMovieService = async (
  data: iMovieUpdate,
  id: number
): Promise<iMovie> => {
  const movieRepo: Repository<Movies> = AppDataSource.getRepository(Movies);

  const oldMovieInfo = await movieRepo.findOneBy({ id: id });
  const newMovieInfo = movieRepo.create({
    ...oldMovieInfo,
    ...data,
  });

  await movieRepo.save(newMovieInfo);

  return newMovieInfo;
};