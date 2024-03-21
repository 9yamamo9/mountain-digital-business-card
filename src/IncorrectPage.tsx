import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

const QrCode = () => {
	return (
		<div className="flex flex-col h-[100vh]">
			<Header visibleQrCodeButton={false} enableCorrectReturn={false}/>
			<main className="max-w-[720px] text-center max-md:max-w-full m-auto">
				<p className="text-3xl text-gray-500">
					Oops...
				</p>
				<p className="text-3xl text-gray-500">
					An accessed url is incorrect.
				</p>
				<p className="text-3xl text-gray-500">
					If you request a correct it, you can see a true page.
				</p>
			</main>
			<Footer />
		</div>
	)
}

export default QrCode