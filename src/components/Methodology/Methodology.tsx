'use client';

import { useIntersectionObserver } from '@/lib/utils';
import styles from './Methodology.module.css';

const steps = [
  {
    num: '01',
    title: 'AVALIAÇÃO COMPLETA',
    text: 'Realizamos uma análise profunda do seu estado atual, hábitos, rotina e objetivos. Entendemos quem você é para criar o caminho ideal até o seu resultado.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'PLANO PERSONALIZADO',
    text: 'Com base na sua avaliação, criamos um plano 100% personalizado incluindo treino, nutrição, mindset e hábitos — tudo ajustado à sua vida real.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h7" /><path d="M20 15l-3 3 3 3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'ACOMPANHAMENTO CONTÍNUO',
    text: 'Monitoramos seu progresso semanalmente, ajustamos a estratégia e garantimos sua evolução. Você nunca estará sozinho nessa jornada.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function Methodology() {
  return (
    <section className={styles.section} id="methodology">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>METODOLOGIA COMPROVADA</span>
          <h2 className={styles.title}>
            COMO FUNCIONA O <span className={styles.highlight}>PROCESSO</span>
          </h2>
          <p className={styles.subtitle}>
            Um método simples, eficaz e totalmente personalizado para você alcançar seus objetivos.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const delay = `${index * 150}ms`;

  return (
    <div
      className={`${styles.step} ${isVisible ? styles.stepVisible : ''}`}
      ref={ref}
      style={{ transitionDelay: delay }}
    >
      <div className={styles.stepNum}>{step.num}</div>
      <div className={styles.stepContent}>
        <div className={styles.stepIcon}>{step.icon}</div>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepText}>{step.text}</p>
      </div>
    </div>
  );
}
