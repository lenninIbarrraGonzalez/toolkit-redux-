import { setPokemons, startLoadingPokemon } from './';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemon());
  };

  //Todo realizar peticoin http
  //   dispatch(setPokemons());
};
