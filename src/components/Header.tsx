import { Link } from 'react-router-dom'

type HeaderProps = {
	visibleQrCodeButton: boolean
}

const Header = (props: HeaderProps) => {
	const { visibleQrCodeButton } = props

	return (
		<header className="bg-gray-200">
			<div className="flex justify-center items-center gap-6 p-2">
				<Link className="text-2xl font-bold" to="/">My Business Card</Link>
				{visibleQrCodeButton && (
					<Link
						className="text-end rounded-3xl bg-gray-500 py-1 px-2 text-white text-sm hover:bg-gray-600"
						to="/qr-code">QR Code
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header