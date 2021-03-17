import Bar from './bar'

const Editor = (props) => (
    <div 
      id="editor-window" 
      className={props.class} 
      style={props.displayStyle}
    >
    	<Bar 
    	  button={props.button} 
    	  handleClick={props.handleClick} 
    	  title="Editor"
    	/>
      	<textarea 
      	  id="editor"
          value={props.value}
          onChange={props.handleChange} 
          rows="15"
        />
    </div>      
)

export default Editor


