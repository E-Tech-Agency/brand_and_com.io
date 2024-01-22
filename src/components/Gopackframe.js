import styles from "./Gopackframe.module.css";

const Gopackframe = () => {
  return (
    <section className={styles.gopackframe}>
      <div className={styles.extrapackframe}>
        <div className={styles.suiveznousline}>
          <div className={styles.pourquoiChoisirNotre}>
            Pourquoi choisir notre agence ?
          </div>
        </div>
        <div className={styles.chezNousChaque}>
          Chez nous, chaque touche porte l'empreinte de l'innovation, chaque
          campagne est une œuvre d'art digitale en mouvement. Nous ne sommes pas
          seulement des créateurs, nous sommes des magiciens digitaux, jonglant
          avec les idées pour sculpter des expériences uniques. Optez pour notre
          savoir-faire, où chaque projet devient une histoire, chaque
          collaboration une aventure. Parce que chez nous, la communication
          digitale n'est pas un service, c'est une passion. Prêts à transformer
          votre vision en une passion ?
        </div>
        <button className={styles.contactezNous}>
          <div className={styles.avenueHEDINOIRAtext} />
          <div className={styles.contactezNousWrapper}>
            <b className={styles.contactezNous1}>Contactez-nous</b>
          </div>
        </button>
      </div>
      <div className={styles.brandconcepttextParent}>
        <div className={styles.brandconcepttext}>
          <div className={styles.agilit}>
            <div className={styles.tmoignageclientsframeParent}>
              <div className={styles.tmoignageclientsframe} />
              <div className={styles.prisederendezvoustext}>01</div>
            </div>
            <div className={styles.text}>
              <div className={styles.agilit1}>Agilité</div>
              <div className={styles.footer}>
                <div className={styles.nousSommesAgiles}>
                  Nous sommes agiles pour nous adapter à vos besoins et vous
                  proposer des solutions personnalisées.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.crativit}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.div}>02</div>
            </div>
            <div className={styles.text1}>
              <div className={styles.crativit1}>Créativité</div>
              <div className={styles.nousSommesCratifsPourVousWrapper}>
                <div className={styles.nousSommesCratifsContainer}>
                  <p className={styles.nousSommesCratifs}>
                    Nous sommes créatifs pour vous aider à vous démarquer de la
                    concurrence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.portfolio}>
          <div className={styles.rapportQualitprix}>
            <div className={styles.contact}>
              <div className={styles.frameNosclientsParent}>
                <div className={styles.frameNosclients} />
                <div className={styles.pourquoichoisirnotreagence}>03</div>
              </div>
            </div>
            <div className={styles.text2}>
              <div className={styles.rapportQualitprix1}>
                Rapport qualité/prix
              </div>
              <div className={styles.nousAvonsUn}>
                Nous avons un excellent rapport qualité-prix pour vous permettre
                de faire des économies sans sacrifier la qualité
                de nos services.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gopackframe;
