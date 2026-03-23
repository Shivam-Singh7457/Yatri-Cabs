'use client';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoBadge}>
          <span className={styles.navLetteringWhite}>YATRI</span>
          <span className={styles.navLetteringGreen}>CABS</span>
        </div>
      </div>

      <div className={styles.contactAndUser}>
        <div className={styles.contactWrapper}>
          <div className={styles.status}>
            <span className={styles.bigNum}>24</span>
            <span className={styles.check}>✓</span>
            <span className={styles.bigNum}>7</span>
          </div>
          <div className={styles.phone}>+917860663399</div>
        </div>

        <div className={styles.actions}>
          <div className={styles.actionItem}>
            <div className={styles.iconDownload}>⬇</div>
            <span className={styles.actionText}>Download App</span>
          </div>
          <div className={styles.actionItem}>
            <div className={styles.profileIcon}>👤</div>
            <span className={styles.actionText}>Hi, Ravi</span>
          </div>
        </div>
      </div>
    </nav>
  );
}