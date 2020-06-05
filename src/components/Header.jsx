import React from 'react' 
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded'

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(1)
  }
}))

function Header() {
  const classes = useStyles()
  return (
    <AppBar color="primary" position='fixed'>
      <Toolbar>
        <AudiotrackRoundedIcon style={{color: 'white'}} />
        <Typography style={{color: 'white'}} className={classes.title} variant="h6" component="h1">
          AmplifyIt
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header