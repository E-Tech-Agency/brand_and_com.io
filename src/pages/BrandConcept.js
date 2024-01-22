import NavItems from "../components/NavItems";
import Menu from "../components/Menu";
import Suiveznous from "../components/Suiveznous";
import TestimonialsFrame from "../components/TestimonialsFrame";
import AcceuilFrame from "../components/AcceuilFrame";
import styles from "./BrandConcept.module.css";

const BrandConcept = () => {
  return (
    <div className={styles.brandConcept}>
      <NavItems />
      <div className={styles.servicesSection}>
        <div className={styles.bannire}>
          <img
            className={styles.bannireChild}
            alt=""
            src="/rectangle-15@2x.png"
          />
          <h1 className={styles.brandConcept1}>Brand Concept</h1>
        </div>
      </div>
      <main className={styles.callToAction}>
        <div className={styles.communicationDigitalFrame}>
          <div className={styles.quiSommesNous}>Qui sommes nous ?</div>
        </div>
        <section className={styles.menu}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.mtamorphoseLaContainer}>
              <span>
                <span>{`Métamorphose à la `}</span>
                <b className={styles.brandAndCom}>"BRAND and COM"</b>
                <span>{`: Notre Cure de Jouvence à Base de Caféine et de Pixels En l'an 2020, nous avons jeté les dés et créé BMG Purple, `}</span>
              </span>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <h3 className={styles.ahJaiOubliContainer}>
              <span className={styles.ahJaiOubliContainer1}>
                <span>{`Ah! J'ai oublié, je suis `}</span>
                <b className={styles.hatemAmmar}>Hatem Ammar</b>
                <span>{` le maître nageur de BMG Purple (oubliez les requins, vous voulez du café?) En faite, les premières années ont été comme une tasse de café bien corsé : stimulantes, `}</span>
              </span>
            </h3>
          </div>
        </section>
        <section className={styles.menu1}>
          <img
            className={styles.menuChild}
            loading="eager"
            alt=""
            src="/group-116.svg"
          />
          <img
            className={styles.menuItem}
            loading="eager"
            alt=""
            src="/group-116.svg"
          />
        </section>
        <Menu />
        <Suiveznous />
        <section className={styles.menu2}>
          <img
            className={styles.menuInner}
            loading="eager"
            alt=""
            src="/group-116.svg"
          />
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group-116.svg"
          />
        </section>
        <section className={styles.menu3}>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <h3 className={styles.jeSuisLa}>
              {" "}
              je suis la cheffe de cuisine interne, nous sommes en train de
              préparer un latte macchiato - plus sophistiqué, plus fort (Si vous
              avez goutés notre spécialité ne dites à personnes le secrets de
              nos recettes).
            </h3>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv} />
            <h3 className={styles.jeSculptesDesContainer}>
              <p
                className={styles.jeSculptesDes}
              >{`Je sculptes des pixels avec une habileté exquise. `}</p>
              <p className={styles.uneExprienceVisuelle}>
                une expérience visuelle qui stimule l'esprit comme une gorgée de
                café fraîchement moulu. Bienvenue dans notre café, où je te
                serre des designs qui sont tout sauf décaféinés !
              </p>
            </h3>
          </div>
        </section>
        <section className={styles.menu4}>
          <img
            className={styles.menuChild1}
            loading="eager"
            alt=""
            src="/group-127.svg"
          />
          <img
            className={styles.menuChild2}
            loading="eager"
            alt=""
            src="/group-127.svg"
          />
        </section>
        <section className={styles.menu5}>
          <textarea
            className={styles.groupTextarea}
            placeholder="Moi, Emna la “Brandista” des mots (j’ajoutes les recettes secrets dans les contenus, devinez-Moi)"
            rows={9}
            cols={18}
          />
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <h3 className={styles.brandAndComContainer}>
              <span>
                <b>BRAND and COM</b>
                <span className={styles.cestLO}>
                  , c'est là où la créativité rencontre la caféine. Si votre
                  histoire a besoin d'un coup de fouet ou d'une touche de pixels
                  magiques, c'est nous qu'il vous faut. Pas de longs discours,
                  juste du café, des pixels, et une bonne dose de folie.
                </span>
              </span>
            </h3>
          </div>
        </section>
        <section className={styles.nosClients}>
          <img
            className={styles.nosClientsChild}
            loading="eager"
            alt=""
            src="/group-143.svg"
          />
          <img
            className={styles.nosClientsItem}
            loading="eager"
            alt=""
            src="/group-143.svg"
          />
        </section>
        <TestimonialsFrame />
      </main>
      <AcceuilFrame />
    </div>
  );
};

export default BrandConcept;
