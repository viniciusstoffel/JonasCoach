'use client';

import { useState, useCallback } from 'react';
import styles from './FreeAssessment.module.css';

type Objetivo = 'emagrecimento' | 'hipertrofia' | 'definicao' | 'condicionamento' | 'reabilitacao' | 'performance';
type Atividade = 'sedentario' | 'leve' | 'moderado' | 'intenso' | 'atleta';

interface FormData {
  nome: string;
  idade: string;
  peso: string;
  altura: string;
  objetivo: Objetivo | '';
  restricoes: string;
  atividade: Atividade | '';
}

const OBJETIVOS = [
  { value: 'emagrecimento', label: 'Emagrecimento' },
  { value: 'hipertrofia', label: 'Hipertrofia / Massa Magra' },
  { value: 'definicao', label: 'Definição' },
  { value: 'condicionamento', label: 'Condicionamento Físico' },
  { value: 'reabilitacao', label: 'Reabilitação' },
  { value: 'performance', label: 'Performance Esportiva' },
];

const ATIVIDADES = [
  { value: 'sedentario', label: 'Sedentário' },
  { value: 'leve', label: 'Leve (1-2x/semana)' },
  { value: 'moderado', label: 'Moderado (3-4x/semana)' },
  { value: 'intenso', label: 'Intenso (5-6x/semana)' },
  { value: 'atleta', label: 'Atleta' },
];

const WHATSAPP_NUMBER = '555198147905';

function calcularIMC(peso: number, altura: number): { imc: number; classificacao: string } | null {
  if (!peso || !altura) return null;
  const alturaM = altura / 100;
  const imc = peso / (alturaM * alturaM);

  let classificacao: string;
  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 25) classificacao = 'Peso normal';
  else if (imc < 30) classificacao = 'Sobrepeso';
  else if (imc < 35) classificacao = 'Obesidade grau I';
  else classificacao = 'Obesidade grau II+';

  return { imc: Math.round(imc * 10) / 10, classificacao };
}

