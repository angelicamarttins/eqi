import './style.scss'

const Input = (props) => {
	return (
		<div className='input'>
			{props.type.map((element) => {
				return (
					<div className='input__container'>
						<label className='input__container__label'>{element.title}</label>
						<input type='text' className='input__container__input' />
					</div>
				)
			})}
		</div>
	)
}

export default Input
