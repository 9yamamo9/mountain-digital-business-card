const Header = () => {
	const transitQRCodePage = () => {
		console.log('Go to QR Code Page.')
	}

	return (
		<header className="bg-gray-200">
			<div className="flex justify-center items-center gap-6 p-2">
				<div className="text-2xl font-bold">My Business Card</div>
				<button
					className="text-end rounded-3xl bg-gray-500 py-1 px-2 text-white text-sm hover:bg-gray-600"
					onClick={transitQRCodePage}>QR Code
				</button>
			</div>
		</header>
	)
}

export default Header