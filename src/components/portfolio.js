import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

// images //
import Busmall from '../assets/busmall.png';
import CityExplorer from '../assets/cityExplorer.png';
import GenreRoom from '../assets/genreRoom.png';
import RecipeRoulette from '../assets/recipeRoulette.png';
import Resty from '../assets/resty.png';
import StoreFront from '../assets/storeFront.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  chip: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={StoreFront}
            title="Store Front"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Store Front
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A mock e-commerce website where the user can add items to their cart, remove items, and create a mock purchase.
            </Typography>
            <div className={classes.chip} >
              <Chip size="small" label="REACT" />
              <Chip size="small" label="REDUX" />
              <Chip size="small" label="JAVASCRIPT" />
              <Chip size="small" label="SCSS" />
              <Chip size="small" label="MONGODB" />
              <Chip size="small" label="EXPRESS" />
              <Chip size="small" label="CORS" />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://loving-kirch-445281.netlify.app/" target="blank">
            <Button size="small" color="primary">
              View
            </Button>
          </a>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Resty}
            title="RESTY"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              RESTY
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              RESTy is a swagger.io clone. It allows you to use GET, POST, PUT, DELETE to test your APIs.
            </Typography>
            <div className={classes.chip} >
              <Chip size="small" label="REACT" />
              <Chip size="small" label="JAVASCRIPT" />
              <Chip size="small" label="CSS" />
              <Chip size="small" label="MONGODB" />
              <Chip size="small" label="EXPRESS" />
              <Chip size="small" label="CORS" />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://kind-ritchie-1fc32f.netlify.app/" target="blank">
            <Button size="small" color="primary">
              View
            </Button>
          </a>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={GenreRoom}
            title="Genre Room"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Genre Room
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A MERN stack application where users are recommended a random movie. Either fully randomized or randomized by genre.
            </Typography>
            <div className={classes.chip} >
              <Chip size="small" label="REACT" />
              <Chip size="small" label="JAVASCRIPT" />
              <Chip size="small" label="CSS" />
              <Chip size="small" label="MONGODB" />
              <Chip size="small" label="AXIOS" />
              <Chip size="small" label="EXPRESS" />
              <Chip size="small" label="CORS" />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://clever-ardinghelli-fdb608.netlify.app/" target="blank">
            <Button size="small" color="primary">
              View
            </Button>
          </a>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={CityExplorer}
            title="City Explorer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              City Explorer
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A city search app that displays the map of the location, weather for the up coming 10 days, and movies about that city.
            </Typography>
            <div className={classes.chip} >
              <Chip size="small" label="REACT" />
              <Chip size="small" label="JAVASCRIPT" />
              <Chip size="small" label="CSS" />
              <Chip size="small" label="EXPRESS" />
              <Chip size="small" label="CORS" />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://modest-borg-215dd1.netlify.app/" target="blank">
            <Button size="small" color="primary">
              View
            </Button>
          </a>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={RecipeRoulette}
            title="Recipe Roulette"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Recipe Roulette
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A random meal recipe generator app that provides the user with an image, meal recipe, and nutrition facts.
            </Typography>
            <div className={classes.chip} >
              <Chip size="small" label="HTML" />
              <Chip size="small" label="JAVASCRIPT" />
              <Chip size="small" label="CSS" />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://oakfive.github.io/recipe-roulette/" target="blank">
            <Button size="small" color="primary">
              View
            </Button>
          </a>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Busmall}
            title="Bus Mall"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bus Mall
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Random images are generated for the user to vote on. After voting, the user can see their favorites displayed in a chart.
            </Typography>
            <div className={classes.chip} >
              <Chip size="small" label="HTML" />
              <Chip size="small" label="JAVASCRIPT" />
              <Chip size="small" label="CSS" />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://simoneodegard.github.io/BusMall/" target="blank">
            <Button size="small" color="primary">
              View
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  )
}

export default Portfolio;







// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(0.5),
//     },
//   },
// }));

// export default function SmallChips() {
//   const classes = useStyles();
