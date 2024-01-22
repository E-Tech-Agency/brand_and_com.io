import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FooterFinal.module.css";

const FooterFinal = () => {
  const navigate = useNavigate();

  const onAcceuilClick = useCallback(() => {
    navigate("/acceuil");
  }, [navigate]);

  const onBrandConceptClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPortfolioClick = useCallback(() => {
    navigate("/portfolio-14");
  }, [navigate]);

  const onServicesEtPacksClick = useCallback(() => {
    // Please sync "branding" to the project
  }, []);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <footer className={styles.footerFinal}>
      <div className={styles.vectorWrapper}>
        <div className={styles.vector} />
      </div>
      <div className={styles.contactInfo}>
        <img
          className={styles.logoSiteWebBc11}
          loading="eager"
          alt=""
          src="/logo-site-web-bc-1-1@2x.png"
        />
        <div className={styles.adresse}>
          <img
            className={styles.groupIcon}
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
            className={styles.whyChooseUs}
            loading="eager"
            alt=""
            src="/vector-11.svg"
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
            src="/group-201.svg"
          />
          <div className={styles.brandconcept}>
            <p className={styles.p}>54 799 779</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className={styles.mainMenuParent}>
        <div className={styles.mainMenu}>
          <h2 className={styles.acceuil} onClick={onAcceuilClick}>
            Acceuil
          </h2>
          <h2 className={styles.brandConcept} onClick={onBrandConceptClick}>
            Brand-concept
          </h2>
          <h2 className={styles.portfolio} onClick={onPortfolioClick}>
            Portfolio
          </h2>
          <h2
            className={styles.servicesEtPacks}
            onClick={onServicesEtPacksClick}
          >{`Services et packs `}</h2>
          <h2 className={styles.digiNews}>Digi-News</h2>
          <h2 className={styles.contact} onClick={onContactClick}>
            Contact
          </h2>
        </div>
        <div className={styles.menuFrame}>
          <div className={styles.menu}>
            <div className={styles.whyUsFrame}>
              <div className={styles.servicesFrame}>
                <div className={styles.quiSommesNousFrame}>
                  <div className={styles.nosServices}>Nos services</div>
                </div>
              </div>
              <div className={styles.ourTeamFrame}>
                <div className={styles.nosClients}>{`Nos clients `}</div>
              </div>
              <div className={styles.pourquoiChoisirNotre}>
                Pourquoi choisir notre agence ?
              </div>
              <div className={styles.ourTeamFrame1}>
                <div className={styles.ourTeam}>{`Our team `}</div>
              </div>
              <div className={styles.tmoignageClients}>Témoignage clients</div>
              <div className={styles.priseDeRendezVous}>
                Prise de Rendez-vous
              </div>
            </div>
            <div className={styles.engagementsFrame}>
              <div className={styles.brandingCommunicationDigital}>
                <div className={styles.quiSommesNous}>Qui sommes nous ?</div>
                <div className={styles.notreMission}>{`Notre mission `}</div>
                <div className={styles.nosEngagements}>Nos engagements</div>
              </div>
            </div>
            <div className={styles.suiveznousFrame}>
              <div className={styles.facebookVectorFrame}>
                <div className={styles.facebookLogoFrame}>
                  <div className={styles.branding}>Branding</div>
                </div>
                <div className={styles.facebookLogoFrame1}>
                  <div className={styles.communicationDigitale}>
                    Communication digitale
                  </div>
                </div>
                <div className={styles.facebookLogoFrame2}>
                  <div className={styles.conceptionWeb}>Conception Web</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.servicesWrapper}>
                <b className={styles.services}>Services:</b>
              </div>
              <div className={styles.brandingWrapper}>
                <div className={styles.branding1}>Branding</div>
              </div>
              <div className={styles.communicationDigitaleWrapper}>
                <div className={styles.communicationDigitale1}>
                  Communication digitale
                </div>
              </div>
              <div className={styles.conceptionWebWrapper}>
                <div className={styles.conceptionWeb1}>Conception Web</div>
              </div>
              <div className={styles.packsWrapper}>
                <b className={styles.packs}>Packs:</b>
              </div>
              <div className={styles.helloPackWrapper}>
                <div className={styles.helloPack}>Hello pack</div>
              </div>
              <div className={styles.goPackWrapper}>
                <div className={styles.goPack}>Go pack</div>
              </div>
              <div className={styles.extraPackWrapper}>
                <div className={styles.extraPack}>Extra pack</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.suivezNousParent}>
              <h3 className={styles.suivezNous}>Suivez-nous</h3>
              <div className={styles.logoWebsiteBCFrame} />
            </div>
            <div className={styles.adresseFrame}>
              <img
                className={styles.telephoneFrameIcon}
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className={styles.emailAddressFrame}
                loading="eager"
                alt=""
                src="/vector-3.svg"
              />
              <img
                className={styles.facebookIcon}
                loading="eager"
                alt=""
                src="/facebook1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFinal;
