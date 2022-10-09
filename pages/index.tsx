import type { NextPage } from 'next';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Sponspor from '../components/sponsor';
import Organizer from '../components/organizer';
import FAQs from '../components/faqs';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>CompeteNCompose</title>
			</Head>
			<div className='bg-background min-h-screen'>
				<Navbar />
				<Hero />
				<Sponspor />
				<Organizer />
				<FAQs />
				<Footer />
			</div>
		</>
	);
};

//TODO: YT LIN KCOUNTDOWN
export default Home;
