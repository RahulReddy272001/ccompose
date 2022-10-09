import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicons/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicons/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicons/favicon-16x16.png'
					/>
					<link rel='manifest' href='/favicons/site.webmanifest' />
					<link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
					<link rel='shortcut icon' href='/favicons/favicon.ico' />
					<meta name='apple-mobile-web-app-title' content='Compete and Compose' />
					<meta name='application-name' content='Compete and Compose' />
					<meta name='msapplication-TileColor' content='#b91d47' />
					<meta name='msapplication-config' content='/favicons/browserconfig.xml' />
					<meta name='theme-color' content='#ffffff' />
					<meta property='site_name' content='GDSC United - Compete and Compose' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
