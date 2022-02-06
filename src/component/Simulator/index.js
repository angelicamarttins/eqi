import Select from '../Select'
import Input from '../Input'

const Simulator = (props) => {
	const buttonArray = [
		{
			id: 'Rendimento',
			title: 'Bruto',
		},
		{
			id: 'Rendimento',
			title: 'Líquido',
		},
		{
			id: 'Tipos de Indexação',
			title: 'PRÉ',
		},
		{
			id: 'Tipos de Indexação',
			title: 'PÓS',
		},
		{
			id: 'Tipos de Indexação',
			title: 'FIXADO',
		},
	]

	const inputArray = [
		{
			id: 'Rendimento',
			title: 'Aporte Inicial',
		},
		{
			id: 'Rendimento',
			title: 'Prazo (em meses)',
		},
		{
			id: 'Rendimento',
			title: 'IPCA (ao ano)',
		},
		{
			id: 'Tipos de Indexação',
			title: 'Aporte Mensal',
		},
		{
			id: 'Tipos de Indexação',
			title: 'Rentabilidade',
		},
		{
			id: 'Tipos de Indexação',
			title: 'CDI (ao ano)',
		},
	]
	return (
		<div>
			<h3>Rendimento</h3>
			<Select button={buttonArray} />
			<Input type={inputArray} />
		</div>
	)
}

export default Simulator
