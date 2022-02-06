import './style.scss'

const Input = (props) => {
	return (
		<div className='input'>
			{props.type.map((element) => {
				return (
					<div className='input__container'>
						<h3 className='input__container__title'>{element.title}</h3>
						<input type='number' className='input__container__input' />
					</div>
				)
			})}
		</div>
	)
}

export default Input
