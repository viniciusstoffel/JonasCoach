'use client';

import { useIntersectionObserver } from '@/lib/utils';
import styles from './Benefits.module.css';

const benefits = [
  {
    title: 'PERDA DE PESO',
    text: 'Elimine gordura de forma sustentável, sem dietas restritivas. Resultados reais com hábitos que duram para sempre.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'DEFINIÇÃO MUSCULAR',
    text: 'Ganhe massa magra e defina seu corpo com treinos inteligentes baseados em ciência, não em achismo.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'ENERGIA E PERFORMANCE',
    text: 'Aumente sua disposição, melhore seu sono e eleve sua performance em todos os aspectos da vida.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'ACOMPANHAMENTO TOTAL',
    text: 'Suporte direto com monitoramento contínuo, ajustes semanais e acesso prioritário ao seu coach.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className={styles.section} id="benefits">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>POR QUE ESCOLHER</span>
          <h2 className={styles.title}>
            BENEFÍCIOS QUE <span className={styles.highlight}>TRANSFORMAM</span>
          </h2>
          <p className={styles.subtitle}>
            Uma abordagem focada em resultado que cuida do seu corpo e performance.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const delay = `${index * 120}ms`;

  return (
    <div
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
      ref={ref}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.cardIcon}>{benefit.icon}</div>
      <h3 className={styles.cardTitle}>{benefit.title}</h3>
      <p className={styles.cardText}>{benefit.text}</p>
    </div>
  );
}
