import React, { Component } from 'react';
import logo from './multimedia.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import SongList from "./components/SongList"
import SongForm from "./components/SongForm"

class App extends Component {
  state = { songs: [] }

  componentDidMount(){
    // if you were ever going to add paging you'd need the sort 
    // to be in the controller so you get page results correctly
    fetch("/api/songs")
    .then( response => response.json())
    .then( songs => this.setState({songs: songs.sort((a, b) => a.rank - b.rank)}) )
  }

  addSong = (title, album, rank) => {
    // NOTE: there is no error checking for adding duplicates
    // not sure where to put it.  reject it on the component
    // or let the database reject it.
    let songInfo = { title, album, rank }
    fetch("/api/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(songInfo)
    })
    .then( res => res.json())
    .then( song=> {
      const {songs} = this.state
      // NOTE: maybe there is a way to DRY this up a bit
      this.setState({ songs: [...songs, song].sort((a, b) => a.rank - b.rank) })
    })
  }

  updateSong = (id, title, album, rank) => {
    //TODO api call
    let songInfo = { title, album, rank }
    fetch(`/api/songs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(songInfo)
    })
    // fetch returns a response, the 'then` turns response into response.json()
    // and then next then gets the return value of that on stores it in `songs`
    //
    // NOTE: in theory the js would check if the PATCH failed, 
    // and if so revert the change locally rather than
    // recieving back a json object as seen here
    .then( response => response.json())
    .then( songs => this.setState({songs: songs.sort((a, b) => a.rank - b.rank)}) )
  }

  deleteSong = (id) => {
    fetch(`/api/songs/${id}`, {method: "DELETE"})
    .then ( () => {
      const {songs} = this.state;
      this.setState({songs: songs.filter(s => s.id !== id) })
    })
  }

  render() {
    return (
      <div className="App container">
        <header className="header top-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Top 100 Songs</h1>
        </header>
        <section>
        <SongForm 
        addSong={this.addSong}/>

        <SongList
          songs={this.state.songs}
          addSong={this.addSong}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
        </section>

      </div>
    );
  }
}

export default App;
