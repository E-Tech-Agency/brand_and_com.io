import styles from "./Suiveznous.module.css";

const Suiveznous = () => {
  return (
    <section className={styles.suiveznous}>
      <div className={styles.facebookVector}>
        <img
          className={styles.facebookVectorChild}
          loading="eager"
          alt=""
          src="/group-127.svg"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h3 className={styles.aaslmaJeSuisContainer}>
            <span>
              <span>{`Aasléma, je suis `}</span>
              <b className={styles.hafa}>Haïfa</b>
              <span>{` “Brandista” de BRAND and COM (je m’occupe de tout ce qui est Community Manager, Account Manager et Social Media Manager) `}</span>
            </span>
          </h3>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.lesBrandistasDeContainer}>
          <p className={styles.lesBrandistas}>{`Les Brandistas `}</p>
          <p className={styles.deBrand}>{`de Brand & COM:`}</p>
        </div>
      </div>
      <div className={styles.facebookVector1}>
        <img
          className={styles.facebookVectorItem}
          loading="eager"
          alt=""
          src="/group-116.svg"
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.amalLaBrandistaContainer}>
            <span>
              <b>Amal</b>
              <span className={styles.laBrandistaDe}>
                , la “Brandista” de l'esthétique, concoctant des designs qui
                réveillent les sens. Imaginez-moi comme une artiste du latte
                art, mais au lieu de mousser le lait
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suiveznous;
