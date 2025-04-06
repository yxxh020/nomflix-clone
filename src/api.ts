const API_KEY = "1127d5852c2c6568d16fd36267c48e94";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies(category: string) {
  return fetch(
    `${BASE_PATH}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}
