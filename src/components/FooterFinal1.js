import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FooterFinal1.module.css";

const FooterFinal1 = () => {
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
      <div className={styles.adresseFrameWrapper}>
        <div className={styles.adresseFrame} />
      </div>
      <div className={styles.emailFrame}>
        <img
          className={styles.logoSiteWebBc11}
          loading="eager"
          alt=""
          src="/logo-site-web-bc-1-1@2x.png"
        />
        <div className={styles.adresse}>
          <img
            className={styles.addressLineIcon}
            loading="eager"
            alt=""
            src="/vector-12.svg"
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
            className={styles.telephoneTextIcon}
            loading="eager"
            alt=""
            src="/vector-21.svg"
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
            src="/group-202.svg"
          />
          <div className={styles.separatorLine}>
            <p className={styles.p}>54 799 779</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className={styles.acceuilPortfolioDigitalAgenParent}>
        <div className={styles.acceuilPortfolioDigitalAgen}>
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
            <div className={styles.whyChooseUsFrame}>
              <div className={styles.contactFormFrame}>
                <div className={styles.contactDetailsFrame}>
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
            <div className={styles.brandingSection}>
              <div className={styles.logoAndAddressFrame}>
                <div className={styles.quiSommesNous}>Qui sommes nous ?</div>
                <div className={styles.notreMission}>{`Notre mission `}</div>
                <div className={styles.nosEngagements}>Nos engagements</div>
              </div>
            </div>
            <div className={styles.phoneFrame}>
              <div className={styles.footerFinalFrame}>
                <div className={styles.servicesFrame}>
                  <div className={styles.branding}>Branding</div>
                </div>
                <div className={styles.servicesFrame1}>
                  <div className={styles.communicationDigitale}>
                    Communication digitale
                  </div>
                </div>
                <div className={styles.servicesFrame2}>
                  <div className={styles.conceptionWeb}>Conception Web</div>
                </div>
              </div>
            </div>
            <div className={styles.framesServicesBrandingCommu}>
              <div className={styles.followUsLineFrame}>
                <b className={styles.services}>Services:</b>
              </div>
              <div className={styles.followUsLineFrame1}>
                <div className={styles.branding1}>Branding</div>
              </div>
              <div className={styles.followUsLineFrame2}>
                <div className={styles.communicationDigitale1}>
                  Communication digitale
                </div>
              </div>
              <div className={styles.followUsLineFrame3}>
                <div className={styles.conceptionWeb1}>Conception Web</div>
              </div>
              <div className={styles.followUsLineFrame4}>
                <b className={styles.packs}>Packs:</b>
              </div>
              <div className={styles.followUsLineFrame5}>
                <div className={styles.helloPack}>Hello pack</div>
              </div>
              <div className={styles.followUsLineFrame6}>
                <div className={styles.goPack}>Go pack</div>
              </div>
              <div className={styles.followUsLineFrame7}>
                <div className={styles.extraPack}>Extra pack</div>
              </div>
            </div>
          </div>
          <div className={styles.facebookVectorFrame}>
            <div className={styles.infoFrame}>
              <h3 className={styles.suivezNous}>Suivez-nous</h3>
              <div className={styles.vectorFrame} />
            </div>
            <div className={styles.frameGroupCommunicationDigi}>
              <img
                className={styles.helloPackGoPackExtraPack}
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className={styles.servicesBrandingCommunicatio}
                loading="eager"
                alt=""
                src="/vector-3.svg"
              />
              <img
                className={styles.facebookIcon}
                loading="eager"
                alt=""
                src="/facebook2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFinal1;
