type PortfolioCardProps = {
	title: string
	description: string
	imageSrc: string
	url: string
}
const PortfolioCard = (props: PortfolioCardProps) => {
	const { title, description, imageSrc, url } = props

	return (
		<div className="box-border border-2 border-gray-300 rounded-3xl mx-2 px-5">
			<a href={url} target="_blank">
				<div className="flex items-center">
					<img className="w-36 h-36" src={imageSrc} />
					<div>
						<h1 className="text-2xl font-bold text-gray-500">{title}</h1>
						<p className="text-sm text-gray-500">{description}</p>
					</div>
				</div>
			</a>
		</div>
	)
}

export default PortfolioCard
