import './style.scss'

const Cards = (props) => {
	return (
		<div className='cards'>
			{props.content.map((item, index) => {
				return (
					<div className={`cards__box cards__box--${index}`}>
						<h3>{item.title}</h3>
						<p>{item.value}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Cards
