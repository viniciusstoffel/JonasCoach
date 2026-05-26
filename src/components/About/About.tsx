'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/lib/utils';
import styles from './About.module.css';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.imageCol} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.imageWrapper}>
            <Image src="/assets/images/coach.png" alt="Jonas Coach" fill sizes="(max-width: 768px) 100vw, 480px" />
            <div className={styles.imageBorder} />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>8+</span>
            <span className={styles.badgeText}>ANOS DE<br />EXPERIÊNCIA</span>
          </div>
        </div>

        <div className={`${styles.textCol} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.tag}>QUEM É JONAS COACH</span>
          <h2 className={styles.title}>
            SUA TRANSFORMAÇÃO COMEÇA COM O <span className={styles.highlight}>PROFISSIONAL CERTO</span>
          </h2>
          <p className={styles.text}>
            Sou Jonas, coach de saúde e performance com mais de 8 anos de experiência 
            ajudando pessoas a conquistarem o corpo e a vida que merecem.
          </p>
          <p className={styles.text}>
            Minha abordagem combina ciência, técnica e mentalidade. Não acredito em 
            fórmulas mágicas — acredito em trabalho consistente, estratégia inteligente 
            e comprometimento total com seus resultados.
          </p>

          <div className={styles.innerStats}>
            <div className={styles.innerStat}>
              <span className={styles.innerStatNum}>500+</span>
              <span className={styles.innerStatLabel}>ALUNOS</span>
            </div>
            <div className={styles.innerStat}>
              <span className={styles.innerStatNum}>1200+</span>
              <span className={styles.innerStatLabel}>CONSULTAS</span>
            </div>
            <div className={styles.innerStat}>
              <span className={styles.innerStatNum}>98%</span>
              <span className={styles.innerStatLabel}>SATISFAÇÃO</span>
            </div>
          </div>

          <div className={styles.certs}>
            <span>CREF ATIVO</span>
            <span>NUTRIÇÃO ESPORTIVA</span>
            <span>COACH CERTIFICADO</span>
            <span>MINDFULNESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
