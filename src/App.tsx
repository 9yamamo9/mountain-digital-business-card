import yamamoriLogo from './assets/yamamori_rice.jpg'
import Footer from './components/Footer.tsx'
import './index.css'
import PortfolioCard from './components/PortfolioCard.tsx'
import mountainForestLog from './assets/mountain-forest-logo.png'
import Header from './components/Header.tsx'
import { useLocation } from 'react-router-dom'
import { PROTECT_WORD } from './constants/base.ts'
import IncorrectPage from './IncorrectPage.tsx'

function App() {
	const pathHash = useLocation().hash

	// If a path hash is correct, user can see a page.
	if (pathHash === PROTECT_WORD) {

		return (
			<div className="flex flex-col h-[100vh]">
				<Header visibleQrCodeButton={true} enableCorrectReturn={true}/>
				<main className="max-w-[720px] max-md:max-w-full m-auto">
					<img src={yamamoriLogo} className="m-auto w-36 h-auto rounded-full mt-3" alt="Avator" />
					<h1 className="text-2xl font-bold text-gray-600 text-center mt-3">Yuta Yamamori</h1>
					<p className="text-center text-gray-600 p-2">
						アクセスしていただきありがとうございます。僕はSoftware Engineerとして5年以上働いていました。
						現在は、次のやりたいことを見つけるために、興味のあることを日々学んでいます。
						趣味は、音楽・映画鑑賞とオリジナルTシャツなどを作ったりしています。
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
					<div className="flex flex-col mb-3 gap-3">
						<PortfolioCard
							title="Mountain Forest"
							description="This is my blog site about technologies and life. If you're interested in it, please access it."
							imageSrc={mountainForestLog}
							url="https://mountain-forest-blog.pages.dev/" />
						<PortfolioCard
							title="About Me"
							description="This page is my introduction for my career and technical stack."
							imageSrc={mountainForestLog}
							url="https://mountain-forest-blog.pages.dev/about/" />
					</div>
				</main>
				<Footer />
			</div>
		)

	} else {
		return (
			<IncorrectPage />
		)
	}
}

export default App
