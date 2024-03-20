import Header from './components/Header.tsx'
import qrCode from './assets/business-card-url-qr-code.png'
import Footer from './components/Footer.tsx'

const QrCode = () => {
	return (
		<div className="flex flex-col h-[100vh]">
			<Header visibleQrCodeButton={false}/>
			<main className="max-w-[720px] max-md:max-w-full m-auto">
				<div className="flex flex-col items-center m-4">
					<img className="w-42 h-42" src={qrCode} />
					<h1 className="text-gray-500">For Access my business card.</h1>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default QrCode