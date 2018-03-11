import React from "react"

class Song extends React.Component {
//  state = {id: this.props.id, title: this.props.title, album: this.props.album, rank: this.props.rank}
  // componentDidMount () {
  //   console.log(document.getElementById("4"))
  // }

  displayStaticRow = () => {
    return (
      <div>
      <div className="col m1">{this.props.rank}</div>
      <div className="col m4">{this.props.title}</div>
      <div className="col m4">{this.props.album}</div>
      <div className="col m1" onClick = { () =>  this.render(true)}>
        <i 
          style={{cursor: 'pointer'}}
          className="material-icons">
          edit
        </i>
      </div>
      <div className="col m1" onClick = { () => this.props.deleteSong(this.state.id)}>
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
    return (`
      <div>
      <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col m3">
              <input id="form3" placeholder="Song Rank" required="required" value={this.props.rank} onChange={this.handleChange3}/>
            </div>
            <div className="input-field col m3">
              <input id="form1" placeholder="Add a Song" required="required" value={this.props.title} onChange={this.handleChange}/>
            </div>
            <div className="input-field col m3">
              <input id="form2" placeholder="Add a Album" required="required" value={this.props.album} onChange={this.handleChange2}/>
            </div>
            <input style={{
                display: "none"
              }} type="submit" value="Submit"/>
          </div>
        </form>
        </div>
    `)
  }
  displayEditRow = () => {
    console.log(document.getElementById(this.props.id))
    console.log("edit me")
    let element = document.getElementById(this.props.id)
    element.innerHTML = ""+ this.renderEditRow();
  }



  render(edit){
    return(
      
       <div id={this.props.id} className="row" >
        
        { edit && this.displayEditRow() }
        { !edit && this.displayStaticRow() }
        
        </div>
    )
  }

}

export default Song
