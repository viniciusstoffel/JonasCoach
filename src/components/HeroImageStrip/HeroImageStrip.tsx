import Image from 'next/image';
import styles from './HeroImageStrip.module.css';

export default function HeroImageStrip() {
  return (
    <div className={styles.strip}>
      <Image
        src="/assets/images/Hero-bg.jpg"
        alt="Transformação"
        fill
        className={styles.image}
        sizes="100vw"
        priority
      />
    </div>
  );
}
