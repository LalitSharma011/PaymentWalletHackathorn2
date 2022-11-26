import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/service6.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        Car Insaurance
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
          Get your Car Insured 
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://www.kotakgeneral.com/motor-insurance/car-insurance?utm_source=google_search&utm_medium=cpc&utm_campaign=ES_Search_Generic_Car_DelhiNCR_Desktop_Exact&utm_term=online%20car%20insurance&utm_content=ES_Search_Generic_Car_DelhiNCR_Desktop_Exact&utm_location=9061665&IntermediaryCode=4170830000&LeadGenerator=Kotak&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jH6YDVNm--gyr2VumOZTYQB4X1Ks1mmZJJgVE5XQNhbTYP3IkSQL1oaAm4cEALw_wcB">Visit Site</a>
      </CardActions>
    </Card>
  );
}