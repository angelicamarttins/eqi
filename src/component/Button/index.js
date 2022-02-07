import './style.scss'

const Button = (props) => {
	return (
		<div>
			{props.type.map((element) => {
				return (
					<button className='button' type='submit'>
						<label className='button__label'>{element.title}</label>
					</button>
				)
			})}
		</div>
	)
}

export default Button
