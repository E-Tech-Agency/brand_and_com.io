import NewIdeasFrame from "./NewIdeasFrame";
import styles from "./PBackFrontFrame.module.css";

const PBackFrontFrame = () => {
  return (
    <section className={styles.pBackFrontFrame}>
      <NewIdeasFrame
        back="/back@2x.png"
        propBackgroundImage="url('pending_I486:1275;486:1261')"
      />
      <div className={styles.logoSiteWebBc}>
        <div className={styles.addressVector}>
          <div className={styles.besoinDeNouvellesContainer}>
            <p className={styles.besoinDeNouvelles}>
              Besoin de nouvelles idées
            </p>
            <p className={styles.familiarisezVousAvecNos}>
              Familiarisez-vous avec nos services
            </p>
          </div>
          <div className={styles.phoneNumberFrame}>
            <div className={styles.consultezNosServices}>
              <div className={styles.homePage} />
              <h3 className={styles.consultezNosServices1}>
                Consultez nos services
              </h3>
            </div>
          </div>
        </div>
      </div>
      <NewIdeasFrame
        back="/back@2x.png"
        propBackgroundImage="url('/front1@3x.png')"
      />
    </section>
  );
};

export default PBackFrontFrame;
