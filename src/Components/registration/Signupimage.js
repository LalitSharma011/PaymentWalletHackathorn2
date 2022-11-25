import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="/assets/login2.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            Natwest
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
          Our purpose is to champion the potential of people, families, and businesses.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}