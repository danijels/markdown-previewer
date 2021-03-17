import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bar = (props) => (
    <div className='bar'>
        <span>
            {props.title}
        </span>
        <button onClick={props.handleClick}>
            <FontAwesomeIcon icon={props.button} />
        </button>
    </div>
)

export default Bar