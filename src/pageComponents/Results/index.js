import './style.scss'
import Card from '../../components/Card'

const Results = ({
	valorFinalBruto,
	aliquotaIR,
	valorPagoIR,
	valorFinalLiquido,
	valorTotalInvestido,
	ganhoLiquido,
}) => {
	return (
		<div className='results'>
			{valorFinalBruto !== undefined && (
				<Card title='Valor final Bruto' value={`R$ ${valorFinalBruto}`} />
			)}
			{aliquotaIR !== undefined && (
				<Card title='Alíquota do IR' value={`${aliquotaIR}%`} />
			)}

			<Card title='Valor Pago em IR' value={`R$ ${valorPagoIR}`} />
			<Card title='Valor Final Líquido' value={`R$ ${valorFinalLiquido}`} />
			<Card title='Valor Total Investido' value={`R$ ${valorTotalInvestido}`} />
			<Card title='Ganho Líquido' value={`R$ ${ganhoLiquido}`} />
		</div>
	)
}

export default Results
