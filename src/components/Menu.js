import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.menuInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <h3 className={styles.notreBbOriginalContainer}>
            <span>
              <p className={styles.notreBbOriginal}>
                notre bébé original dans le monde sauvage de la communication
                Digitale
              </p>
              <p className={styles.cestCommeEssayer}>
                {" "}
                ( c'est comme essayer de faire du surf sur un océan plein de
                requins, mais bon, le marketeur est le maître nageur de notre
                agence)
              </p>
            </span>
          </h3>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <h3 className={styles.maisOnAContainer}>
          <span>{`mais on a réalisé qu'il était temps de passer du café filtre au café artisanal. (sérieusement, la créativité mérite plus qu'un simple expresso, non ?!) C'est là qu'intervient notre version 2.0 - `}</span>
          <b className={styles.brandAndCom}>BRAND and COM</b>
          <span>
            . (Nous avons du café et de la créativité, il suffit de dire
            “BRANDINI”)
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Menu;
