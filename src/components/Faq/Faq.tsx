'use client';

import { useState } from 'react';
import styles from './Faq.module.css';

const faqs = [
  {
    q: 'O coaching é presencial ou online?',
    a: 'Todo o acompanhamento é feito 100% online, o que permite atender alunos de qualquer lugar do Brasil. Utilizamos videochamadas, WhatsApp e uma plataforma exclusiva para acompanhamento do seu progresso.',
  },
  {
    q: 'Preciso ter experiência com exercícios?',
    a: 'Não! O programa é totalmente adaptado ao seu nível, seja você iniciante ou avançado. Começamos de onde você está e evoluímos juntos, no seu ritmo.',
  },
  {
    q: 'Em quanto tempo verei resultados?',
    a: 'Os primeiros resultados geralmente são sentidos nas primeiras 2-3 semanas: mais energia, melhor sono e disposição. Resultados visíveis no corpo costumam aparecer entre 4-8 semanas, dependendo da dedicação e do objetivo.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim! Não existe fidelidade ou multa. Você pode cancelar seu plano a qualquer momento. Nosso compromisso é com o seu resultado e satisfação.',
  },
  {
    q: 'A primeira consulta é realmente gratuita?',
    a: 'Sim! A primeira consulta é totalmente gratuita e sem compromisso. É uma conversa para entendermos seus objetivos, tirar suas dúvidas e verificar se o programa é ideal para você.',
  },
  {
    q: 'O plano inclui dieta?',
    a: 'Sim, nos planos Premium e VIP incluímos orientação nutricional completa. No plano Essencial, oferecemos orientações nutricionais básicas. Para casos específicos, trabalhamos em parceria com nutricionistas especializados.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>DÚVIDAS FREQUENTES</span>
          <h2 className={styles.title}>
            PERGUNTAS <span className={styles.highlight}>FREQUENTES</span>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.itemActive : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <div className={styles.icon}>
                  <span /><span />
                </div>
              </button>
              <div
                className={styles.answer}
                style={{
                  maxHeight: openIndex === i ? '300px' : '0',
                }}
              >
                <div className={styles.answerInner}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
