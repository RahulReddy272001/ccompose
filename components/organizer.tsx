import Image from 'next/image';

import styles from '/styles/sponsor.module.css';

const organizer = () => (
  <>
    <div className={styles.title}>Our Organisers</div>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.devfolio} style={{ width: "33%" }}>
          {/* <a target='_blank' href='https://devfolio.co' rel='noopener noreferrer'> */}
          <Image
            src='/images/organozer-logo/GDSC FET JU Logo x1.png'

            alt='devfolio'
            layout='fill'
          />
          {/* </a> */}
        </div>
        <div className={styles.polygon} style={{ width: "33%" }}>
          {/* <a target='_blank' href='https://polygon.technology/' rel='noopener noreferrer'> */}
          <Image
            src='/images/organozer-logo/GDSC LPU Logo x1.png'
            alt='polygon'
            layout='fill'
          />
          {/* </a> */}
        </div>
        <div className={styles.filecoin} style={{ width: "33%" }}>
          {/* <a target='_blank' href='https://filecoin.io' rel='noopener noreferrer'> */}
          <Image
            src='/images/organozer-logo/GDSC RUAS Logo x1.png'
            alt='filecoin'
            layout='fill'
          />
          {/* </a> */}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.solana} style={{ width: "100%" }}>
          {/* <a target='_blank' href='https://solana.com' rel='noopener noreferrer'> */}
          <Image
            src='/images/organozer-logo/GDSC Cambridge Institute of Technology Logo x1.png'
            alt='solana'
            layout='fill'
          />
          {/* </a> */}
        </div>



      </div>
      <div className={styles.row}>
        <div className={styles.coolopool} style={{ width: "100%" }}>
          <Image
            src='/images/organozer-logo/GDSC Centre for converging technologies Logo x1.png'
            alt='coolopool'
            layout='fill'
          />
        </div>



      </div>
      <div className={styles.row}>
        <div className={styles.coolopool} style={{ width: "100%" }}>
          <Image
            src='/images/organozer-logo/GDSC Maharaja Agrasen Institute of Technology Logo x1.png'
            alt='coolopool'
            layout='fill'
          />
        </div>



      </div>

    </div>
  </>
);

export default organizer;
