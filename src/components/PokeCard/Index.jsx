import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//passando todas as informações necessárias da api para o componente de card
export default function PokeCard({ name, image, types, weight, abilities }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* imagem do pokemon - api */}
      <CardMedia
        component="img"
        image={image}
        alt="pokemon"
      />
      <CardContent>
        {/* //conteudo com o nome do pokemon - api */}
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {/* // tipo do pokemon - api */}
        <Typography gutterBottom variant="h7" component="div">
         Type: {types}
        </Typography>
        {/* //tamanho do pokemon - api */}
        <Typography gutterBottom variant="h7" component="div">
         Weigth: {weight}
        </Typography>
        {/* //habilidades do pokemon - api */}
        <Typography gutterBottom variant="h8" component="div">
        abilities: {abilities}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
