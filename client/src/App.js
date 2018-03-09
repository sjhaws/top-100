import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import SongList from "./components/SongList"

class App extends Component {
  state = { songs: [] }

  componentDidMount(){
    fetch("/api/songs")
    .then( response => response.json())
    .then( songs => this.setState({songs}))
  }

  addSong = (title, album) => {
    //TODO make api call
    let title = {title}
    let album = {album}
    fetch("/api/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(title, album)
    })
    .then( res => res.json())
    .then( song=> {
      const {songs} = this.state
      this.setState({ songs: [...songs, song] })
    })
  }

  updateSong = (id) => {
    //TODO api call 
    fetch(`/api/songs/${id}`, {method: "PUT"})
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Top 100 Songs</h1>
        </header>
        <SongList />
      </div>
    );
  }
}

export default App;
