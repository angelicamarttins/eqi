import './style.scss'

const Input = (props) => {
	return (
		<fieldset className='input'>
			{props.type.map((element) => {
				return (
					<div className='input__container'>
						<label className='input__container__label'>{element.title}</label>
						<input type='text' className='input__container__input' />
					</div>
				)
			})}
		</fieldset>
	)
}

export default Input
