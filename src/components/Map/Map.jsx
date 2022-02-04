import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

export default function Map() {

  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const centerCoordinates = { lat: 0, lng: 0};

  return (
    <div className = {classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDy7r00qg0KhwF3y0LYIOQRm_eiLCVCs_Y'}}
        defaultCenter = {centerCoordinates}
        center = {centerCoordinates}
        defaultZoom = {14}
        margin = {[50,50,50,50]}
        options = {''}s
        onChange = {''}
        onChildClick = {''}
      >

      </GoogleMapReact>
    </div>
  );
}
