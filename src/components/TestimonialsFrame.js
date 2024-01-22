import styles from "./TestimonialsFrame.module.css";

const TestimonialsFrame = () => {
  return (
    <section className={styles.testimonialsFrame}>
      <div className={styles.priseDeRendezVous}>
        <div className={styles.quiSommesNous}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h3 className={styles.infusantChaqueProjet}>
              infusant chaque projet d'un arôme unique de créativité, une
              expérience caféinée dont on se souvient longtemps après la
              dernière goutte!
            </h3>
          </div>
          <div className={styles.brandingCommunicationDigital}>
            <div className={styles.notreMission}>Notre mission</div>
            <h3 className={styles.transformerDesConceptsContainer}>
              <p
                className={styles.transformerDesConcepts}
              >{`Transformer des concepts abstraits en logos mémorables, des mots en messages puissants et des idées en campagnes inoubliables. Avec une passion ardente pour l'innovation et la créativité, nous vous invitons à rejoindre notre aventure. Ensemble, nous sculpterons votre histoire, connecterons votre marque au monde numérique et laisserons une empreinte indélébile dans le paysage digital. Bienvenue chez "Brand and Com", `}</p>
              <p className={styles.oChaquePixel}>
                où chaque pixel est une toile, chaque clic est une opportunité
                et chaque client est une histoire à raconter.
              </p>
            </h3>
          </div>
        </div>
        <div className={styles.nosEngagements}>Nos engagements</div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <h3 className={styles.onNeFait}>
            On ne fait pas dans la lenteur, parce qu'on sait que la créativité
            n'attend pas. Entrez dans notre univers, où chaque projet est une
            aventure express, et où le sérieux est laissé à la porte. Bienvenue
            chez BRAND and COM, où la créativité est servie à la vitesse de
            l'éclair
          </h3>
        </div>
        <img
          className={styles.contactInfoChild}
          loading="eager"
          alt=""
          src="/group-144@2x.png"
        />
      </div>
    </section>
  );
};

export default TestimonialsFrame;
