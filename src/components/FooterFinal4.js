import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FooterFinal4.module.css";

const FooterFinal4 = () => {
  const navigate = useNavigate();

  const onAcceuilTextClick = useCallback(() => {
    navigate("/acceuil");
  }, [navigate]);

  const onBrandConceptTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPortfolioTextClick = useCallback(() => {
    navigate("/portfolio-14");
  }, [navigate]);

  const onServicesEtPacksClick = useCallback(() => {
    // Please sync "branding" to the project
  }, []);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <footer className={styles.footerFinal}>
      <div className={styles.footerFinalInner}>
        <div className={styles.instanceChild} />
      </div>
      <div className={styles.frameAcceuil}>
        <img
          className={styles.logoSiteWebBc11}
          loading="eager"
          alt=""
          src="/logo-site-web-bc-1-1@2x.png"
        />
        <div className={styles.adresse}>
          <img
            className={styles.adresseIcon}
            loading="eager"
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
          <img
            className={styles.vectorIcon}
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
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
            src="/group-204.svg"
          />
          <div className={styles.brandconceptText}>
            <p className={styles.p}>54 799 779</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.acceuilParent}>
          <div className={styles.acceuil} onClick={onAcceuilTextClick}>
            Acceuil
          </div>
          <div
            className={styles.brandConcept}
            onClick={onBrandConceptTextClick}
          >
            Brand-concept
          </div>
          <div className={styles.portfolio} onClick={onPortfolioTextClick}>
            Portfolio
          </div>
          <div
            className={styles.servicesEtPacks}
            onClick={onServicesEtPacksClick}
          >{`Services et packs `}</div>
          <div className={styles.digiNews}>Digi-News</div>
          <div className={styles.contact} onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <div className={styles.frameQuiSommesNous}>
          <div className={styles.menu}>
            <div className={styles.frameClientTestimonials}>
              <div className={styles.frameServicesBrandingCommun}>
                <div className={styles.nosServicesWrapper}>
                  <div className={styles.nosServices}>Nos services</div>
                </div>
              </div>
              <div className={styles.ourTeam}>
                <div className={styles.nosClients}>{`Nos clients `}</div>
              </div>
              <div className={styles.pourquoiChoisirNotre}>
                Pourquoi choisir notre agence ?
              </div>
              <div className={styles.ourTeam1}>
                <div className={styles.ourTeam2}>{`Our team `}</div>
              </div>
              <div className={styles.tmoignageClients}>Témoignage clients</div>
              <div className={styles.priseDeRendezVous}>
                Prise de Rendez-vous
              </div>
            </div>
            <div className={styles.missionFrame}>
              <div className={styles.ourTeamFrame}>
                <div className={styles.quiSommesNous}>Qui sommes nous ?</div>
                <div className={styles.notreMission}>{`Notre mission `}</div>
                <div className={styles.nosEngagements}>Nos engagements</div>
              </div>
            </div>
            <div className={styles.servicesSection}>
              <div className={styles.facebookIcon}>
                <div className={styles.framenosservicesBrandingComm}>
                  <div className={styles.branding}>Branding</div>
                </div>
                <div className={styles.framenosservicesBrandingComm1}>
                  <div className={styles.communicationDigitale}>
                    Communication digitale
                  </div>
                </div>
                <div className={styles.framenosservicesBrandingComm2}>
                  <div className={styles.conceptionWeb}>Conception Web</div>
                </div>
              </div>
            </div>
            <div className={styles.framesContainer}>
              <div className={styles.mainMenu}>
                <b className={styles.services}>Services:</b>
              </div>
              <div className={styles.mainMenu1}>
                <div className={styles.branding1}>Branding</div>
              </div>
              <div className={styles.mainMenu2}>
                <div className={styles.communicationDigitale1}>
                  Communication digitale
                </div>
              </div>
              <div className={styles.mainMenu3}>
                <div className={styles.conceptionWeb1}>Conception Web</div>
              </div>
              <div className={styles.mainMenu4}>
                <b className={styles.packs}>Packs:</b>
              </div>
              <div className={styles.mainMenu5}>
                <div className={styles.helloPack}>Hello pack</div>
              </div>
              <div className={styles.mainMenu6}>
                <div className={styles.goPack}>Go pack</div>
              </div>
              <div className={styles.mainMenu7}>
                <div className={styles.extraPack}>Extra pack</div>
              </div>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.followUsLink}>
              <div className={styles.suivezNous}>Suivez-nous</div>
              <div className={styles.facebookVector} />
            </div>
            <div className={styles.facebookFrame}>
              <img
                className={styles.ourTeamText}
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className={styles.nosClientsText}
                loading="eager"
                alt=""
                src="/vector-3.svg"
              />
              <img
                className={styles.facebookIcon1}
                loading="eager"
                alt=""
                src="/facebook.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFinal4;
