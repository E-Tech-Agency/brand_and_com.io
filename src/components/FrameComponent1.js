import { useCallback } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const onArrowIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navItems']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.footerFinalParent}>
      <div className={styles.footerFinal}>
        <div className={styles.containerFrameWrapper}>
          <div className={styles.containerFrame} />
        </div>
        <div className={styles.bottomPanel}>
          <img
            className={styles.logoSiteWebBc11}
            loading="eager"
            alt=""
            src="/logo-site-web-bc-1-1@2x.png"
          />
          <div className={styles.adresse}>
            <img
              className={styles.locationDetailsIcon}
              alt=""
              src="/vector.svg"
            />
            <div className={styles.avenueHdiNouiraContainer}>
              <p className={styles.avenueHdiNouira}>
                Avenue Hédi Nouira - Résidence Maya
              </p>
              <p className={styles.bureauN1C}>
                Bureau -N°1-C - 1er Etage - Ennaser 2, Ariana.
              </p>
            </div>
          </div>
          <div className={styles.eMail}>
            <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
            <div className={styles.contactbmgtn}>
              <p className={styles.contactbmgtn1}>contact@bmg.tn</p>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
          <div className={styles.tlphone}>
            <img
              className={styles.tlphoneChild}
              loading="eager"
              alt=""
              src="/group-20.svg"
            />
            <div className={styles.phoneEmail}>
              <p className={styles.p}>54 799 779</p>
              <p className={styles.blankLine1}>&nbsp;</p>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.acceuilParent}>
            <div className={styles.acceuil}>Acceuil</div>
            <div className={styles.brandConcept}>Brand-concept</div>
            <div className={styles.portfolio}>Portfolio</div>
            <div className={styles.servicesEtPacks}>{`Services et packs `}</div>
            <div className={styles.digiNews}>Digi-News</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.navigationMenu}>
            <div className={styles.menu}>
              <div className={styles.ourServicesClientsTeamParent}>
                <div className={styles.ourServicesClientsTeam}>
                  <div className={styles.nosServices}>Nos services</div>
                </div>
                <div className={styles.ourServicesClientsTeam1}>
                  <div className={styles.nosClients}>{`Nos clients `}</div>
                </div>
                <div className={styles.pourquoiChoisirNotre}>
                  Pourquoi choisir notre agence ?
                </div>
                <div className={styles.ourServicesClientsTeam2}>
                  <div className={styles.ourTeam}>{`Our team `}</div>
                </div>
                <div className={styles.tmoignageClients}>
                  Témoignage clients
                </div>
                <div className={styles.priseDeRendezVous}>
                  Prise de Rendez-vous
                </div>
              </div>
              <div className={styles.whoWeAreMissionCommitments}>
                <div className={styles.quiSommesNousParent}>
                  <div className={styles.quiSommesNous}>Qui sommes nous ?</div>
                  <div className={styles.notreMission}>{`Notre mission `}</div>
                  <div className={styles.nosEngagements}>Nos engagements</div>
                </div>
              </div>
              <div className={styles.brandDesignCommunicationDig}>
                <div className={styles.framesForServicesBrandingCParent}>
                  <div className={styles.framesForServicesBrandingC}>
                    <div className={styles.branding}>Branding</div>
                  </div>
                  <div className={styles.framesForServicesBrandingC1}>
                    <div className={styles.communicationDigitale}>
                      Communication digitale
                    </div>
                  </div>
                  <div className={styles.framesForServicesBrandingC2}>
                    <div className={styles.conceptionWeb}>Conception Web</div>
                  </div>
                </div>
              </div>
              <div className={styles.chooseUsPackHelloGoExtra}>
                <div className={styles.connectWithUsOnFacebook}>
                  <b className={styles.services}>Services:</b>
                </div>
                <div className={styles.connectWithUsOnFacebook1}>
                  <div className={styles.branding1}>Branding</div>
                </div>
                <div className={styles.connectWithUsOnFacebook2}>
                  <div className={styles.communicationDigitale1}>
                    Communication digitale
                  </div>
                </div>
                <div className={styles.connectWithUsOnFacebook3}>
                  <div className={styles.conceptionWeb1}>Conception Web</div>
                </div>
                <div className={styles.connectWithUsOnFacebook4}>
                  <b className={styles.packs}>Packs:</b>
                </div>
                <div className={styles.connectWithUsOnFacebook5}>
                  <div className={styles.helloPack}>Hello pack</div>
                </div>
                <div className={styles.connectWithUsOnFacebook6}>
                  <div className={styles.goPack}>Go pack</div>
                </div>
                <div className={styles.connectWithUsOnFacebook7}>
                  <div className={styles.extraPack}>Extra pack</div>
                </div>
              </div>
            </div>
            <div className={styles.footerFrame}>
              <div className={styles.acceuilFrame}>
                <div className={styles.suivezNous}>Suivez-nous</div>
                <div className={styles.adresse1} />
              </div>
              <div className={styles.email}>
                <img className={styles.menuIcon} alt="" src="/vector-2.svg" />
                <img
                  className={styles.tlphoneIcon}
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className={styles.facebookIcon}
                  loading="eager"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.arrowIcon}
        alt=""
        src="/arrow-2.svg"
        onClick={onArrowIconClick}
      />
    </div>
  );
};

export default FrameComponent1;
