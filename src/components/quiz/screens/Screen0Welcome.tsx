"use client";

import Image from "next/image";
import Logo from "../Logo";
import { ArrowRight, ChartNoAxesCombined, UserRound, UsersRound, Zap } from "lucide-react";
import styles from "./Welcome.module.css";

interface Props { onStart: () => void; }

export default function Screen0Welcome({ onStart }: Props) {
  return (
    <section className={styles.welcome} aria-labelledby="welcome-title">
      <div className={styles.hero}>
        <div className={styles.portrait}>
          <div className={styles.brandMark} aria-hidden="true" />
          <Image src="/miguel-sac.png" alt="Miguel Neto, do Método SAC" fill preload sizes="(max-width: 760px) 100vw, 650px" className={styles.photo} />
        </div>
        <div className={styles.copy}>
          <div className={styles.logo}><Logo size="md" /></div>
          <div className={styles.badge}><Zap size={22} aria-hidden="true" />Expansão comercial B2B</div>
          <h1 id="welcome-title">Sua empresa já tem<br className={styles.desktopBreak} /> uma máquina para<br className={styles.desktopBreak} /> vender. Falta uma<br className={styles.desktopBreak} /> para <span>expandir.</span></h1>
          <p className={styles.description}>Enquanto seus representantes cuidam da carteira atual, o Método SAC ajuda sua empresa a gerar novas oportunidades, abrir novos mercados e manter um fluxo contínuo de clientes B2B.</p>
          <div className={styles.comparison} aria-label="Como o Método SAC complementa seu comercial">
            <div className={styles.comparisonCard}>
              <span className={styles.cardLabel}>Hoje</span>
              <span className={styles.cardIcon}><UsersRound aria-hidden="true" /></span>
              <h2>Representantes</h2>
              <p>Foco na carteira atual</p>
            </div>
            <ArrowRight className={styles.comparisonArrow} aria-hidden="true" />
            <div className={`${styles.comparisonCard} ${styles.expansionCard}`}>
              <span className={styles.cardLabel}>Com Método SAC</span>
              <span className={styles.cardIcon}><ChartNoAxesCombined aria-hidden="true" /></span>
              <h2>Expansão comercial</h2>
              <p>Novas oportunidades<br />de forma previsível</p>
            </div>
          </div>
        </div>
        <aside className={styles.introduction}>
          <div className={styles.introductionHeading}><span><UserRound size={21} aria-hidden="true" /></span><strong>Miguel Neto — Método SAC</strong></div>
          <p>Mostro como sua empresa pode estruturar um segundo motor comercial para crescer com mais previsibilidade.</p>
        </aside>
      </div>
      <button type="button" onClick={onStart} className={styles.cta}>Ver se isso faz sentido para minha empresa <ArrowRight aria-hidden="true" /></button>
      <p className={styles.footnote}>Gratuito <span>•</span> Leva menos de 2 minutos <span>•</span> Sem compromisso</p>
    </section>
  );
}
