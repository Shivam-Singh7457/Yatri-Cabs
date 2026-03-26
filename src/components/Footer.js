import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.operationalSection}>
        <div className={styles.operationalContent}>
          <span className={styles.opTitle}>Operational Cities :</span>
          <div className={styles.cityLinks}>
            <a href="#">Lucknow</a>
            <a href="#">Ayodhya</a>
            <a href="#">Gorakhpur</a>
            <a href="#">Varanasi</a>
            <a href="#">Allahabad (Prayagraj)</a>
            <a href="#">Kanpur</a>
          </div>
        </div>
      </div>
      
      <div className={styles.darkFooter}>
        <div className={styles.darkFooterContent}>
          <div className={styles.footerLogo}>
             <div className={styles.logoBadge}>
               <img src="yatri-logo.svg" alt="Logo" className={styles.logoImg} />
             </div>
          </div>
          
          <div className={styles.footerLinks}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Career</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
          
          <div className={styles.copyright}>
            All Copyrights are reserved by YATRI CABS
          </div>
        </div>
      </div>
    </footer>
  );
}
