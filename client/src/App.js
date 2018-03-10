import React, { Component } from 'react';
import logo from './multimedia.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import SongList from "./components/SongList"
import SongForm from "./components/SongForm"

class App extends Component {
  state = { songs: [] }

  componentDidMount(){
    fetch("/api/songs")
    .then( response => response.json())
    .then( songs => this.setState({songs}))
  }

  addSong = (title, album) => {
    //TODO make api call
    let songInfo = { title, album }
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
      this.setState({ songs: [...songs, song] })
    })
  }

  updateSong = (id) => {
    //TODO api call
    console.log("edit me")
    console.log("edit me")
    fetch(`/api/songs/${id}`, {method: "PATCH"})
    .then(res => res.json())
    .then(song => {
      let songs = this.state.songs.map( song => {
        if (song.id === id)
          return song
        return song
      })
      this.setState({songs})
    })
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
        <SongForm addSong={this.addSong} />

        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
        </section>

      </div>
    );
  }
}

export default App;
