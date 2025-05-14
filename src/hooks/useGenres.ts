import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Fetch API data
// const useGenres = () => useData<Genre>('/genres');

// Fetch local static data
const useGenres = () => ({ data: genres, isloading: false, error: null });

export default useGenres;