import React, { Component } from "react";
import "../assets/css/widget.css"

export class Widget extends Component {

  state = {

  }

  componentDidMount() {
    this.updateWidget = setInterval(() => {
      // update widget every 5 minutes
    }, 300000)
  }

  componentWillUnmount() {
    clearInterval(this.updateWidget) /* clear interval for updating widget */
  }

  render() {
    return (
      <div className="w-96 h-32 widget">
        some widget info goes here
      </div>
    )
  }
}

export default Widget