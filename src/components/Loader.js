import React, { Component } from 'react'
import Ghost from './Ghost.gif'

export class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Ghost}></img>
      </div>
    )
  }
}

export default Loader
