import Nosteam from "./Nosteam";
import styles from "./Pourquoichoisirnotreagence.module.css";

const Pourquoichoisirnotreagence = () => {
  return (
    <div className={styles.pourquoichoisirnotreagence}>
      <div className={styles.nosteam}>
        <img
          className={styles.artfactIcon}
          loading="eager"
          alt=""
          src="/artfact@2x.png"
        />
        <div className={styles.notremission}>
          <div className={styles.conceptionLogoEt}>
            Conception logo et charte graphique
          </div>
          <div className={styles.branding}>Branding</div>
        </div>
      </div>
      <Nosteam
        back="/back@2x.png"
        conceptionAffiche="Conception affiche"
        communicationDigitale="Communication digitale"
        propBackgroundImage="url('pending_I486:1219;486:1191')"
      />
      <div className={styles.nosteam1}>
        <img
          className={styles.brandAndCom}
          loading="eager"
          alt=""
          src="/brand-and-com@2x.png"
        />
        <div className={styles.rebrandingParent}>
          <div className={styles.rebranding}>Rebranding</div>
          <div className={styles.brandingconceptionWebcommun}>
            Branding/conception web/communication digitale
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pourquoichoisirnotreagence;
