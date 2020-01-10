import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => {
    return this.props.environment === 'inhospitable' ? <img className="exclamation" src={exclamation} alt="" /> : null

  }
    
  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {this.panic()}  
      </div>
    )
  }
}
