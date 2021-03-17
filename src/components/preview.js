import Bar from './bar'

const Preview = (props) => (
    <div 
      id="preview-window" 
      className={props.class} 
      style={props.displayStyle}
    >
      	<Bar 
      	  button={props.button} 
      	  handleClick={props.handleClick} 
      	  title="Previewer"
      	/>
      	<p 
      	  id="preview" 
      	  dangerouslySetInnerHTML={props.html} 
      	/>
    </div>
)

export default Preview
