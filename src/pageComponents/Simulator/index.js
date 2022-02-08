import './style.scss'
import Select from '../../components/Select'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Simulator = (props) => {
	const selectArrayRendimento = [
		{
			id: 'Rendimento',
			title: 'Bruto',
		},
		{
			id: 'Rendimento',
			title: 'Líquido',
		},
	]

	const selectArrayIndexacao = [
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

	const buttonArray = [
		{
			title: 'Limpar campos',
		},
		{
			title: 'Simular',
		},
	]
	return (
		<div className='simulator'>
			<div className='simulator__input-area'>
				<div className='simulator__input-area--rendimento'>
					<Select type={selectArrayRendimento} />
					<Input type={inputArrayRendimento} />
				</div>
				<div className='simulator__input-area--indexacao'>
					<Select type={selectArrayIndexacao} />
					<Input type={inputArrayIndexacao} />
				</div>
			</div>
			<Button type={buttonArray} />
		</div>
	)
}

export default Simulator
