import React from "react"
import Song from './Song'


const SongList = ({songs, updateSong, deleteSong}) => (
// <div>
//   <div className="row">
//     <div className="col m5">
//       TITLE
//     </div>
//     <div className="col m5">
//       ALBUM
//     </div>
//   </div>
//
//
//
//
//   <div>
//     <table>
//     <ol>
//   { songs.map( song =>
//   <li>
//     <Song
//       key={song.id}
//       {...song}
//       updateSong={updateSong}
//       deleteSong={deleteSong}
//     />
//     </li>
//   )}
//   </ol>
//   </table>
//   </div>
// </div>

<table className="striped highlight responsive-table">
  <thead>
    <tr>
      <th></th>
      <th>TITLE</th>
      <th>ALBUM</th>
    </tr>
  </thead>

  <tbody>
    {songs.map(song => <Song key={song.id} {...song} updateSong={updateSong} deleteSong={deleteSong}/>)}

  </tbody>
</table>)

export default SongList
