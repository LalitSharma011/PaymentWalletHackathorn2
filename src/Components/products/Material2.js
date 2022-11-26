import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/service2.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        Book a Movie Ticket
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
        Get Movie Tickets on best prices.
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://in.bookmyshow.com/explore/movies?utm_source=google&utm_medium=cpc&utm_campaign=BAU_Movies_Search_Non-Brand_T7_Exact_Aug21&utm_adgroup=Movie%20Ticket%20Booking&utm_term=movie%20ticket%20booking&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jHhQs-1qNC_ISuoJttHsaXo4fj0MKdfdQENsFmI28LR7I-IRaFRHn8aAtqlEALw_wcB" >Visit Site</a>
              </CardActions>
    </Card>
  );
}