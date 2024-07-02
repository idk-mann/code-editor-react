import React, { Component } from 'react';
import Editor from './editor.js';
import Preview from './preview.js';
import './App.css';

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...# for headings basically
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is a multi-line code block: between 3 backticks.

function anotherExample(firstLine, lastLine) {
  if (firstLine == \`\`\` && lastLine == \`\`\`) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.youtube.com/watch?v=dQw4w9WgXcQ), and

> Block Quotes!

>Life is an adventure on its own...

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on.........


`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Editor markdown={this.state.markdown} handleChange={this.handleChange} />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App;


body {
  background-color: #008080;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: 'Arial', sans-serif;
  overflow: hidden; 
}

.window {
  width: auto;;
  border: 2px solid #000;
  box-shadow: 4px 4px 0 #000;
  background-color: #C0C0C0;
  position: absolute; /* Necessary for dragging */
}

/* The title on top of the window */
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #000080, #0000FF);
  color: #fff;
  padding: 5px;
  font-size: 14px;
  cursor: move; /* Indicates draggable area */
  user-select: none; /* Prevents text selection while dragging */
}

.title-bar-text {
  padding-left: 4px;
}

.title-bar-controls {
  display: flex;
}

.title-bar-controls button {
  width: 16px;
  height: 16px;
  margin: 0 2px;
  background-color: #C0C0C0;
  border: 1px solid #fff;
  box-shadow: inset -1px -1px 0 #000, inset 1px 1px 0 #808080;
  padding: 0;
  cursor: pointer;
}

.title-bar-controls button:active {
  box-shadow: inset 1px 1px 0 #000, inset -1px -1px 0 #808080;
}

.window-body {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #FFF;
  border: 2px solid #808080;
  box-shadow: inset -1px -1px 0 #FFF, inset 1px 1px 0 #000;
}

textarea#editor {
  width: 98%;
  min-height: 30svh;
  max-height: 90svh;
  margin-bottom: 10px;
  padding: 5px;
  border: 2px solid #808080;
  box-shadow: inset -1px -1px 0 #FFF, inset 1px 1px 0 #000;
  max-width: 90svw;
  min-width: 20svw;
 
}

#preview {
  width: 98%;
  min-height: 30svh;
  max-height: 90svh;
  margin-bottom: 10px;
  padding: 5px;
  border: 2px solid #808080;
  box-shadow: inset -1px -1px 0 #FFF, inset 1px 1px 0 #000;
  max-width: 90svw;
  min-width: 20svw;
  overflow: scroll;
  resize: both;
}
