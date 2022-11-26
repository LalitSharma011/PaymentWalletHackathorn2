import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="/assets/service5.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:'center'}}>
        Credit-Card Bill
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:'center'}}>
          Pay your Credit Card Bill
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://razorpay.com/x/corporate-cards/?utm_source=google&utm_medium=cpc&utm_campaign=RPCCards-RPPerf-GSearch-Prospect-DWeb-Capital-Product-Aug%2722&utm_adgroup=CorporateCreditCard_exact&utm_content=&utm_term=remote%20credit%20card%20processing&utm_gclid=&utm_campaignID=&utm_adgroupID=&utm_adID=&utm_network=&utm_device=&gclid=EAIaIQobChMItqjr-b_L-wIVjAsrCh2Ktw4jEAAYASAAEgJSpPD_BwE">Visit Site</a>
      </CardActions>
    </Card>
  );
}