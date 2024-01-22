import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrandingGroup.module.css";

const BrandingGroup = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/portfolio-24");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    // Please sync "Portfolio 4/4" to the project
  }, []);

  return (
    <div className={styles.brandingGroup}>
      <button className={styles.rectangleParent} onClick={onGroupButtonClick}>
        <div className={styles.frameChild} />
        <div className={styles.branding}>Branding</div>
      </button>
      <button className={styles.rectangleGroup} onClick={onGroupButton1Click}>
        <div className={styles.frameItem} />
        <div className={styles.communicationDigitale}>
          Communication digitale
        </div>
      </button>
      <button className={styles.conceptionWeb2}>
        <div className={styles.conceptionWeb2Child} />
        <div className={styles.conceptionWeb}>cONCEPTION wEB</div>
      </button>
    </div>
  );
};

export default BrandingGroup;
