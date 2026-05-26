'use client';

import Image from 'next/image';
import { smoothScroll } from '@/lib/utils';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgPattern} />
      <div className={styles.imageBlock}>
        <Image
          src="/assets/images/Hero-bg.jpg"
          alt="Transformação"
          fill
          className={styles.image}
          sizes="50vw"
          priority
        />
        <div className={styles.imageFade} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>COACH DE SAÚDE E PERFORMANCE</span>
          <h1 className={styles.title}>
            TRANSFORME SEU CORPO.<br />
            <span className={styles.highlight}>CONQUISTE SUA MELHOR VERSÃO.</span>
          </h1>
          <p className={styles.subtitle}>
            Chega de promessas. Resultados reais com método comprovado, 
            acompanhamento personalizado e a ciência aplicada ao seu corpo.
          </p>
          <div className={styles.ctas}>
            <a
              href="https://wa.me/555198147905?text=Olá! Quero começar minha transformação."
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              FALE COMIGO AGORA
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#methodology"
              className={styles.btnOutline}
              onClick={(e) => smoothScroll(e, '#methodology')}
            >
              CONHEÇA O MÉTODO
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>VIDAS TRANSFORMADAS</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>ANOS DE EXPERIÊNCIA</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>SATISFAÇÃO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
