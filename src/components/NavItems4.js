import styles from "./NavItems4.module.css";

const NavItems4 = () => {
  return (
    <header className={styles.navItems}>
      <div className={styles.item1Wrapper}>
        <h2 className={styles.item1}>Accueil</h2>
      </div>
      <div className={styles.item1Container}>
        <h2 className={styles.item11}>BrAND CONCEPT</h2>
      </div>
      <div className={styles.item1Frame}>
        <h2 className={styles.item12}>sERVICES</h2>
      </div>
      <img
        className={styles.logoRectangleIcon}
        loading="eager"
        alt=""
        src="/rectangle-3846@2x.png"
      />
      <div className={styles.frameDiv}>
        <h2 className={styles.item13}>pORTFOLIO</h2>
      </div>
      <div className={styles.item1Wrapper1}>
        <h2 className={styles.item14}>dIGI-NEWS</h2>
      </div>
      <div className={styles.item1Wrapper2}>
        <h2 className={styles.item15}>cONTACT</h2>
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

export default NavItems4;
