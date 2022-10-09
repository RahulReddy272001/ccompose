import type { NextPage } from 'next';
import Image from 'next/image';
import Countdown from './countdown';
import Typewriter from 'typewriter-effect';

import styles from '/styles/hero.module.css';
import { useEffect } from 'react';

const Hero: NextPage = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://apply.devfolio.co/v2/sdk.js';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.heroimg}>
					<Image src='/images/logo-wide.svg' alt='hero' layout='fill' />
				</div>
				<div className={styles.herosub}>
					Calling out all android developers to compete and compose !
				</div>
				<button className={styles.register}>
					<div
						className='apply-button'
						data-hackathon-slug='competencompose'
						data-button-theme='light'
						style={{ height: '44px', width: '312px' }}></div>
				</button>
			</div>
			<div className={styles.right}>
				<div className={styles.tablet}>
					<Image src='/images/tablet.svg' alt='' layout='fill' />
				</div>
				<div className={styles.typewriter}>
					<Typewriter
						options={{
							strings: ['EVENT COUNTDOWN', 'EVENT STARTS IN', 'WIN PRIZES IN'],
							autoStart: true,
							loop: true
						}}
					/>
				</div>
				<Countdown />
			</div>
		</div>
	);
};

export default Hero;
