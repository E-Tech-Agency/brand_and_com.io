import { useMemo } from "react";
import styles from "./NewIdeasFrame.module.css";

const NewIdeasFrame = ({ back, propBackgroundImage }) => {
  const frontStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.newIdeasFrame}>
      <div className={styles.p10}>
        <img className={styles.backIcon} loading="eager" alt="" src={back} />
        <div className={styles.front} style={frontStyle}>
          <div className={styles.optimisezVotrePrsence}>
            Optimisez votre présence en ligne avec nos sites web personnalisés,
            conçus sur mesure pour refléter votre identité, répondre à vos
            besoins, et vous démarquer de la concurrence
          </div>
        </div>
      </div>
      <div className={styles.conceptionSiteWeb}>
        Conception site web en cours
      </div>
    </div>
  );
};

export default NewIdeasFrame;
