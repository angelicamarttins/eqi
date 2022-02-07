import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Select = (props) => {
	const { id } = props.type[0]

	return (
		<div className='select'>
			<div className='select__title'>
				<p>{id}</p>
				<FontAwesomeIcon icon={faInfoCircle} className='select__title__icon' />
			</div>
			<div className='select__btn'>
				{props.type.map((element) => (
					<button
						className={
							element.id === 'Rendimento'
								? `select__btn--rend`
								: `select__btn--index`
						}
					>
						<FontAwesomeIcon icon={faCheck} className='select__btn__icon' />
						{element.title}
					</button>
				))}
			</div>
		</div>
	)
}

export default Select
