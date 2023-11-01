import React, { Component } from 'react'

export class Message extends Component {

    constructor(){
        super()
        this.state ={
            message: "Welcome Visitor"
        }
    }

  render() {
    return (
      <h1>Welcome Visitor</h1>
    )
  }
}

export default Message