import React, { Component } from 'react'
import loading from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div><img alt={loading} src={loading}></img></div>
    )
  }
}

export default Spinner