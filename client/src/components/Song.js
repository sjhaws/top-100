import React from "react"

class Song extends React.Component {

  state = { 
    edit: false,
    title: this.props.title,
    album: this.props.album,
    rank: this.props.rank,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateSong(this.props.id, this.state.title, this.state.album, this.state.rank)
    this.setState({ edit: false})
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

  renderStaticRow = () => {
    return (
      <div>
      <div className="col m1">{this.state.rank}</div>
      <div className="col m4">{this.state.title}</div>
      <div className="col m4">{this.state.album}</div>
      <div className="col m1" onClick = { () =>  this.setState({ edit: true}) }>
        <i 
          style={{cursor: 'pointer'}}
          className="material-icons">
          edit
        </i>
      </div>
      <div className="col m1" onClick = { () => this.props.deleteSong(this.props.id)}>
        <i 
          style={{cursor: 'pointer'}}
          className="material-icons">
          delete
        </i>
      </div>
      </div>
    )
  }

  renderEditRow(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col m3">
              <input id="form3" placeholder="Song Rank" required="required" value={this.state.rank} onChange={this.handleChange3}/>
            </div>
            <div className="input-field col m3">
              <input id="form1" placeholder="Add a Song" required="required" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <div className="input-field col m3">
              <input id="form2" placeholder="Add a Album" required="required" value={this.state.album} onChange={this.handleChange2}/>
            </div>
            <input style={{
                display: "none"
              }} type="submit" value="Submit"/>
          </div>
        </form>
        </div>
    )
  }


  // <input type="hidden" ref="id" value={ this.props.id } />

  // displayEditRow = () => {
  //   console.log(document.getElementById(this.props.id))
  //   console.log("edit me")
  //   // let element = document.getElementById(this.props.id)
  //   // element.innerHTML = ""+ this.renderEditRow();
  //   this.setState({ edit: true})
  // }



  render(){
    return(
      
       <div id={this.props.id} className="row" >
        
       { this.state.edit ? this.renderEditRow() : this.renderStaticRow() }
       
        
        </div>
    )
  }

}

export default Song
