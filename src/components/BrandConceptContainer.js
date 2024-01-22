import { useMemo } from "react";
import styles from "./BrandConceptContainer.module.css";

const BrandConceptContainer = ({
  componentDescription,
  propPadding,
  propPadding1,
  propHeight,
}) => {
  const servicesSectionStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bannireStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const brandConceptStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.servicesSection} style={servicesSectionStyle}>
      <div className={styles.bannire} style={bannireStyle}>
        <img
          className={styles.bannireChild}
          alt=""
          src="/rectangle-15@2x.png"
        />
        <h1 className={styles.brandConcept} style={brandConceptStyle}>
          {componentDescription}
        </h1>
      </div>
    </div>
  );
};

export default BrandConceptContainer;
