'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/lib/utils';
import styles from './Results.module.css';

export default function Results() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className={styles.section} id="resultados" ref={ref}>
      <div className={styles.bgWrapper}>
        <Image
          src="/assets/images/resultado-destaque.jpg"
          alt="Resultado de transformação"
          fill
          className={styles.bgImage}
          sizes="100vw"
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.tag}>RESULTADOS REAIS</span>
          <h2 className={styles.title}>
            TRANSFORMAÇÃO QUE <span className={styles.highlight}>INSPIRA</span>
          </h2>
          <p className={styles.text}>
            Cada aluno é uma história de superação. Com método, dedicação e acompanhamento
            personalizado, resultados extraordinários se tornam realidade.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>VIDAS TRANSFORMADAS</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>MANTÉM RESULTADOS</span>
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
