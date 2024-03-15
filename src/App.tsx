import yamamoriLogo from '/yamamori_rice.jpg'
import Footer from './components/Footer.tsx'
import './index.css'

function App() {

	return (
		<div className="flex flex-col h-[100vh]">
			<main className="max-w-[720px] max-md:max-w-full m-auto">
				<img src={yamamoriLogo} className="m-auto w-36 h-auto rounded-full" alt="Avator" />
				<h1 className="text-2xl font-bold text-gray-600 text-center mt-3">Yuta Yamamori</h1>
				<p className="text-center">
					はじめまして、
				</p>
				<div className="flex justify-center gap-6 my-4">
					<a className="text-gray-600 hover:text-current" href="https://x.com/9yamamo9" target="_blank">
						<span className="i-ri-twitter-x-fill w-8 h-8" />
					</a>
					<a
						className="text-gray-600 hover:text-current"
						href="https://www.linkedin.com/in/yuta-yamamori-786883175/"
						target="_blank">
						<span className="i-ri-linkedin-fill w-8 h-8" />
					</a>
					<a className="text-gray-600 hover:text-current" href="https://github.com/9yamamo9" target="_blank">
						<span className="i-ri-github-fill w-8 h-8" />
					</a>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default App
