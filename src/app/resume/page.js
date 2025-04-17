/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaMouse } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./resume.module.css";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";


export default function Page() {


  // Skills data with percentages
  const codingSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "React JS", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "Bootstrap", percentage: 95 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "TypeScript", percentage: 70 },
    { name: "JavaScript", percentage: 95 },
    { name: "Node/Express", percentage: 75 },
    { name: "MongoDB/SQL", percentage: 80 },
  ];

  // Experience data
  const experiences = [
    {
      title: "Front-End Developer Intern",
      company: "TechHype",
      location: "Onsite",
      duration: "July 2024",
    },
    {
      title: "React & Next js Fellowship",
      company: "Bytewise",
      location: "Remote",
      duration: "June 2024 - August 2024",
    },
    {
      title: "Front-End Developer",
      company: "Freelancing",
      location: "Remote",
      duration: "January 2025 - February 2025",
    },
  ];

  // Timeline Component
  const Timeline = ({ experiences }) => {
    const timelineRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        },
        {
          threshold: 0.3, // Trigger when 30% of the timeline is visible
        }
      );

      if (timelineRef.current) {
        observer.observe(timelineRef.current);
      }

      return () => {
        if (timelineRef.current) {
          observer.unobserve(timelineRef.current);
        }
      };
    }, []);

    return (
      <div className={styles.timeline} ref={timelineRef}>
        <div
          className={`${styles.timelineContainer} ${
            isVisible ? styles.animate : ""
          }`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.odd : styles.even
              }`}
            >
              <p className={styles.timelineDuration}>{exp.duration}</p>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                <p className={styles.timelineCompany}>{exp.company}</p>
                <p className={styles.timelineLocation}>{exp.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.centerdiv}>
          <p className={styles.centertext}>
            <span className={styles.glitch} data-text="RESUME">
              <span className={styles.spanstyle}>RESUME</span>
            </span>
          </p>
          <p className={styles.belowcentertext}>
            <Link href="/">Home</Link> /{" "}
            <span className={styles.breadcrumb}> Resume</span>
          </p>
        </div>
      </main>

      <div className={styles.mouseanimate}>
        <FaMouse />
      </div>

      {/* ABOUT ME SECTION */}
      <section className={styles.description}>
        <div>
          <p className={styles.aboutme}> ABOUT ME</p>
          <p className={styles.me}>
            I'm Amber Sultan, a passionate Software Engineering student at LCWU
            Lahore and a detail-oriented Frontend Developer. I specialize in
            bridging creativity and functionality to build accessible,
            performant web applications with a focus on user-centric design.
            Currently, I'm advancing my skills in TypeScript and Next.js while
            contributing to meaningful projects. Let's connect and collaborate
            to bring ideas to life!
          </p>

          <div
            className={`${styles.gridcss} grid grid-cols-1 sm:grid-cols-3 gap-4`}
          >
            <div className={styles.gridtext}>
              <span className={styles.gridsapn}>Name:</span> Amber Sultan
            </div>
            <div className={styles.gridtext}>
              <span className={styles.gridsapn}>University:</span> LCWU, Lahore
            </div>
            <div className={styles.gridtext}>
              <span className={styles.gridsapn}>Role:</span> Frontend Developer
            </div>
            <div className={styles.gridtext}>
              <span className={styles.gridsapn}>Citizenship:</span> Lahore,
              Pakistan
            </div>
            <div className={styles.gridtext}>
              <span className={styles.gridsapn}>Email:</span>{" "}
              ambersultan124@gmail.com
            </div>
          </div>

          <a
            href="/Amber Sultan(Resume) - Frontend Developer.pdf"
            download="Amber-Sultan-Resume-Frontend-Developer.pdf"
            className={styles.button}
          >
            Download CV
          </a>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className={styles.description}>
        <div>
          <p className={styles.aboutme}>EXPERIENCE</p>
          <Timeline experiences={experiences} />
        </div>
      </section>

      {/* CODING SKILLS SECTION */}
      <section className={styles.description}>
        <div>
          <p className={styles.aboutme}>CODING SKILLS</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
            {codingSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={styles.progresscircle}>
                  <CircularProgressbar
                    value={skill.percentage}
                    text={` ${skill.percentage}%`}
                    styles={{
                      path: {
                        stroke: "#00786F",
                      },
                      trail: {
                        stroke: "#e5e7eb",
                      },
                      text: {
                        fill: "#161616",
                        fontSize: "14px",
                      },
                    }}
                  />
                </div>
                <p className={`${styles.skillname} text-center`}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE */}

      <section className={styles.description}>
        <div>
          <p className={styles.aboutme}>KNOWLEDGE</p>
          <div
            className={`${styles.knowledge} grid grid-flow-row sm:grid-flow-col sm:grid-rows-4 grid-cols-1 sm:grid-cols-auto gap-4`}
          >
            <div className={styles.knowtext}>
              <span className={styles.gridsapn}>✔</span> Responsive web design
              and development
            </div>
            <div className={styles.knowtext}>
              <span className={styles.gridsapn}>✔</span> UI/UX design for web
              and mobile
            </div>
            <div className={styles.knowtext}>
              <span className={styles.gridsapn}>✔</span> Version control with
              Git and GitHub
            </div>
            <div className={styles.knowtext}>
              <span className={styles.gridsapn}>✔</span> Branding and visual
              identity creation
            </div>
            <div className={styles.knowtext}>
              <span className={styles.gridsapn}>✔</span> Authentication and
              authorization
            </div>
            <div className={styles.knowtext}>
              <span className={styles.gridsapn}>✔</span> Back-end development
              with Node.js/Express
            </div>
            <div className={styles.knowtext}>
              <span className={styles.gridsapn}>✔</span> Server-side rendering
              with Next.js
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}

      <section className={styles.description}>
        <div>
          <p className={styles.aboutme}>CERTIFICATES</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 mb-18">
  {/* Card 1 */}
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>Introduction to Front-End Development</h3>
    <p className={styles.carddesc}>Issued by: Meta through Coursera</p>
    <br/>
    <a href="https://www.coursera.org/account/accomplishments/verify/UMBLCCEXACYL" className={styles.viewcertificate} target="_blank" rel="noopener noreferrer">View Certificate</a>
  </div>
  {/* Card 2 */}
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>Developing Front-End Apps with React</h3>
    <p className={styles.carddesc}>Issued by: IBM through Coursera</p>
    <br/>
    <a href="https://www.coursera.org/account/accomplishments/verify/3YMY75E77LUV" className={styles.viewcertificate} target="_blank" rel="noopener noreferrer">View Certificate</a>
  </div>
  {/* Card 3 */}
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>Software Security</h3>
    <p className={styles.carddesc}>Issued by: University of Maryland through Coursera</p>
    <br/>
    <p className={styles.viewcertificate}>
      <a href="https://www.coursera.org/account/accomplishments/verify/4XNCDZ598CGS" target="_blank" rel="noopener noreferrer">View Certificate</a>
    </p>
  </div>
</div>
        </div>
      </section>
      <Footer />
    </>
  );
}
