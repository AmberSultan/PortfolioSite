"use client";
import styles from './page.module.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Page() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typewriterRef.current, {
      strings: [
        'Front-End Developer.',
        'Turning designs into seamless experiences.',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.centerdiv}>
          <p className={styles.centertext}>
            <span className={styles.glitch} data-text="I'M AMBER SULTAN">
              I&apos;M <span className={styles.spanstyle}>AMBER SULTAN</span>
            </span>
          </p>
          <p className={styles.belowcentertext}>
            <span ref={typewriterRef} />
      
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}