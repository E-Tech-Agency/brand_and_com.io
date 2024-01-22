import styles from "./Gopack.module.css";

const Gopack = () => {
  return (
    <div className={styles.gopack}>
      <div className={styles.extrapack}>
        <div className={styles.suiveznous}>
          <div className={styles.vectorFacebook}>
            <img
              className={styles.arrowIcon}
              loading="eager"
              alt=""
              src="/star-7.svg"
            />
            <img
              className={styles.arrowIcon1}
              loading="eager"
              alt=""
              src="/star-7.svg"
            />
            <img
              className={styles.arrowIcon2}
              loading="eager"
              alt=""
              src="/star-7.svg"
            />
            <img
              className={styles.arrowIcon3}
              loading="eager"
              alt=""
              src="/star-7.svg"
            />
            <img className={styles.arrowIcon4} alt="" src="/star-7.svg" />
          </div>
          <div className={styles.japprcieVotreTravailMercParent}>
            <div className={styles.japprcieVotreTravailContainer}>
              <p className={styles.japprcieVotreTravail}>
                J'apprécie votre travail, merci beaucoup, c'est bien d'enrichir
                les publicités sur les formations par un contenu.
              </p>
              <p className={styles.aussiLideDes}>
                Aussi l'idée des livres intéressant à lire et les success
                stories est une bonne idée aussi, et la distinction entre des
                concepts, le quiz. Toute ces Initiatives sont bonnes, très bonne
                continuation. Merci
              </p>
            </div>
            <div className={styles.adresse}>
              <input className={styles.input} type="checkbox" />
              <input className={styles.input1} type="checkbox" />
              <img className={styles.icon} alt="" src="/-2.svg" />
              <img className={styles.icon1} alt="" src="/-3.svg" />
              <img className={styles.icon2} alt="" src="/-4.svg" />
              <img className={styles.icon3} alt="" src="/-5.svg" />
              <input className={styles.input2} type="checkbox" />
              <img className={styles.icon4} alt="" src="/-7.svg" />
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <img
          className={styles.brandconceptIcon}
          loading="eager"
          alt=""
          src="/polygon-1.svg"
        />
      </div>
      <div className={styles.servicesetpacks}>
        <b className={styles.desRfrencesPrcieuses}>Des références précieuses</b>
        <div className={styles.votreExprienceCompte}>
          Votre expérience compte! Partagez votre succès avec nous. Ensemble
          nous créons un impact inoubliable dans le monde digital.
        </div>
        <button className={styles.laissezNousUnAvis}>
          <div className={styles.communicationdigitale} />
          <b className={styles.laissezNousUnAvis1}>Laissez-nous un avis</b>
        </button>
      </div>
    </div>
  );
};

export default Gopack;
