import './style.scss'
import Select from '../Select'
import Input from '../Input'

const Simulator = (props) => {
	const buttonArrayRendimento = [
		{
			id: 'Rendimento',
			title: 'Bruto',
		},
		{
			id: 'Rendimento',
			title: 'Líquido',
		},
	]

	const buttonArrayIndexacao = [
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

	const inputArrayRendimento = [
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
	]

	const inputArrayIndexacao = [
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
		<div className='simulator'>
			<div className='simulator__rendimento'>
				<Select button={buttonArrayRendimento} />
				<Input type={inputArrayRendimento} />
			</div>
			<div className='simulator__indexacao'>
				<Select button={buttonArrayIndexacao} />
				<Input type={inputArrayIndexacao} />
			</div>
		</div>
	)
}

export default Simulator
