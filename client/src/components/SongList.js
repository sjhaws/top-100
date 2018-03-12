import React from "react"
import Song from './Song'


const SongList = ({songs, updateSong, deleteSong}) => (
<div>
  <div id="hellojer" className="row">
    <div className="col m1">
      <h5>RANK</h5>
    </div>
    <div className="col m4">
      <h5>TITLE</h5>
    </div>
    <div className="col m4">
      <h5>ALBUM</h5>
    </div>
  </div>
  <hr />
  

  { songs.map( song =>

      <Song
        key={song.id}
        {...song}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    
  )}
  
</div>
)

export default SongList
