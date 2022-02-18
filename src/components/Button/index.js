import './style.scss'

const Button = ({ children, type, color, onClick }) => {
	return (
		<button
			className={`button button--${color}`}
			type={type}
			onClick={() => (children === 'Limpar Campos' ? onClick(true) : onClick())}
		>
			<label className='button__label'>{children}</label>
		</button>
	)
}

export default Button
