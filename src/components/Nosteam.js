import { useMemo } from "react";
import styles from "./Nosteam.module.css";

const Nosteam = ({
  back,
  conceptionAffiche,
  communicationDigitale,
  propAlignSelf,
  propBoxShadow,
  propBackgroundImage,
}) => {
  const nosteamStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const p6Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const front1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.nosteam} style={nosteamStyle}>
      <div className={styles.p6} style={p6Style}>
        <img className={styles.backIcon} loading="eager" alt="" src={back} />
        <div className={styles.front} style={front1Style}>
          <div className={styles.optimisezVotrePrsence}>
            Optimisez votre présence en ligne avec nos sites web personnalisés,
            conçus sur mesure pour refléter votre identité, répondre à vos
            besoins, et vous démarquer de la concurrence
          </div>
        </div>
      </div>
      <div className={styles.conceptionAfficheParent}>
        <div className={styles.conceptionAffiche}>{conceptionAffiche}</div>
        <div className={styles.communicationDigitale}>
          {communicationDigitale}
        </div>
      </div>
    </div>
  );
};

export default Nosteam;
