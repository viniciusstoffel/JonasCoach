import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoJ}>J</span>onas<span className={styles.logoDot}>.</span>COACH
            </a>
            <p className={styles.desc}>
              Coach de saúde e performance focado em resultados reais.
              Transformando vidas com ciência, técnica e dedicação.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://wa.me/555198147905" aria-label="WhatsApp" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>LINKS</h4>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#methodology">Método</a></li>
              <li><a href="#benefits">Benefícios</a></li>
              <li><a href="#pricing">Planos</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>PLANOS</h4>
            <ul>
              <li><a href="#pricing">Essencial</a></li>
              <li><a href="#pricing">Premium</a></li>
              <li><a href="#pricing">VIP</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>CONTATO</h4>
            <p>contato@jonascoach.com</p>
            <p>(00) 00000-0000</p>
            <p>Atendimento online<br />Todo o Brasil</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Jonas Coach. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
