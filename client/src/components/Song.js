import React from "react"

const Song = ({id, title, album,  updateSong, deleteSong }) => (
  <div className = "column s12">
    <div className = "col m8">
      <div className="center">
        {title}
        {album}
      </div>
    </div>
    <div className="col m2">
    </div>
    <div style={ styles.pointer} className="col m1" onClick={ () => deleteSong(id)}>
    X
    </div>
  </div>
)

export default Song