import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <section className={styles.fondParent}>
      <div className={styles.fond} />
      <div className={styles.pourquoichoisirnotreagence}>
        <img
          className={styles.subtractIcon}
          loading="eager"
          alt=""
          src="/subtract@2x.png"
        />
      </div>
      <div className={styles.prisedezRendezvous}>
        <div className={styles.nosServices}>Nos Services</div>
        <div className={styles.nosclients}>
          <div className={styles.ourteam}>
            <div className={styles.notremission}>
              <div className={styles.nosengagements}>
                <div className={styles.branding}>
                  <div className={styles.communicationdigitale} />
                  <b className={styles.conceptionWeb}>01</b>
                </div>
                <div className={styles.branding1}>Branding</div>
              </div>
              <div className={styles.brandingCommunicationdigitale}>
                <div className={styles.packs}>
                  <div className={styles.faonnonsVotreIdentitContainer}>
                    <p
                      className={styles.faonnonsVotreIdentit}
                    >{`Façonnons votre identité, écrivons votre histoire, et dessinons l'avenir de votre marque avec passion et créativité. `}</p>
                    <p className={styles.dcouvrezLePouvoir}>
                      Découvrez le pouvoir du branding au service de votre
                      succès.
                    </p>
                  </div>
                  <div className={styles.gopack}>
                    <img
                      className={styles.brandingIcon}
                      loading="eager"
                      alt=""
                      src="/branding.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.quiSommesNous} />
            <div className={styles.suiveznous}>
              <div className={styles.vectorFacebook}>
                <div className={styles.frameVectorFacebook} />
                <b className={styles.arrow}>02</b>
              </div>
              <div className={styles.communicationDigitale}>
                Communication digitale
              </div>
            </div>
            <div className={styles.rectanglelogo}>
              <div className={styles.connectonsVotreMarqueAuMonParent}>
                <div className={styles.connectonsVotreMarque}>
                  Connectons votre marque au monde numérique avec une stratégie
                  intelligente, des contenus captivants et une présence en ligne
                  inégalée. Laissez-nous être la voix de votre succès digital.
                </div>
                <div className={styles.servicegroup}>
                  <img
                    className={styles.comIcon}
                    loading="eager"
                    alt=""
                    src="/com.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.quiSommesNous1} />
            <div className={styles.quisommesnousframeParent}>
              <div className={styles.quisommesnousframe}>
                <div className={styles.missiontext}>
                  <div className={styles.engagementstext} />
                  <b className={styles.brandingservicesframe}>03</b>
                </div>
                <div className={styles.conceptionWeb1}>Conception web</div>
              </div>
              <div className={styles.conceptionwebframe}>
                <div className={styles.servicestext}>
                  <div className={styles.optimisezVotrePrsence}>
                    Optimisez votre présence en ligne avec nos sites web
                    personnalisés, conçus sur mesure pour refléter votre
                    identité, répondre à vos besoins, et vous démarquer de la
                    concurrence
                  </div>
                  <img className={styles.webIcon} alt="" src="/com.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
