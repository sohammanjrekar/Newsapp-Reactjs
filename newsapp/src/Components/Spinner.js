import React, { Component } from 'react'
import loading from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (<div className="container m-5">
      <div className='text-center'><img alt={loading} src={loading}></img></div></div>
    )
  }
}

export default Spinner