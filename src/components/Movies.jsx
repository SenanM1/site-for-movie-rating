import { useState } from "react";

import MovieListComponent from "./MovieListComponent";
import MoviesCSS from "./Movies.module.css";
import Pagination from "./Pagination";
import Footer from "./Footer";

function createMovieComp(movie) {
  return (
    <MovieListComponent
      key={movie.Id}
      id={movie.Id}
      poster={movie.Poster_Link}
      title={movie.Series_Title}
      year={movie.Released_Year}
      rating={movie.IMDB_Rating}
      genre={movie.Genre}
      runtime={movie.Runtime}
      overview={movie.Overview}
    />
  );
}

function createMovieCompList(movies) {
  let movieComps = [];

  for (let movie of movies) {
    movieComps.push(createMovieComp(movie));
  }

  return movieComps;
}

function Movies(props) {
  const { movies, fetchError, isLoading } = props;

  //For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={MoviesCSS.MoviesPage}>
      <h1 className={MoviesCSS.header}>Top 1000 Movies</h1>
      {isLoading && <p className={MoviesCSS.loadingText}>Loading Movies...</p>}
      {fetchError && (
        <p
          style={{ color: "red", textAlign: "center" }}
        >{`Error: ${fetchError}`}</p>
      )}
      {!fetchError && !isLoading && (
        <div>
          <Pagination
            totalPosts={movies.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
          <div className={MoviesCSS.movie_list}>
            {createMovieCompList(currentPosts)}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Movies;
