import { Link } from 'react-router-dom'

type HeaderProps = {
	visibleQrCodeButton: boolean
	enableCorrectReturn: boolean
}

const Header = (props: HeaderProps) => {
	const { visibleQrCodeButton , enableCorrectReturn} = props
	const correctPath = enableCorrectReturn ? '/#66F207CE-83AC-4568-B3CB-971CB770E12E' : '/'

	return (
		<header className="bg-gray-200">
			<div className="flex justify-center items-center gap-6 p-2">
				<Link className="text-2xl font-bold" to={correctPath}>My Business Card</Link>
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