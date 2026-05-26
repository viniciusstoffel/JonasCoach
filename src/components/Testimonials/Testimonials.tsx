'use client';

import { useIntersectionObserver } from '@/lib/utils';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: 'Em 6 meses com o Jonas, perdi 15kg e ganhei uma qualidade de vida que nem imaginava. Ele não é apenas um coach, é um parceiro de transformação. Minha energia mudou completamente!',
    name: 'Mariana Costa',
    role: 'Empresária, 34 anos',
    initials: 'MC',
  },
  {
    text: 'Depois dos 40, achei que era impossível recuperar minha saúde. O Jonas me provou o contrário. Hoje corro 10km, durmo melhor e me sinto 10 anos mais jovem!',
    name: 'Roberto Silva',
    role: 'Engenheiro, 45 anos',
    initials: 'RS',
  },
  {
    text: 'O método do Jonas é diferente de tudo que já experimentei. Ele olha para a pessoa como um todo. Em 3 meses, minha ansiedade reduziu, meu corpo mudou e minha autoestima voltou.',
    name: 'Ana Paula Ribeiro',
    role: 'Professora, 29 anos',
    initials: 'AP',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className={styles.section} id="testimonials" ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>DEPOIMENTOS REAIS</span>
          <h2 className={styles.title}>
            O QUE NOSSOS ALUNOS <span className={styles.highlight}>DIZEM</span>
          </h2>
          <p className={styles.subtitle}>
            Histórias reais de pessoas que transformaram suas vidas com o método.
          </p>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.gridVisible : ''}`}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={styles.card}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className={styles.quote}>&ldquo;</span>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <span>{t.initials}</span>
                </div>
                <div className={styles.authorInfo}>
                  <strong className={styles.authorName}>{t.name}</strong>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
