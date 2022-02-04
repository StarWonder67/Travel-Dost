import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select, InputLabel} from '@material-ui/core';

import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function List() {

  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating,setRating] = useState(0);

  const places = [
    {name: 'Delhi'},
    {name: 'New York'},
    {name: 'Paris'},
    {name: 'Delhi'},
    {name: 'New York'},
    {name: 'Paris'},
  ]

  return(
    <div className = {classes.container}> 
      <Typography variant = "h5"> Discover the best around you</Typography>
      <FormControl classes={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value = {type} onChange = {(e)=> setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl classes={classes.formControl} style = {{ marginLeft: '30px'}}>
        <InputLabel> Rating</InputLabel>
        <Select value = {rating} onChange = {(e)=> setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place,i) => (
          <Grid item key = {i} xs = {12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
    );
}
