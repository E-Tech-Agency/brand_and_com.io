import styles from "./AcceuilFrame.module.css";

const AcceuilFrame = () => {
  return (
    <div className={styles.acceuilFrame}>
      <div className={styles.engagement}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <img
            className={styles.maskGroupIcon}
            loading="eager"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
      <textarea className={styles.connectorLine} rows={10} cols={10} />
      <textarea className={styles.connectorLine1} rows={10} cols={11} />
      <div className={styles.brandClientsNousContainer}>
        <span className={styles.brandClientsNousContainer1}>
          <p className={styles.brandClients}>Brand Clients</p>
          <p className={styles.nousSommesL}>
            Nous sommes là pour aider nos clients à cultiver la réputation de
            leur marque et à susciter un impact positif dans la société grâce à
            la puissance de notre travail créatif.
          </p>
        </span>
      </div>
      <div className={styles.teamCollabNousContainer}>
        <span className={styles.teamCollabNousContainer1}>
          <p className={styles.teamCollab}>Team Collab</p>
          <p className={styles.nousSommesIci}>
            Nous sommes ici pour avoir un impact positif sur la société dans son
            ensemble. Nous nous engageons à créer un environnement de travail
            sain et heureux pour nos talents, où chacun se sent capable de
            s'épanouir.
          </p>
        </span>
      </div>
      <footer className={styles.footerFinal}>
        <div className={styles.footerFinalInner}>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.facebookIcon}>
          <img
            className={styles.logoSiteWebBc11}
            loading="eager"
            alt=""
            src="/logo-site-web-bc-1-1@2x.png"
          />
          <div className={styles.adresse}>
            <img
              className={styles.vectorIcon}
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
              className={styles.contactbmgtnIcon}
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
              src="/group-20.svg"
            />
            <div className={styles.emptySpace}>
              <p className={styles.p}>54 799 779</p>
              <p className={styles.blankLine1}>&nbsp;</p>
            </div>
          </div>
        </div>
        <div className={styles.footerMainParent}>
          <div className={styles.footerMain}>
            <h2 className={styles.acceuil}>Acceuil</h2>
            <h2 className={styles.brandConcept}>Brand-concept</h2>
            <h2 className={styles.portfolio}>Portfolio</h2>
            <h2 className={styles.servicesEtPacks}>{`Services et packs `}</h2>
            <h2 className={styles.digiNews}>Digi-News</h2>
            <h2 className={styles.contact}>Contact</h2>
          </div>
          <div className={styles.testimonials}>
            <div className={styles.menu}>
              <div className={styles.ourServicesSubheading}>
                <div className={styles.whyChooseUsTitle}>
                  <div className={styles.nosServices}>Nos services</div>
                </div>
                <div className={styles.whyChooseUsTitle1}>
                  <div className={styles.nosClients}>{`Nos clients `}</div>
                </div>
                <div className={styles.pourquoiChoisirNotre}>
                  Pourquoi choisir notre agence ?
                </div>
                <div className={styles.whyChooseUsTitle2}>
                  <div className={styles.ourTeam}>{`Our team `}</div>
                </div>
                <div className={styles.tmoignageClients}>
                  Témoignage clients
                </div>
                <div className={styles.priseDeRendezVous}>
                  Prise de Rendez-vous
                </div>
              </div>
              <div className={styles.missionStatement}>
                <div className={styles.brandingCommunication}>
                  <div className={styles.quiSommesNous}>Qui sommes nous ?</div>
                  <div className={styles.notreMission}>{`Notre mission `}</div>
                  <div className={styles.nosEngagements}>Nos engagements</div>
                </div>
              </div>
              <div className={styles.webDesignSection}>
                <div className={styles.packsSubheading}>
                  <div className={styles.helloPackName}>
                    <div className={styles.branding}>Branding</div>
                  </div>
                  <div className={styles.helloPackName1}>
                    <div className={styles.communicationDigitale}>
                      Communication digitale
                    </div>
                  </div>
                  <div className={styles.helloPackName2}>
                    <div className={styles.conceptionWeb}>Conception Web</div>
                  </div>
                </div>
              </div>
              <div className={styles.extraPackName}>
                <div className={styles.facebookVector}>
                  <b className={styles.services}>Services:</b>
                </div>
                <div className={styles.facebookVector1}>
                  <div className={styles.branding1}>Branding</div>
                </div>
                <div className={styles.facebookVector2}>
                  <div className={styles.communicationDigitale1}>
                    Communication digitale
                  </div>
                </div>
                <div className={styles.facebookVector3}>
                  <div className={styles.conceptionWeb1}>Conception Web</div>
                </div>
                <div className={styles.facebookVector4}>
                  <b className={styles.packs}>Packs:</b>
                </div>
                <div className={styles.facebookVector5}>
                  <div className={styles.helloPack}>Hello pack</div>
                </div>
                <div className={styles.facebookVector6}>
                  <div className={styles.goPack}>Go pack</div>
                </div>
                <div className={styles.facebookVector7}>
                  <div className={styles.extraPack}>Extra pack</div>
                </div>
              </div>
            </div>
            <div className={styles.contactInfoSection}>
              <div className={styles.menuSectionTitle}>
                <h3 className={styles.suivezNous}>Suivez-nous</h3>
                <div className={styles.homePageSubtitle} />
              </div>
              <div className={styles.facebookVectorIcon}>
                <img
                  className={styles.emailIcon}
                  loading="eager"
                  alt=""
                  src="/vector-2.svg"
                />
                <img
                  className={styles.facebookLinkIcon}
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
    </div>
  );
};

export default AcceuilFrame;
