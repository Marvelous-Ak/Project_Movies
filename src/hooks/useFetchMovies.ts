import { useEffect, useState } from "react";
import axios from "axios";

const useFetchMovies = (movieType:string) => {
  const API_URL = "https://api.themoviedb.org/3/";
  const LANG = "language=en-US";
  const API_KEY = "864f6adb201fde2cb6b28096e9ac964f";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original/";
  const GENRES = "https://api.themoviedb.org/3/genre/movie/list";
  const [genres, setGenres] = useState([]);

  // Variables de Estado
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // Nuevo estado para la paginación
  const [totalPages, setTotalPages] = useState(0); // Nuevo estado para el total de páginas

  // Función de petición GET a la API de películas en cartelera
  const handleFetchMovies = async (pageNumber:number) => {
    const {
      data: { results, total_pages },
    } = await axios.get(
      `${API_URL}/movie/${movieType}?${LANG}&page=${pageNumber}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    setMovies(results);
    setTotalPages(total_pages); // Actualiza el estado con el total de páginas
  };

  useEffect(() => {
    handleFetchMovies(page);
  }, [page]); // Agrega 'page' como dependencia para que se ejecute cuando cambie la página

 

  // Generos
  useEffect(() => {
    // Función para obtener la lista de géneros
    const fetchGenres = async () => {
      const response = await axios.get(`${GENRES}?api_key=${API_KEY}&${LANG}`);
      setGenres(response.data.genres);
    };

    // Llamada a la función para obtener la lista de géneros
    fetchGenres();
  }, []);

  return {
    page,
    totalPages,
    setPage,
    genres,
    URL_IMAGE,
    movies,
  }
};

export default useFetchMovies;
