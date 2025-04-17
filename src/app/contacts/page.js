"use client";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contacts.module.css";
import Link from "next/link";
import { FaMouse, FaEmail, FaEnvelope } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";


export default function Page() {

  const form = useRef(null);
  
const sendEmail = (e) => {
  e.preventDefault();


  if (form.current) {
  emailjs
    .sendForm(
      'service_ppgylbk',   
      'template_pcok9cy', 
      e.target,
      'xK81ouvVmz6d5x6vp'   
    )
    .then(
      (result) => {
        console.log('Message Sent:', result.text);
        toast.success("Message sent!");
        form.current.reset();
      
      },
      (error) => {
        console.error('Send Error:', error.text);
        toast.error("Oops! Message failed.");
    
      }
    );
  }
};
  return (
    <>
      <Header />
      <Toaster className="mt-7" />
      <main className={styles.mainContent}>
        <div className={styles.centerdiv}>
          <p className={styles.centertext}>
            <span className={styles.glitch} data-text="CONTACTS">
              <span className={styles.spanstyle}>CONTACTS</span>
            </span>
          </p>
          <p className={styles.belowcentertext}>
            <Link href="/">Home</Link> /{" "}
            <span className={styles.breadcrumb}> Contacts</span>
          </p>
        </div>
        </main>
        <div className={styles.mouseanimate}>
        <FaMouse />
      </div>


        <section className={styles.description}>
        <div>
          <p className={styles.aboutme}> CONTACTS</p>
          </div>
            <div className="flex mt-4 items-center mt-9 ml-5 ">
            <div className={`${styles.evnelope} mr-4`}>
            <FaEnvelope/>
      </div>
      <div>
        <p className={styles.emailtxt}> Email</p>
      </div>
            </div>

            <p className={styles.email}>ambersultan124@gmail.com</p>
          


          </section>

        {/* Integrated Form */}
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
  <div className={styles.formGroup}>
    <div className={styles.inputWrapper}>
      <input type="text" id="name" name="from_name" required />
      <label htmlFor="name" className={styles.placeholderLabel}>Name</label>
    </div>
  </div>
  <div className={styles.formGroup}>
    <div className={styles.inputWrapper}>
      <input type="email" id="email" name="from_email" required />
      <label htmlFor="email" className={styles.placeholderLabel}>Email</label>
    </div>
  </div>
  <div className={styles.formGroup}>
    <div className={styles.inputWrapper}>
      <textarea id="message" name="message" rows="5" required></textarea>
      <label htmlFor="message" className={styles.placeholderLabel}>Message</label>
    </div>
  </div>
  <button type="submit" className={styles.submitButton}>
    Send Message
  </button>
</form>

 

      <Footer />
    </>
  );
}