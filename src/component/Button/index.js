import './style.scss'

const Button = (props) => {
	return (
		<div className='button'>
			{props.type.map((element) => {
				return (
					<button
						className={
							element.title === 'Simular' ? `button--simular` : `button--limpar`
						}
						type='submit'
					>
						<label className='button__label'>{element.title}</label>
					</button>
				)
			})}
		</div>
	)
}

export default Button
