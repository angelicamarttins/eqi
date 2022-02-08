import './App.scss'
import Simulator from '../pageComponents/Simulator'

function App() {
	return (
		<div className='app'>
			<header className='header'>
				<h1 className='header__title'>Simulador de Investimentos</h1>
			</header>
			<main className='main'>
				<div className='main__simulator'>
					<h2 className='main__simulator__title'>Simulador</h2>
					<Simulator />
				</div>
			</main>
		</div>
	)
}

export default App
