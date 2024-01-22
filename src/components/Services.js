import { useCallback } from "react";
import styles from "./Services.module.css";

const Services = () => {
  const onGroup2Click = useCallback(() => {
    // Please sync "Conception web" to the project
  }, []);

  return (
    <div className={styles.services}>
      <div className={styles.quisommesnousNotremissionNos}>
        <img
          className={styles.brandingCommunicationdigitaleIcon}
          loading="eager"
          alt=""
          src="/vector2.svg"
        />
        <div className={styles.servicesBrandingCommunicatio}>
          <h2 className={styles.branding}>Branding</h2>
          <img
            className={styles.servicesBrandingCommunicatioChild}
            loading="eager"
            alt=""
            src="/group-210.svg"
          />
        </div>
      </div>
      <div className={styles.frameFramePourquoichoisirnot}>
        <div className={styles.nosservicesNosclientsOurteam} />
      </div>
      <div className={styles.vector}>
        <div className={styles.communicationDigitaleParent}>
          <h2
            className={styles.communicationDigitale}
          >{`Communication digitale `}</h2>
          <img
            className={styles.frameChild}
            loading="eager"
            alt=""
            src="/group-211.svg"
          />
        </div>
      </div>
      <div className={styles.frameFramePourquoichoisirnot1}>
        <div className={styles.frameFramePourquoichoisirnotChild} />
      </div>
      <div className={styles.image}>
        <div className={styles.conceptionWebParent}>
          <h2 className={styles.conceptionWeb}>Conception web</h2>
          <img
            className={styles.frameItem}
            loading="eager"
            alt=""
            src="/group-213.svg"
            onClick={onGroup2Click}
          />
        </div>
        <div className={styles.imageFrame}>
          <img
            className={styles.contentGroupIcon}
            loading="eager"
            alt=""
            src="/vector-13.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
