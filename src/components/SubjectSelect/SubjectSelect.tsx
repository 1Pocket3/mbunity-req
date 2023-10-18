import { FunctionComponent } from "react";
import styles from "./SubjectSelect.module.css";

const SubjectSelectorContainer: FunctionComponent = () => {
  return (
    <div className={styles.selectSubjectParent}>
      <div className={styles.selectSubject}>Select Subject?</div>
      <div className={styles.generalInquiryParent}>
        <div className={styles.generalInquiry}>General Inquiry</div>
        <img
          className={styles.teenyiconstickCircleSolid}
          alt=""
          src="/teenyiconstickcirclesolid.svg"
        />
      </div>
      <div className={styles.generalInquiryGroup}>
        <div className={styles.generalInquiry}>General Inquiry</div>
        <img
          className={styles.teenyiconstickCircleSolid}
          alt=""
          src="/teenyiconstickcirclesolid1.svg"
        />
      </div>
      <div className={styles.generalInquiryContainer}>
        <div className={styles.generalInquiry}>General Inquiry</div>
        <img
          className={styles.teenyiconstickCircleSolid}
          alt=""
          src="/teenyiconstickcirclesolid1.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.generalInquiry}>General Inquiry</div>
        <img
          className={styles.teenyiconstickCircleSolid}
          alt=""
          src="/teenyiconstickcirclesolid1.svg"
        />
      </div>
    </div>
  );
};

export default SubjectSelectorContainer;
