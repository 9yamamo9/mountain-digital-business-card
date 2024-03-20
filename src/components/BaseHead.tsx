type BaseHeadProps = {
	url: string
	title: string
	description: string
	heroImage?: string
}

const BaseHead = (props: BaseHeadProps) => {
	const { url, title, description, heroImage } = props

	return (
		<head>
			<meta charSet="utf-8" />
			<link rel="icon" type="image/png" href="/mt-three-trees.png" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Mt. Three Trees Business Card</title>
			<meta name="description" content="This is a digital business card for me." />

			{/* Open Graph Protocol / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={heroImage} />

			{/*	X Card */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={url} />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={heroImage} />

		</head>
	)
}

export default BaseHead