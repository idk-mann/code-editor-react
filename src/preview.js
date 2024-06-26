import React, { Component } from 'react';
import { marked } from 'marked';
import './App.css';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      initialX: 0,
      initialY: 0,
      translateX: 0,
      translateY: 0
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(event) {
    this.setState({
      isDragging: true,
      initialX: event.clientX - this.state.translateX,
      initialY: event.clientY - this.state.translateY
    });
  }

  handleMouseMove(event) {
    if (this.state.isDragging) {
      this.setState({
        translateX: event.clientX - this.state.initialX,
        translateY: event.clientY - this.state.initialY
      });
    }
  }

  handleMouseUp() {
    this.setState({
      isDragging: false
    });
  }

  render() {
    const { translateX, translateY } = this.state;
    const windowStyle = {
      transform: `translate(${translateX}px, ${translateY}px)`
    };

    return (
      <div
        className="window"
        style={windowStyle}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        <div
          className="title-bar"
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        >
          <div className="title-bar-text">Preview - Markdown Previewer</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div
          className="window-body"
          id="preview"
          //Markdown content convert to HTML by using dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{
            __html: marked(this.props.markdown, { breaks: true })
          }}
        />
      </div>
    );
  }
}

export default Preview;
