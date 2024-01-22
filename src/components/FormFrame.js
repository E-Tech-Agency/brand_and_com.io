import styles from "./FormFrame.module.css";

const FormFrame = () => {
  return (
    <section className={styles.formFrame}>
      <div className={styles.lineFrame}>
        <h1 className={styles.contactezNous}>Contactez-nous</h1>
        <div className={styles.sendButtonFrame}>
          <div className={styles.communicationDigitalFrame}>
            <div className={styles.conceptionWebFrame} />
            <h1 className={styles.avezVousUnProjet}>Avez-vous un projet ?</h1>
          </div>
        </div>
      </div>
      <div className={styles.nameAndEmailFrame}>
        <div className={styles.detailsProjectFrame}>
          <div className={styles.footerFinalFrame}>
            <h1 className={styles.quePouvonsNousFaire}>
              Que pouvons-nous faire pour vous ?
            </h1>
            <div className={styles.notProvided}>
              <div className={styles.notProvided1}>
                <div className={styles.notProvided2}>
                  <button className={styles.branding}>
                    <div className={styles.brandingBox} />
                    <div className={styles.branding1}>Branding</div>
                  </button>
                  <h3 className={styles.nomEtPrnom}>Nom et prénom</h3>
                </div>
                <button className={styles.communicationDigitale}>
                  <div className={styles.notProvided3} />
                  <div className={styles.communicationDigitale1}>
                    Communication digitale
                  </div>
                </button>
                <button className={styles.conceptionWeb}>
                  <div className={styles.conceptionWebChild} />
                  <div className={styles.conceptionWeb1}>cONCEPTION wEB</div>
                </button>
              </div>
              <div className={styles.notProvided4}>
                <div className={styles.notProvided5} />
              </div>
              <div className={styles.notProvided6}>
                <h3 className={styles.adresseEMail}>Adresse e-mail</h3>
                <div className={styles.notProvided7} />
              </div>
              <div className={styles.notProvided8}>
                <h3 className={styles.numroDeTlphone}>Numéro de téléphone</h3>
                <div className={styles.notProvidedChild} />
              </div>
              <h3 className={styles.dtailsProjet}>Détails Projet</h3>
              <div className={styles.notProvided9}>
                <div className={styles.notProvidedItem} />
              </div>
              <div className={styles.textFrame}>
                <button className={styles.envoyer}>
                  <div className={styles.envoyerChild} />
                  <div className={styles.group}>
                    <div className={styles.frameParent}>
                      <div className={styles.envoyerWrapper}>
                        <b className={styles.envoyer1}>Envoyer</b>
                      </div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.footerFrameIcon}
          loading="eager"
          alt=""
          src="/rectangle-34@2x.png"
        />
      </div>
    </section>
  );
};

export default FormFrame;
