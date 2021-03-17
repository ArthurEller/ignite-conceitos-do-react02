import { MovieCard } from './MovieCard';
import { MovieProps, GenreResponseProps } from '../App';

interface ContentProps {
  selectedGenreTitle: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ selectedGenreTitle, movies }: ContentProps) {

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenreTitle} </span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}