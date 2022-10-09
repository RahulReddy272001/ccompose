import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/navbar.module.css';

const Navbar = () => (
	<header className={styles.container}>
		<a href='#faqs'>FAQs</a>
		<a href='#footer'>Contact Us</a>
		<a target='_blank' href='https://discord.gg/CGyWztddhE' rel='noopener noreferrer'>
			Join Discord
		</a>
	</header>
);

export default Navbar;
