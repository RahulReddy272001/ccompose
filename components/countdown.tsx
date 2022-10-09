import { useEffect, useState } from 'react';
import ms from 'parse-ms';

import styles from '/styles/countdown.module.css';

const Countdown = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			const data = ms(new Date('10/15/2022 6:00 PM').getTime() - Date.now());

			if (data.days == 0 && data.hours == 0 && data.minutes == 0 && data.seconds == 0) {
				clearInterval(interval);
			}
			setDays(data.days);
			setHours(data.hours);
			setMinutes(data.minutes);
			setSeconds(data.seconds);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const veryClose = {
		days: days < 2,
		hours: days == 0,
		minutes: days == 0 && hours == 0 && minutes < 60,
		seconds: days == 0 && hours == 0 && minutes == 0 && seconds < 10
	};

	return (
		<div className={styles.container}>
			<div>
				<div style={veryClose.days ? { color: '#ff0000b3' } : undefined}>{days}</div>
				Days
			</div>
			<span>:</span>
			<div>
				<div style={veryClose.hours ? { color: '#ff0000b3' } : undefined}>{hours}</div>
				Hours
			</div>
			<span>:</span>
			<div>
				<div style={veryClose.minutes ? { color: '#ff0000b3' } : undefined}>{minutes}</div>
				Minutes
			</div>
			<span>:</span>
			<div>
				<div style={veryClose.seconds ? { color: '#ff0000b3' } : undefined}>{seconds}</div>
				Seconds
			</div>
		</div>
	);
};

export default Countdown;
