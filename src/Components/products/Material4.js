import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard4() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/service4.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        Mobile Recharge
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
          Recharge your Mobile
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://www.amazon.in/hfc/mobileRecharge?ref_tracker=prepaidadw&utm_source=Google&utm_medium=CPC&utm_campaign=IA_AmazonPay_Search_Sitelink1&utm_source=Google&utm_medium=CPC&utm_campaign=&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jHjE8QTfVjZK6bJP6NbxVA4e3awJBxEw62lo2U-6wKK6Qwj8e0YdXQaAsg-EALw_wcB">Visit Site</a>
      </CardActions>
    </Card>
  );
}