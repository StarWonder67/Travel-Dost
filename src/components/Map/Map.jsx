import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

export default function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked }) {

  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  const centerCoordinates = { lat: 0, lng: 0};

  return (
    <div className = {classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDy7r00qg0KhwF3y0LYIOQRm_eiLCVCs_Y'}}
        defaultCenter = {centerCoordinates}
        center = {centerCoordinates}
        defaultZoom = {5}
        margin = {[50,50,50,50]}
        options = {''}
        onChange = {(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng});
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick = {(child)=> setChildClicked(child)}
      >
        {
          places?.map((place,i)=>(
            <div 
              lat = {Number(place.latitude)}
              lng = {Number(place.longitude)}
              key = {i}
            >
              <LocationOnOutlinedIcon color="secondary" fontSize="large"/>
              <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>

            </div>
          ))
        }
      </GoogleMapReact>
    </div>
  );
}

