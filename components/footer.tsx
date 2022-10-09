import Link from 'next/link';
import Image from 'next/image';
import { BsDiscord } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import styles from '/styles/footer.module.css';

const Footer = () => (
	<footer className={styles.container} id='footer'>
		<div className={styles.logo}>
			<Image src='/images/compose.svg' alt='' layout='fill' />
		</div>
		<div className={styles.copyright}>
			<span>Copyright © 2022</span>
			<span>Designed by CompeteNCompose Team</span>
		</div>
		<div className={styles.contact}>
			<Link href='https://discord.gg/CGyWztddhE'>
				<div className={styles.discord}>
					<BsDiscord />
					Discord
				</div>
			</Link>
			<div className={styles.mail}>
				<SiGmail />
				competencompose@gmail.com
			</div>
		</div>
	</footer>
);

export default Footer;
