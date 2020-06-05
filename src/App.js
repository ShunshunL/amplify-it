import React from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import Songlist from './components/Songlist';
import Songplayer from './components/Songplayer';
import { Grid, useMediaQuery } from '@material-ui/core'
import songReducer from './reducer'

export const SongContext = React.createContext({
  song: {
    id: "3d49afd4-9751-4be3-ae88-88cbacbe5a55",
    title: "Calcutta (Official HD Video - Basick Records)",
    artist: "SLEEP TOKEN",
    thumbnail: "http://img.youtube.com/vi/Bxy1hHLtyHo/0.jpg",
    url: "https://www.youtube.com/watch?v=Bxy1hHLtyHo",
    duration: 428
  },
  isPlaying: false
})

function App() {
  const initialSongState = React.useContext(SongContext)
  const [state, dispatch] = React.useReducer(songReducer, initialSongState)
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'))
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))
  
  return (
    <SongContext.Provider value={{ state, dispatch}}>
      {greaterThanSm && <Header />}
      <Grid container spacing={3}>
        <Grid style={{paddingTop: greaterThanSm ? 90 : 10}} item xs={12} md={7}>
          <AddSong />
          <Songlist />
        </Grid>
        <Grid style={greaterThanMd ? {position: 'fixed', width: '100%', right: 0, top: 70} : {position: 'fixed', width: "100%", left: 0, bottom: 0}} item xs={12} md={5}>
          <Songplayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
