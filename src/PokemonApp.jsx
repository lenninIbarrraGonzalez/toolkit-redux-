import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <div>PokemonApp</div>
      <hr />

      <ul>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
      </ul>
    </>
  );
};
