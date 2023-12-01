import MoviesLayout from "../../layout/MoviesLayout/MoviesLayout";
import useFetchMovies from "../../hooks/useFetchMovies";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import './Home.css'
const Home = ({title,movieType}:{title:string,movieType:string}) => {
  const { page, totalPages, setPage, genres, URL_IMAGE, movies } =
    useFetchMovies(movieType);

  return (
    <MoviesLayout page={page} totalPages={totalPages} setPage={setPage}>
      <Title title={title} />
      <div className="container mt-4">
        <div className="row row-cols-2 row-cols-md-5 g-4">
          {movies.map((movie: any) => (
            <Card
              key={movie.id}
              movie={movie}
              genres={genres}
              URL_IMAGE={URL_IMAGE}
            />
          ))}
        </div>
      </div>
    </MoviesLayout>
  );
};

export default Home;