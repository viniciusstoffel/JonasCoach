'use client';

import { useIntersectionObserver } from '@/lib/utils';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'ESSENCIAL',
    desc: 'Ideal para quem está começando',
    price: '197',
    period: '/mês',
    featured: false,
    features: [
      'Plano de treino personalizado',
      'Orientação nutricional básica',
      'Check-in quinzenal',
      'Suporte por WhatsApp',
    ],
    cta: 'QUERO COMEÇAR',
    href: 'https://wa.me/555198147905?text=Olá! Tenho interesse no plano Essencial.',
  },
  {
    name: 'PREMIUM',
    desc: 'Resultado máximo garantido',
    price: '397',
    period: '/mês',
    featured: true,
    features: [
      'Tudo do plano Essencial',
      'Plano nutricional completo',
      'Check-in semanal por vídeo',
      'Coaching de mindset',
      'Acesso ao grupo exclusivo',
    ],
    cta: 'QUERO RESULTADO MÁXIMO',
    href: 'https://wa.me/555198147905?text=Olá! Tenho interesse no plano Premium.',
  },
  {
    name: 'VIP',
    desc: 'Experiência completa e exclusiva',
    price: '697',
    period: '/mês',
    featured: false,
    features: [
      'Tudo do plano Premium',
      'Sessões individuais semanais',
      'Acompanhamento diário',
      'Suporte prioritário 24/7',
      'Bônus: Workshop mensal',
    ],
    cta: 'QUERO O VIP',
    href: 'https://wa.me/555198147905?text=Olá! Tenho interesse no plano VIP.',
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>INVISTA EM VOCÊ</span>
          <h2 className={styles.title}>
            PLANOS QUE ENTREGAM <span className={styles.highlight}>RESULTADOS</span>
          </h2>
          <p className={styles.subtitle}>
            Escolha o plano ideal e comece sua transformação hoje.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const delay = `${index * 150}ms`;

  return (
    <div
      className={`${styles.card} ${plan.featured ? styles.featured : ''} ${isVisible ? styles.cardVisible : ''}`}
      ref={ref}
      style={{ transitionDelay: delay }}
    >
      {plan.featured && <span className={styles.badge}>MAIS POPULAR</span>}
      <div className={styles.cardHeader}>
        <h3 className={styles.planName}>{plan.name}</h3>
        <p className={styles.planDesc}>{plan.desc}</p>
      </div>
      <div className={styles.price}>
        <span className={styles.currency}>R$</span>
        <span className={styles.value}>{plan.price}</span>
        <span className={styles.period}>{plan.period}</span>
      </div>
      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={plan.href}
        className={`${styles.btn} ${plan.featured ? styles.btnPrimary : styles.btnOutline}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {plan.cta}
      </a>
    </div>
  );
}
