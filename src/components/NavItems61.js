import styles from "./NavItems61.module.css";

const NavItems6 = () => {
  return (
    <header className={styles.navItems} data-scroll-to="navItems">
      <div className={styles.item1Wrapper}>
        <h3 className={styles.item1}>Accueil</h3>
      </div>
      <div className={styles.item1Container}>
        <h3 className={styles.item11}>BrAND CONCEPT</h3>
      </div>
      <div className={styles.item1Frame}>
        <h3 className={styles.item12}>sERVICES</h3>
      </div>
      <img
        className={styles.navItemsChild}
        loading="eager"
        alt=""
        src="/rectangle-3846@2x.png"
      />
      <div className={styles.frameDiv}>
        <h3 className={styles.item13}>pORTFOLIO</h3>
      </div>
      <div className={styles.item1Wrapper1}>
        <h3 className={styles.item14}>dIGI-NEWS</h3>
      </div>
      <div className={styles.item1Wrapper2}>
        <h3 className={styles.item15}>cONTACT</h3>
      </div>
      <div className={styles.searchBar2}>
        <img
          className={styles.iconMagnifyingGlass}
          loading="eager"
          alt=""
          src="/-icon-magnifying-glass.svg"
        />
      </div>
    </header>
  );
};

export default NavItems6;
