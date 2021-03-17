import * as React from 'react'
import { faCompress, faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import * as marked from 'marked'
import './App.scss'

import Editor from './components/editor'
import Preview from './components/preview'

marked.setOptions({
  gfm: true,
  breaks: true
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: placeholder,
            editorMaximized: false,
            previewerMaximized: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEditorClick = this.handleEditorClick.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value 
        })
    }
    handleEditorClick() {
        this.setState({
            editorMaximized: !this.state.editorMaximized
        });
    }
    handlePreviewClick() {
        this.setState({
            previewerMaximized: !this.state.previewerMaximized
        });
    }
    render() {
        const classes = this.state.editorMaximized
            ? { button: faCompress, editor: "editor-window-maxi", preview: "hidden" } 
            : this.state.previewerMaximized
            ? { button: faCompress, editor: "hidden", preview: "preview-window" }
            : { button: faArrowsAlt, editor: "", preview: "preview-window" };
        return (
            <div>
                <Editor value={this.state.input} 
                  handleChange={this.handleChange}
                  button={classes.button}
                  handleClick={this.handleEditorClick}
                  class={classes.editor}
                />
                <Preview html={{__html: marked(this.state.input)}}
                  button={classes.button}
                  handleClick={this.handlePreviewClick}
                  class={classes.preview}
                />
            </div>
        )
    }
}

export default App;


const placeholder = `# Welcome to my React Markdown Previewer!
    
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://www.placeimg.com/300/200/nature)
`;
