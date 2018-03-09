import React from "react"
import Song from './Song'

const SongList = ({ songs, updateSong, deleteSong }) => (
  <div>
    <div className="row">
      <div className="col m5">  
        TITLE
      </div>
      <div className="col m5">
        ALBUM
      </div>
    </div>

    <div>
      <ol>
    { songs.map( song => 
    <li>
      <Song
        key={song.id}
        {...song}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
      </li>
    )}
    </ol>
    </div>
  </div>
  
)

export default SongList