import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';
import { RingLoader } from 'react-spinners';

export const PokemonApp = () => {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemon);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      {isLoading ? (
        <RingLoader />
      ) : (
        <div>
          <div>PokemonApp</div>
          <hr />

          <ul>
            {pokemons?.map((pokemon) => (
              <li key={pokemon?.name}>{pokemon?.name}</li>
            ))}
          </ul>

          <p>{`pagina ${page}`}</p>
        </div>
      )}
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        siguiente
      </button>
    </>
  );
};
