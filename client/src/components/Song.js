import React from "react"

const Song = ({id, title, album,  updateSong, deleteSong }) => (

  // <div className="row">
  //   <div className="col m5">
  //     {title}
  //   </div>
  //   <div className="col m5">
  //     {album}
  //   </div>
  //   <div className="col m1" onClick={ () => updateSong(id)}>
  //   <i class="material-icons">mode_edit</i>
  //   </div>
  //   <div className="col m1" onClick={ () => deleteSong(id)}>
  //   <i class="material-icons">delete</i>
  //   </div>
  //


<tr>
    <td className="col m5">{title}</td>
    <td className="col m5">{album}</td>
    <td className="col m1" onClick={ () => updateSong(id)}><i class="material-icons">mode_edit</i></td>
    <td className="col m1" onClick={ () => deleteSong(id)}><i class="material-icons">delete</i></td>
</tr>





)

export default Song
