'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.navWrapper}>
      <nav className={styles.nav}>
        {/* ── Logo ── */}
        <div className={styles.logo}>
          <img src="yatri-logo.svg" alt="Yatri Cabs" className={styles.logoImg} />
        </div>

        {/* ── Contact Pill ── */}
        <div className={styles.contactCenter}>
          <img src="24" alt="24/7 +917860663399" className={styles.contactPillImg} />
        </div>

        {/* ── Right Actions ── */}
        <div className={styles.actions}>
          <div className={styles.actionItem}>
            <img src="down.png" alt="Download App" className={styles.actionIcon} />
            <span className={styles.actionText}>Download App</span>
          </div>
          <div className={styles.actionItem}>
            <img src="user.png" alt="Profile" className={styles.profileIconImg} />
          </div>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className={styles.hamburgerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* ── Mobile Menu ── */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileContact}>
            <div className={styles.mobileContactPill}>24/7 Service Available</div>
            <div className={styles.mobileContactPill}>+917860663399</div>
          </div>
          <div className={styles.mobileActions}>
            <div className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
              <img src="down.png" alt="Download App" className={styles.actionIcon} />
              <span className={styles.actionText}>Download App</span>
            </div>
            <div className={styles.actionItem} onClick={() => setIsMenuOpen(false)}>
              <img src="user.png" alt="Profile" className={styles.profileIconImg} />
              <span className={styles.actionText}>Hi, Ravi</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}