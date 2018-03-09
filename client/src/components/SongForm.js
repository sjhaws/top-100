import React from 'react';

class SongForm extends React.Component {
  state = { title: '' , album: ''}

  handleChange = (e) => {
    // let song = document.getElementById("form1").value;
    // let album = document.getElementById("form2").value;
    // let song = $('.form1').value
    // let albmum = $('.form2').value
    console.log("hi")
    // this.setState({ title: song, album: album })
    this.setState({ title: e.target.value })
  }

  handleChange2 = (e) => {
    console.log("bye")
    // let song = document.getElementById("form1").value;
    // let album = document.getElementById("form2").value;
    // let song = $('.form1').value
    // let albmum = $('.form2').value
    
    // this.setState({ title: song, album: album })
    this.setState({ album: e.target.value })
  }

  handleSubmit = (e) => {
    console.log("here")
    console.log(this.state.album)
    e.preventDefault()
    this.props.addSong(this.state.title, this.state.album)
    this.setState({ title: '' , almum: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          id="form1"
          placeholder="Add a SONG"
          required
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          id="form2"
          placeholder="Add a Album"
          required
          value={this.state.album}
          onChange={this.handleChange2}
        />
      </form>
    )
  }
}

export default SongForm;