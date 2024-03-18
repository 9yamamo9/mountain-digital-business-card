const Footer = () => {
	const today = new Date()

	return (
		<footer className="min-h-[20%] bg-gray-200">
			<div className="text-center text-gray-500 p-3">
				&copy; {today.getFullYear()}-Current. Mt. Three Trees. All rights reserved.
			</div>
		</footer>
	)
}

export default Footer