export default function FreeAssessment() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormData>({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    objetivo: '',
    restricoes: '',
    atividade: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const pesoNum = parseFloat(form.peso);
  const alturaNum = parseFloat(form.altura);
  const imc = calcularIMC(pesoNum, alturaNum);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => {
      const next = { ...prev };
      delete next[name as keyof FormData];
      return next;
    });
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.nome || form.nome.length < 3) newErrors.nome = 'Mínimo de 3 caracteres';
    if (!form.idade) newErrors.idade = 'Campo obrigatório';
    else if (Number(form.idade) < 12 || Number(form.idade) > 120) newErrors.idade = 'Idade inválida';
    if (!form.peso) newErrors.peso = 'Campo obrigatório';
    else if (Number(form.peso) < 20 || Number(form.peso) > 400) newErrors.peso = 'Peso inválido';
    if (!form.altura) newErrors.altura = 'Campo obrigatório';
    else if (Number(form.altura) < 100 || Number(form.altura) > 250) newErrors.altura = 'Altura inválida';
    if (!form.objetivo) newErrors.objetivo = 'Selecione um objetivo';
    if (!form.atividade) newErrors.atividade = 'Selecione seu nível';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const objetivoLabel = OBJETIVOS.find(o => o.value === form.objetivo)?.label || form.objetivo;
    const atividadeLabel = ATIVIDADES.find(a => a.value === form.atividade)?.label || form.atividade;
    const imcText = imc ? `${imc.imc} (${imc.classificacao})` : '—';
    const restricoesText = form.restricoes || 'Nenhuma';

    const message = [
      'Olá! Quero um plano personalizado.',
      '',
      '*Teste Gratuito*',
      `Nome: ${form.nome}`,
      `Idade: ${form.idade} anos`,
      `Peso: ${form.peso} kg`,
      `Altura: ${form.altura} cm`,
      `IMC: ${imcText}`,
      `Objetivo: ${objetivoLabel}`,
      `Restrições: ${restricoesText}`,
      `Atividade física: ${atividadeLabel}`,
    ].join('%0A');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className={styles.section} id="teste-gratuito">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>TESTE GRATUITO</span>
          <h2 className={styles.title}>
            DESCUBRA SEU <span className={styles.highlight}>PLANO IDEAL</span>
          </h2>
          <p className={styles.subtitle}>
            Responda algumas perguntas e receba um plano personalizado no WhatsApp.
            Sua primeira consulta é gratuita e sem compromisso.
          </p>
        </div>

        {!isOpen ? (
          <div className={styles.ctaWrapper}>
            <button
              className={styles.ctaButton}
              onClick={() => setIsOpen(true)}
            >
              FAZER TESTE GRÁTIS
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 7l5 5-5 5M13 7l5 5-5 5" />
              </svg>
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.fieldsGrid}>
              <div className={styles.fieldGroup}>
                <label htmlFor="nome">Nome completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  placeholder="Ex: João Silva"
                  className={errors.nome ? styles.inputError : ''}
                />
                {errors.nome && <span className={styles.errorMsg}>{errors.nome}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="idade">Idade</label>
                <input
                  type="number"
                  id="idade"
                  name="idade"
                  value={form.idade}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 30"
                  min={12}
                  max={120}
                  className={errors.idade ? styles.inputError : ''}
                />
                {errors.idade && <span className={styles.errorMsg}>{errors.idade}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="peso">Peso (kg)</label>
                <input
                  type="number"
                  id="peso"
                  name="peso"
                  value={form.peso}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 75.5"
                  step="0.1"
                  min={20}
                  max={400}
                  className={errors.peso ? styles.inputError : ''}
                />
                {errors.peso && <span className={styles.errorMsg}>{errors.peso}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="altura">Altura (cm)</label>
                <input
                  type="number"
                  id="altura"
                  name="altura"
                  value={form.altura}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 175"
                  min={100}
                  max={250}
                  className={errors.altura ? styles.inputError : ''}
                />
                {errors.altura && <span className={styles.errorMsg}>{errors.altura}</span>}
              </div>
            </div>

            {imc && (
              <div className={styles.imcCard}>
                <span className={styles.imcLabel}>SEU IMC</span>
                <span className={styles.imcValue}>{imc.imc}</span>
                <span className={styles.imcClass}>{imc.classificacao}</span>
              </div>
            )}

            <div className={styles.fieldsGrid}>
              <div className={styles.fieldGroup}>
                <label htmlFor="objetivo">Objetivo principal</label>
                <select
                  id="objetivo"
                  name="objetivo"
                  value={form.objetivo}
                  onChange={handleChange}
                  required
                  className={errors.objetivo ? styles.inputError : ''}
                >
                  <option value="">Selecione...</option>
                  {OBJETIVOS.map(obj => (
                    <option key={obj.value} value={obj.value}>{obj.label}</option>
                  ))}
                </select>
                {errors.objetivo && <span className={styles.errorMsg}>{errors.objetivo}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="atividade">Atividade física</label>
                <select
                  id="atividade"
                  name="atividade"
                  value={form.atividade}
                  onChange={handleChange}
                  required
                  className={errors.atividade ? styles.inputError : ''}
                >
                  <option value="">Selecione...</option>
                  {ATIVIDADES.map(ativ => (
                    <option key={ativ.value} value={ativ.value}>{ativ.label}</option>
                  ))}
                </select>
                {errors.atividade && <span className={styles.errorMsg}>{errors.atividade}</span>}
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="restricoes">Restrições de saúde / observações (opcional)</label>
              <textarea
                id="restricoes"
                name="restricoes"
                value={form.restricoes}
                onChange={handleChange}
                placeholder="Lesões, cirurgias, condições de saúde..."
                rows={3}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              ENVIAR E FALAR NO WHATSAPP
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>

            <button
              type="button"
              className={styles.backBtn}
              onClick={() => setIsOpen(false)}
            >
              VOLTAR
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
