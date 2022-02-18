import { useState } from 'react'
import './style.scss'

const Input = ({ title, value, cleanFields }) => {
	const [values, setValues] = useState()

	const subTitle = title.split(' ')[0]
	const validate = (value) =>
		/\D/.test(value) ? `${subTitle} deve ser um número` : ''

	return (
		<div className='input__container'>
			<label className='input__container__label'>{title}</label>
			<input
				type='text'
				className='input__container__input'
				value={value !== undefined ? value : values}
				onChange={(event) => setValues(event.target.value)}
			/>
			<p className='input__container__error'>
				{values !== undefined && value === undefined && validate(values)}
			</p>
		</div>
	)
}

export default Input
