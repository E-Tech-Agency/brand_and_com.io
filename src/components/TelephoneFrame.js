import styles from "./TelephoneFrame.module.css";

const TelephoneFrame = () => {
  return (
    <div className={styles.telephoneFrame}>
      <div className={styles.groupAcceuilFrame}>
        <div className={styles.frameBrandAndCom}>
          <img
            className={styles.artfactIcon}
            loading="eager"
            alt=""
            src="/artfact@2x.png"
          />
          <div className={styles.conceptionLogoEt}>
            Conception logo et charte graphique
          </div>
        </div>
        <div className={styles.frameBrandAndCom1}>
          <img
            className={styles.talentLinkIcon}
            loading="eager"
            alt=""
            src="/talent-link@2x.png"
          />
          <div className={styles.conceptionLogoEt1}>
            Conception logo et charte graphique
          </div>
        </div>
      </div>
      <div className={styles.menuFrame}>
        <div className={styles.frameOurTeam}>
          <div className={styles.framePourquoiChoisirNous}>
            <div className={styles.besoinDeNouvellesContainer}>
              <p className={styles.besoinDeNouvelles}>
                Besoin de nouvelles idées
              </p>
              <p className={styles.familiarisezVousAvecNos}>
                Familiarisez-vous avec nos services
              </p>
            </div>
            <div className={styles.frameOurEngagements}>
              <div className={styles.consultezNosServices}>
                <div className={styles.servicesBrandingCommunicatio} />
                <h3 className={styles.consultezNosServices1}>
                  Consultez nos services
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameNosMissionNosEngageme}>
          <img
            className={styles.brandAndCom}
            loading="eager"
            alt=""
            src="/brand-and-com@2x.png"
          />
          <div className={styles.rebranding}>Rebranding</div>
        </div>
      </div>
    </div>
  );
};

export default TelephoneFrame;
