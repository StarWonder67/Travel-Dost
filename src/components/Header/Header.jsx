import React from 'react';
import { AutoComplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'; 
import { Autocomplete } from '@material-ui/lab';
import { SearchIcon } from '@material-ui/icons';

import useStyles from './styles';

export default function Header() {

  const classes = useStyles();

  return (
      <AppBar position="static" className = {classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">
                 Travel Dost
            </Typography>
            <Box display="flex">
              <Typography variant="h6" className = {classes.title}>
                Explore the world
              </Typography>
              {/* <Autocomplete> */}
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase placeholder="Search ..." classes = {{ root: classes.inputRoot, input: classes.inputInput}}/>
                </div>
              {/* </Autocomplete> */}
            </Box>
          </Toolbar>
       </AppBar>   
  );
}
