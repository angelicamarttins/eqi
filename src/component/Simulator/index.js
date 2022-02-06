import Select from '../Select'

const Simulator = (props) => {
	const buttonArray = [
		{
			title: 'Bruto',
		},
		{
			title: 'Líquido',
		},
	]
	return (
		<div>
			<h3>Rendimento</h3>
			<Select button={buttonArray} />
		</div>
	)
}

export default Simulator
