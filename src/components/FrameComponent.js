import Nosteam from "./Nosteam";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.nosclientsParent}>
      <Nosteam
        back="/back@2x.png"
        conceptionAffiche="Conception affiche"
        communicationDigitale="Communication digitale"
        propAlignSelf="stretch"
        propBoxShadow="unset"
        propBackgroundImage="url('/front4@3x.png')"
      />
      <div className={styles.p8}>
        <img
          className={styles.backIcon}
          loading="eager"
          alt=""
          src="/back@2x.png"
        />
        <div className={styles.front}>
          <div className={styles.optimisezVotrePrsence}>
            Optimisez votre présence en ligne avec nos sites web personnalisés,
            conçus sur mesure pour refléter votre identité, répondre à vos
            besoins, et vous démarquer de la concurrence
          </div>
        </div>
      </div>
      <div className={styles.conceptionWeb}>
        <div className={styles.conceptionAffiche}>Conception affiche</div>
        <div className={styles.communicationDigitale}>
          Communication digitale
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
