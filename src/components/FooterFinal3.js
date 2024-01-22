import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FooterFinal3.module.css";

const FooterFinal3 = () => {
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
    <section className={styles.footerFinal}>
      <div className={styles.logoFrameWrapper}>
        <div className={styles.logoFrame} />
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
            className={styles.emailInputIcon}
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
            className={styles.homePortfolioIcon}
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
            src="/group-203.svg"
          />
          <div className={styles.servicesMenu}>
            <p className={styles.p}>54 799 779</p>
            <p className={styles.blankLine1}>&nbsp;</p>
          </div>
        </div>
      </div>
      <footer className={styles.headerGroupParent}>
        <div className={styles.headerGroup}>
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
        <div className={styles.whyChooseUs}>
          <div className={styles.menu}>
            <div className={styles.nosClients}>
              <div className={styles.missionStatement}>
                <div className={styles.engagements}>
                  <div className={styles.nosServices}>Nos services</div>
                </div>
              </div>
              <div className={styles.servicesFrame}>
                <div className={styles.nosClients1}>{`Nos clients `}</div>
              </div>
              <div className={styles.pourquoiChoisirNotre}>
                Pourquoi choisir notre agence ?
              </div>
              <div className={styles.servicesFrame1}>
                <div className={styles.ourTeam}>{`Our team `}</div>
              </div>
              <div className={styles.tmoignageClients}>Témoignage clients</div>
              <div className={styles.priseDeRendezVous}>
                Prise de Rendez-vous
              </div>
            </div>
            <div className={styles.communicationDigitalFrame}>
              <div className={styles.conceptionWebFrame}>
                <div className={styles.quiSommesNous}>Qui sommes nous ?</div>
                <div className={styles.notreMission}>{`Notre mission `}</div>
                <div className={styles.nosEngagements}>Nos engagements</div>
              </div>
            </div>
            <div className={styles.brandCommunication}>
              <div className={styles.servicesSection}>
                <div className={styles.ourTeam1}>
                  <div className={styles.branding}>Branding</div>
                </div>
                <div className={styles.ourTeam2}>
                  <div className={styles.communicationDigitale}>
                    Communication digitale
                  </div>
                </div>
                <div className={styles.ourTeam3}>
                  <div className={styles.conceptionWeb}>Conception Web</div>
                </div>
              </div>
            </div>
            <div className={styles.whatWeDo}>
              <div className={styles.packagesOffered}>
                <b className={styles.services}>Services:</b>
              </div>
              <div className={styles.packagesOffered1}>
                <div className={styles.branding1}>Branding</div>
              </div>
              <div className={styles.packagesOffered2}>
                <div className={styles.communicationDigitale1}>
                  Communication digitale
                </div>
              </div>
              <div className={styles.packagesOffered3}>
                <div className={styles.conceptionWeb1}>Conception Web</div>
              </div>
              <div className={styles.packagesOffered4}>
                <b className={styles.packs}>Packs:</b>
              </div>
              <div className={styles.packagesOffered5}>
                <div className={styles.helloPack}>Hello pack</div>
              </div>
              <div className={styles.packagesOffered6}>
                <div className={styles.goPack}>Go pack</div>
              </div>
              <div className={styles.packagesOffered7}>
                <div className={styles.extraPack}>Extra pack</div>
              </div>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.followUs}>
              <h3 className={styles.suivezNous}>Suivez-nous</h3>
              <div className={styles.lineSeparator} />
            </div>
            <div className={styles.vectorDivider}>
              <img
                className={styles.contactInfoIcon}
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className={styles.vectorFacebookIcon}
                loading="eager"
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
      </footer>
    </section>
  );
};

export default FooterFinal3;
