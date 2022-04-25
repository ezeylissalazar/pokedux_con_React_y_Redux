import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { fetchPokemonsWithDetails } from '../../actions';
import './styles.css';
import Loader from '../../components/Loader';

function Home() {
  const pokemons = useSelector((state) => state.list);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  });

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;