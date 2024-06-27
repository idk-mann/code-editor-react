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
