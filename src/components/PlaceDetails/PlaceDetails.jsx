import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

export default function PlaceDetails({ place, selected, refProp }) {

  const classes = useStyles();

  if(selected) refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start"})

  return(
    <Card elevation = {6}>
      <CardMedia 
        style = {{height: 200 }}
        image = {place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title = {place.name}
      />
      {place.name!=null ? (
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle2" >
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Typography variant="h5">{place.name}</Typography>
        <Typography gutterBottom variant="subtitle2" >
          <LocationOnIcon color='secondary'/>{place.address}
        </Typography>
        <Typography gutterBottom variant="subtitle2" >
          <PhoneIcon color="primary"/> {place.phone}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Rating</Typography>
          <Typography gutterBottom variant="subtitle1">{place.rating}</Typography>
        </Box>
        {/* {
          place?.awards?.map((award)=>(
            <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
              <img src={award.images.small} alt={award.display_name}/>
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))
        } */}
      </CardContent>
      ) : null
    }
    </Card>
  );
}
