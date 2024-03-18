import mountainForestLog from '../assets/mountain-forest-logo.png'

const PortfolioCard = () => {
	return (
		<div className="box-border border-2 border-gray-300 rounded-3xl mx-2 px-5">
			<a href="https://mountain-forest-blog.pages.dev/" target="_blank">
				<div className="flex items-center">
					<img className="w-36 h-36" src={mountainForestLog} />
					<div>
						<h1 className="text-2xl font-bold text-gray-500">Mountain Forest</h1>
						<p className="text-sm text-gray-500">This is my blog site about technologies and life. If you're interested in it, please access it.</p>
					</div>
				</div>
			</a>
		</div>
	)
}

export default PortfolioCard
