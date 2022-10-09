import Image from 'next/image';

import styles from '/styles/sponsor.module.css';

const sponsor = () => (
	<>
		<div className={styles.title}>Our Sponsors</div>
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.devfolio}>
					<a target='_blank' href='https://devfolio.co' rel='noopener noreferrer'>
						<Image
							src='/images/sponsor-logos/Devfolio_Logo-White.svg'
							alt='devfolio'
							layout='fill'
						/>
					</a>
				</div>
				<div className={styles.polygon}>
					<a target='_blank' href='https://polygon.technology/' rel='noopener noreferrer'>
						<Image
							src='/images/sponsor-logos/Polygon_Logo-White.svg'
							alt='polygon'
							layout='fill'
						/>
					</a>
				</div>
				<div className={styles.filecoin}>
					<a target='_blank' href='https://filecoin.io' rel='noopener noreferrer'>
						<Image
							src='/images/sponsor-logos/Filecoin-White.svg'
							alt='filecoin'
							layout='fill'
						/>
					</a>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.solana}>
					<a target='_blank' href='https://solana.com' rel='noopener noreferrer'>
						<Image
							src='/images/sponsor-logos/Solana-Dark.svg'
							alt='solana'
							layout='fill'
						/>
					</a>
				</div>
				<div className={styles.replit}>
					<a target='_blank' href='https://replit.com' rel='noopener noreferrer'>
						<Image
							src='/images/sponsor-logos/logo-light-text-bg.svg'
							alt='replit'
							layout='fill'
						/>
					</a>
				</div>
				<div className={styles.taskade}>
					<a target='_blank' href='https://www.taskade.com/' rel='noopener noreferrer'>
						<Image
							src='/images/sponsor-logos/logo_taskade_white.png'
							alt='taskade'
							layout='fill'
						/>
					</a>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.coolopool}>
					<Image
						src='/images/sponsor-logos/coolopool.png'
						alt='coolopool'
						layout='fill'
					/>
				</div>
				<div className={styles.xyz}>
					<a target='_blank' href='https://gen.xyz/' rel='noopener noreferrer'>
						<Image
							src='/images/sponsor-logos/xyz-logo-white.svg'
							alt='xyz'
							layout='fill'
						/>
					</a>
				</div>

			</div>

		</div>
	</>
);

export default sponsor;
