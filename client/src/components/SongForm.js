import React from 'react';

class SongForm extends React.Component {
  state = {
    title: '',
    album: '',
    rank: ''
  }

  handleChange = (e) => {
    // let song = document.getElementById("form1").value;
    // let album = document.getElementById("form2").value;
    // let song = $('.form1').value
    // let albmum = $('.form2').value
    // this.setState({ title: song, album: album })
    this.setState({title: e.target.value})
  }

  handleChange2 = (e) => {
    // let song = document.getElementById("form1").value;
    // let album = document.getElementById("form2").value;
    // let song = $('.form1').value
    // let albmum = $('.form2').value

    // this.setState({ title: song, album: album })
    this.setState({album: e.target.value})
  }

  handleChange3 = (e) => {
    this.setState({rank: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addSong(this.state.title, this.state.album, this.state.rank)
    this.setState({title: '', album: '', rank: ''})
  }

  render() {
    return (

      <div className="row">
      <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
        <div className="input-field col s4">
            <input id="form3" placeholder="Song Rank" required="required" value={this.state.rank} onChange={this.handleChange3}/>

          </div>
          <div className="input-field col s4">
            <input id="form1" placeholder="Add a Song" required="required" value={this.state.title} onChange={this.handleChange}/>

          </div>

          <div className="input-field col s4">
            <input id="form2" placeholder="Add a Album" required="required" value={this.state.album} onChange={this.handleChange2}/>
          </div>
          <input style={{
              display: "none"
            }} type="submit" value="Submit"/>
        </div>
      </form>
    </div>)
  }
}

export default SongForm;
