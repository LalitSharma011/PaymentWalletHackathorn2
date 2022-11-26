import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/service3.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        Education Fees
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
         Pay Education Fees 
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://paytm.com/education">Visit Site</a>
             </CardActions>
    </Card>
  );
}