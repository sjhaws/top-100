import React from "react"
import Song from './Song'


const SongList = ({songs, updateSong, deleteSong}) => (
<div>
  <div id="hellojer" className="row">
    <div className="col m1"/>
    <div className="col m4">
      <h4>TITLE</h4>
    </div>
    <div className="col m4">
      <h4>ALBUM</h4>
    </div>
  </div>

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
