import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Select = (props) => {
	return (
		<div className='select'>
			{props.button.map((item) => (
				<button className='select__btn'>
					<FontAwesomeIcon icon={faCheck} className='select__btn__icon' />
					{item.title}
				</button>
			))}
		</div>
	)
}

export default Select
