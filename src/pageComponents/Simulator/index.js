import { useState, useEffect } from 'react'
import RadioGroup from '../../components/RadioGroup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './style.scss'

const Simulator = ({ doSimulacao }) => {
	const [cdi, setCdi] = useState()
	const [ipca, setIpca] = useState()
	const [rendimento, setRendimento] = useState()
	const [indexacao, setIndexacao] = useState()
	const [values, setValues] = useState()

	useEffect(() => {
		getIndicadores()
	}, [])

	const getIndicadores = async () => {
		const response = await fetch('http://localhost:3000/indicadores')
		const indicadores = await response.json()

		const cdiObj = indicadores.find((item) => item.nome === 'cdi')
		setCdi(cdiObj.valor)

		const ipcaObj = indicadores.find((item) => item.nome === 'ipca')
		setIpca(ipcaObj.valor)
	}

	const rendimentos = [
		{
			id: 'bruto',
			label: 'Bruto',
		},
		{
			id: 'liquido',
			label: 'Líquido',
		},
	]

	const indexacoes = [
		{
			id: 'pre',
			label: 'PRÉ',
		},
		{
			id: 'pos',
			label: 'PÓS',
		},
		{
			id: 'ipca',
			label: 'FIXADO',
		},
	]

	return (
		<div className='simulator'>
			<div className='simulator__column'>
				<RadioGroup
					title='Rendimento'
					items={rendimentos}
					name='rendimentos'
					onChange={setRendimento}
				/>
				<Input title='Aporte Inicial' value={values} />
				<Input title='Prazo (em meses)' value={values} />
				<Input title='IPCA (ao ano)' value={`${ipca}%`} />
				<Button
					color='transparent'
					type='button'
					onClick={(boolean) => (boolean === true ? setValues('') : '')}
				>
					Limpar Campos
				</Button>
			</div>
			<div className='simulator__column'>
				<RadioGroup
					title='Tipos de indexação'
					items={indexacoes}
					name='indexacao'
					onChange={setIndexacao}
				/>
				<Input title='Aporte Mensal' value={values} />
				<Input title='Rentabilidade' value={values} />
				<Input title='CDI (ao ano)' value={`${cdi}%`} />
				<Button
					color='gray'
					type='button'
					onClick={() => doSimulacao(rendimento, indexacao)}
				>
					Simular
				</Button>
			</div>
		</div>
	)
}

export default Simulator
