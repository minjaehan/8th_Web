import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import { useState } from 'react';

interface MovieCardProps {
  movie: Movie;
  category: string;
}

export default function MovieCard({ movie, category }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/movies/${category}/${movie.id}`}>
      <div
        className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer
        w-44 transition-transform duration-500 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} 영화의 이미지`}
          className="w-full h-auto object-cover"
        />

        {isHovered && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50
            to-transparent backdrop-blur-md flex flex-col justify-center
            items-center text-white p-4"
          >
            <h2 className="text-lg font-bold leading-snug text-center">
              {movie.title}
            </h2>
            <p
              className="text-sm text-gray-300 leading-relaxed mt-2
              line-clamp-5 text-center"
            >
              {movie.overview}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
