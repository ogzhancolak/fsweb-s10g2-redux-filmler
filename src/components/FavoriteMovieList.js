import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = () => {

  const favorites = useSelector(store => store.favoritesReducer.favorites)
  const disPatch = useDispatch();

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className='font-bold'>Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {
          favorites.map(movie => (
            <Link key={movie.id} className="py-1 flex gap-2 justify-between" to={`/movies/${movie.id}`}>
              {movie.title}
              <span className="material-icons hover:text-red-600 text-[18px]" onClick={() => disPatch(removeFavorite(movie.id))}>remove_circle</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
}


export default FavoriteMovieList;