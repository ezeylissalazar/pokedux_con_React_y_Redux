import React from 'react';
import { useDispatch } from 'react-redux';
import { Image, Label, Divider, Grid, Icon, Button } from 'semantic-ui-react';
import { setFavorite } from '../../actions';
import { DEFAUL_COLOR, FAV_COLOR, MAIN_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = ({ pokemon }) => {
  const dispach = useDispatch();
  const handleFavorite = () => {
    dispach(setFavorite({pokemonId: pokemon.id}));
  }

  const color = pokemon.favorite ? FAV_COLOR : DEFAUL_COLOR;

  if (!pokemon) return null;
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Button className="PokemonCard-Favorite" onClick={handleFavorite}>
        <Icon name='favorite' color={color} />
        </Button>
        <Image
          centered
          src={pokemon.sprites.front_default}
        />
        <p className='PokemonCard-title'>{pokemon.name}</p>
        <Divider />
        {pokemon.types.map((type) =>(<Label color={MAIN_COLOR} 
        key={`${pokemon.id}-${type.type.name}`}>{type.type.name}</Label>))}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
