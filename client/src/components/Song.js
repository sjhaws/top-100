import React from "react"

const Song = ({id, title, album,  updateSong, deleteSong }) => (
  
  <div className="row">
    <div className="col m5">  
      {title} 
    </div>
    <div className="col m5">
      {album}
    </div>

    <div className="col m2" onClick={ () => deleteSong(id)}>
    X
    </div>
  </div>
)

export default Song