"use client";
import Link from "next/link";
import styles from './Header.module.css';
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={`${styles.headerTop} w-full mx-auto`}>
        <div className="flex justify-between items-center">
          <div className={styles.logo}>
            AS.
          </div>
          <div>
            <nav className={`${styles.navContainer} ${isMobileScreen ? styles.mobileHidden : ''}`}>
              <ul className={`${styles.nav} flex gap-15`}>  
                <li className={styles.navlinks}> <Link href="/">Home</Link> </li>
                <li className={styles.navlinks}> <Link href="/resume">Resume</Link></li>
                <li className={styles.navlinks}> <Link href="/portfolio">Portfolio</Link></li>
                <li className={styles.contactlink}> <Link href="/contacts">Contacts</Link></li>
              </ul>
            </nav>
            {isMobileScreen && (
              <button 
                className={styles.hamburger} 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className={styles.hamburgerContainer}>
                  <svg 
                    className={`${styles.hamburgerIcon} ${!isMenuOpen ? styles.active : ''}`} 
                    viewBox="0 0 24 24" 
                    width="30" 
                    height="30"
                  >
                    <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                  </svg>
                  <svg 
                    className={`${styles.closeIcon} ${isMenuOpen ? styles.active : ''}`} 
                    viewBox="0 0 24 24" 
                    width="30" 
                    height="30"
                  >
                    <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <ul>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/resume" onClick={toggleMenu}>Resume</Link></li>
          <li><Link href="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link href="/contacts" onClick={toggleMenu}>Contacts</Link></li>
        </ul>
      </div>
    </header>
  );
}