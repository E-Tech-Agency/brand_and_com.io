import styles from "./ReportingDashboard.module.css";

const ReportingDashboard = () => {
  return (
    <div className={styles.reportingDashboard}>
      <div className={styles.helloPack}>
        <div className={styles.timeStamp} />
        <div className={styles.publicationSectionGroup}>
          <h1 className={styles.helloPack1}>Hello pack</h1>
          <div className={styles.dt}>350 DT</div>
          <div className={styles.welcomeContactHeaderParent}>
            <img
              className={styles.welcomeContactHeader}
              loading="eager"
              alt=""
              src="/vector-22.svg"
            />
            <h3
              className={styles.publicationsmois}
            >{`8 publications/mois `}</h3>
          </div>
          <div className={styles.ourServicesContainerParent}>
            <div className={styles.ourServicesContainer}>
              <img
                className={styles.menuFrameContainer}
                loading="eager"
                alt=""
                src="/vector-31.svg"
              />
            </div>
            <h3 className={styles.gestionInstagramContainer}>
              <span>
                <span>{`Gestion `}</span>
                <b className={styles.instagram}>Instagram</b>
                <span>{` & `}</span>
                <b className={styles.facebook}>Facebook</b>
              </span>
            </h3>
          </div>
          <div className={styles.testimonialFrameParent}>
            <div className={styles.testimonialFrame}>
              <img
                className={styles.scheduleAppointmentFrame}
                loading="eager"
                alt=""
                src="/vector-31.svg"
              />
            </div>
            <h3 className={styles.reportingMensuelDes}>
              Reporting mensuel des performances
            </h3>
          </div>
          <button className={styles.personnalisezVotreCrneau1}>
            <img
              className={styles.personnalisezVotreCrneau1Child}
              alt=""
              src="/rectangle-3855.svg"
            />
            <b className={styles.personnalisezVotreCrneau}>
              Personnalisez votre créneau
            </b>
          </button>
        </div>
      </div>
      <div className={styles.extraFeaturesContainer}>
        <div className={styles.goPack}>
          <div className={styles.headerGroup} />
          <div className={styles.vectorFrame}>
            <div className={styles.goPackParent}>
              <div className={styles.goPack1}>
                <div className={styles.textInstance} />
              </div>
              <div className={styles.packLePlus}>Pack le plus vendu</div>
            </div>
          </div>
          <div className={styles.gopack}>
            <div className={styles.dT}>
              <h1 className={styles.goPack2}>Go pack</h1>
              <div className={styles.dt1}>500 DT</div>
              <div className={styles.vectorVectorParent}>
                <img
                  className={styles.vectorVectorIcon}
                  loading="eager"
                  alt=""
                  src="/vector-5.svg"
                />
                <h3
                  className={styles.publicationsmois1}
                >{`12 publications/mois `}</h3>
              </div>
              <div className={styles.frameVectorParent}>
                <div className={styles.frameVector}>
                  <img
                    className={styles.gestionInstagramFacebook}
                    loading="eager"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <h3 className={styles.gestionInstagramContainer1}>
                  <span>
                    <span>{`Gestion `}</span>
                    <b>Instagram</b>
                    <span>{` & `}</span>
                    <b>Facebook</b>
                  </span>
                </h3>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    loading="eager"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <h3 className={styles.reportingMensuelDes1}>
                  Reporting mensuel des performances
                </h3>
              </div>
              <button className={styles.personnalisezVotreCrneau2}>
                <div className={styles.rectangleRectangle} />
                <b className={styles.personnalisezVotreCrneau3}>
                  Personnalisez votre créneau
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.extraPack}>
        <div className={styles.extraPackChild} />
        <div className={styles.extraPackParent}>
          <h1 className={styles.extraPack1}>Extra pack</h1>
          <div className={styles.dt2}>750 DT</div>
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon1}
              loading="eager"
              alt=""
              src="/vector-8.svg"
            />
            <h3
              className={styles.publicationsmois2}
            >{`16 publications/mois `}</h3>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.vectorContainer}>
              <img
                className={styles.vectorIcon2}
                loading="eager"
                alt=""
                src="/vector-31.svg"
              />
            </div>
            <h3 className={styles.gestionInstagramContainer2}>
              <span>
                <span>{`Gestion `}</span>
                <b className={styles.instagram1}>Instagram</b>
                <span>{` & `}</span>
                <b className={styles.facebook1}>Facebook</b>
              </span>
            </h3>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <img
                className={styles.vectorIcon3}
                loading="eager"
                alt=""
                src="/vector-31.svg"
              />
            </div>
            <h3 className={styles.publicationsmoisLinkedin}>
              <span>{`4 publications/mois `}</span>
              <b className={styles.linkedin}>LinkedIn</b>
            </h3>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.webCreationFrameWrapper}>
              <img
                className={styles.webCreationFrame}
                loading="eager"
                alt=""
                src="/vector-31.svg"
              />
            </div>
            <h3 className={styles.reportingMensuelDesContainer}>
              <span>
                <p className={styles.reportingMensuelDes2}>
                  Reporting mensuel des performances
                </p>
                <p className={styles.recommandations}>+Recommandations</p>
              </span>
            </h3>
          </div>
          <button className={styles.personnalisezVotreCrneau11}>
            <img
              className={styles.personnalisezVotreCrneau1Item}
              alt=""
              src="/rectangle-3855.svg"
            />
            <b className={styles.personnalisezVotreCrneau4}>
              Personnalisez votre créneau
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportingDashboard;
