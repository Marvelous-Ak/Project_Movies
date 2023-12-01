import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from '@mui/material';
import { StarBorder } from "@mui/icons-material";
import { Star } from "@mui/icons-material";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../../components/Buttons/Buttons";

const Upcoming = () => {
  const API_URL = "https://api.themoviedb.org/3/";
  const LANG = "language=en-US";
  const API_KEY = "864f6adb201fde2cb6b28096e9ac964f";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original/";
  const GENRES = "https://api.themoviedb.org/3/genre/movie/list";

  // Variables de Estado
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  //Paginacion
  const [page, setPage] = useState(1); // Nuevo estado para la paginación
  const [totalPages, setTotalPages] = useState(0); // Nuevo estado para el total de páginas

  // Función de petición GET a la API de películas próximas
  const fetchUpcomingMovies = async (pageNumber) => {
    const {
      data: { results,total_pages },
    } = await axios.get(`${API_URL}/movie/upcoming?${LANG}&page=${pageNumber}`, {
      params: {
        api_key: API_KEY,
      },
    });

    setUpcomingMovies(results);
    setTotalPages(total_pages);
  };

  useEffect(() => {
    fetchUpcomingMovies(page);
  }, [page]);

  //Generos
  useEffect(() => {
    // Función para obtener la lista de géneros
    const fetchGenres = async () => {
      const response = await axios.get(`${GENRES}?api_key=${API_KEY}&${LANG}`);
      setGenres(response.data.genres);
    };

    // Llamada a la función para obtener la lista de géneros
    fetchGenres();
  }, []);

  // Función para ir a la página siguiente
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      scrollToTop();
    }
  };

  // Función para ir a la página anterior
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      scrollToTop();
    }
  };

  // Función para hacer scroll hacia arriba
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Usa "smooth" para un desplazamiento suave
  });
};

  return (
    <>
    <Buttons></Buttons>
      <div className="container title">
        <h3>Upcoming</h3>
      </div>
      <div className="container mt-4">
        <div className="row row-cols-2 row-cols-md-5 g-4">
          {upcomingMovies.map((movie) => (
            <div key={movie.id} className="col">
              <div className="card">
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">{movie.title}</h6>
                  <p className="card-genre">
                    {movie.release_date !== undefined
                      ? movie.release_date.substring(0, 4)
                      : ""}
                      {" · "}
                    {movie.genre_ids.map((genreId, index) => {
                      const genre = genres.find((g) => g.id === genreId);
                      return genre ? (
                        <span key={genreId}>{genre.name}{index < movie.genre_ids.length - 1 && " / "}{" "}</span>
                      ) : null;
                    })}
                  </p>
                  <p className="card-synopsis scroll">{movie.overview}</p>
                  <p className="card-rating">
                    <Rating
                      name="half-rating-read"
                      defaultValue={(movie.vote_average / 2).toFixed(1)}
                      precision={0.5}
                      readOnly
                      icon={<Star style={{ color: 'white' }} />}
                      emptyIcon={<StarBorder style={{ color: 'white' }} />}
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      {/* Paginación */}
      <div className="pagination justify-content-center ButtonPage">
        <button className="btn rounded-circle  btn-lg" onClick={prevPage}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} />
        </button>
        <div className="d-flex align-items-center mx-2 pages">{page} / {totalPages}</div>
        <button className="btn rounded-circle btn-lg" onClick={nextPage}>
        <FontAwesomeIcon icon={faChevronRight}  style={{color: "#ffffff",}}/>
        </button>
      </div>
      <br />
    </>
  );
};

export default Upcoming;
