import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/faqs.module.css';

const FAQs = () => (
	<>
		<div id='faqs' className={styles.title}>
			FAQs
		</div>
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.question}>What is this event about ?</div>
				<div className={styles.answer}>
					This event is a mini hackathon or competition with core focus on android
					development with Kotlin and Jetpack Compose.
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>Where is the Event?</div>
				<div className={styles.answer}>
					The Event is available on devfolio hackthon portal.
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>When is the Event ?</div>
				<div className={styles.answer}>October 15, 2022</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>Who can participate ?</div>
				<div className={styles.answer}>Anyone with a knack for development.</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>What are the prizes ?</div>
				<div className={styles.answer}>
					Prizes include Speakers + Tshirts for winners, and some exciting surprise
					schwags for some participants aswell.
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>I am a beginner. Can I win anything ?</div>
				<div className={styles.answer}>
					Yes. We have designed the problem statements to suit all skill levels.
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>What do I have to Develop ?</div>
				<div className={styles.answer}>
					Problem Statements will be released at the time of the event at 6PM, October 15,
					2022.
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>
					Where will be the problem statements announced ?
				</div>
				<div className={styles.answer}>
					The problem statements will be announced on youtube livestream, our website and
					our discord channel.
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>Can I participate solo ?</div>
				<div className={styles.answer}>Yes. You can form teams of upto 2 members.</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>When will the contest end ?</div>
				<div className={styles.answer}>The contest ends at 12 AM on October 16.</div>
			</div>
			<div className={styles.item}>
				<div className={styles.question}>I have more doubts. What should I do ?</div>
				<div className={styles.answer}>Join Our Discord Server.</div>
			</div>
		</div>
	</>
);

export default FAQs;
