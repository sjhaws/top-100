import React from "react"

class SongEdit extends React.Component {
  state = {
    title: '',
    album: '',
    rank: ''
  }

  handleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleChange2 = (e) => {
    this.setState({album: e.target.value})
  }

  handleChange3 = (e) => {
    this.setState({rank: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateSong(this.state.title, this.state.album, this.state.rank)
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


export default SongEdit