import './style.scss'
import Select from '../../component/Select'
import Input from '../../component/Input'
import Button from '../../component/Button'

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
			<div className='simulator__rendimento'>
				<Select type={selectArrayRendimento} />
				<Input type={inputArrayRendimento} />
				{/* <Button type={buttonArray} /> */}
			</div>
			<div className='simulator__indexacao'>
				<Select type={selectArrayIndexacao} />
				<Input type={inputArrayIndexacao} />
				{/* <Button type={buttonArray} /> */}
			</div>
			<Button type={buttonArray} />
		</div>
	)
}

export default Simulator
