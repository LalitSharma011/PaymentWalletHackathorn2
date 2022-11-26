import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';
import './Products.css'


export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/service1.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        Need Medicines ?
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
        Get Original medicines on best prices.
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://www.netmeds.com/healthstore?source_attribution=ADW-CPC-Search-PY-Generic&utm_source=ADW-CPC-Search-PY-Generic&utm_medium=CPC&utm_campaign=ADW-CPC-Search-PY-Generic&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jGxH74RDPBwUn9m5MgNv9vGGiE6M24qn32xUm0C1_6SJGZPWPysdtMaAuGlEALw_wcB" >Visit Site</a>
      </CardActions>
    </Card>
  );
}