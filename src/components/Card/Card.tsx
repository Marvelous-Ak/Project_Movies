import { memo } from "react";
import { Rating } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import { Star } from "@mui/icons-material";

const Card = memo(({ movie, genres, URL_IMAGE }: any) => {
  return (
    <div className="col">
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
            {movie.genre_ids.map((genreId: number, index: number) => {
              const genre: any = genres.find((g: any) => g.id === genreId);
              return genre ? (
                <span key={genreId}>
                  {genre.name}
                  {index < movie.genre_ids.length - 1 && " / "}{" "}
                </span>
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
              icon={<Star style={{ color: "white" }} />}
              emptyIcon={<StarBorder style={{ color: "white" }} />}
            />
          </p>
        </div>
      </div>
    </div>
  );
});

export default Card;
