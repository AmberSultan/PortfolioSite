"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./portfolio.module.css";
import Link from "next/link";
import { FaMouse , FaLink} from "react-icons/fa";
import Image from "next/image";

// Define portfolio items array
const portfolioItems = [
  {
    id: 1,
    src: "/carrental.png",
    link: "https://go-drive-swart.vercel.app/",
    alt: "Project 1",
    name: "GoDrive: Rent a Car",
  },
  {
    id: 2,
    src: "/travel.png",
    link: "https://city-guides-pk.vercel.app/",
    alt: "Project 1",
    name: "Travel Troop: City Guides",
  },
  {
    id: 3,
    src: "/music.png",
    link: "https://melody-mentor.vercel.app/",
    alt: "Project 2",
    name: "Music Melody: Learn Music",
  },
  {
    id: 4,
    src: "/pakistan.png",
    link: "https://pakistan-kappa.vercel.app/",
    alt: "Project 3",
    name: "Pakistan: GSAP Animations",
  },
  {
    id: 5,
    src: "/recipes.png",
    link: "https://recipe-book-bx84.vercel.app/",
    alt: "Project 1",
    name: "Recipe Book: Culinary Recipes",
  },
  {
    id: 6,
    src: "/movie.png",
    link: "https://moviehub-mu.vercel.app/",
    alt: "Project 2",
    name: "MovieHUB: Film Discovery",
  },
  {
    id: 7,
    src: "/drawing.png",
    link: "https://ambersultan.github.io/drawingDoodle/",
    alt: "Project 3",
    name: "Drawing Doodle: Creative Sketches",
  },
  {
    id: 8,
    src: "/pixel.png",
    link: "https://ambersultan.github.io/PixelParadise/",
    alt: "Project 3",
    name: "Pixel Paradise: Pinboard Creations",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.centerdiv}>
          <p className={styles.centertext}>
            <span className={styles.glitch} data-text="PORTFOLIO">
              <span className={styles.spanstyle}>PORTFOLIO</span>
            </span>
          </p>
          <p className={styles.belowcentertext}>
            <Link href="/">Home</Link> /{" "}
            <span className={styles.breadcrumb}> Portfolio</span>
          </p>
        </div>
      </main>
      <div className={styles.mouseanimate}>
        <FaMouse />
      </div>

      <section className={styles.description}>
        <div>
          <p className={styles.aboutme}>RECENT WORKS</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center mt-12 ${styles.hoveritem}`}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-square object-cover "
                  width={300}
                  height={300}
                />
                <p className={styles.sitename}>
                  {item.name}
                </p>
                
                <div className={styles.overlay}>
                  <div className={styles.link}>
                  <FaLink/>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center h-full">
                    <span className="text-yellow-400 text-sm font-bold">
                      {item.hoverLabel}
                    </span>
                    <span className="text-white text-lg font-semibold mt-2 text-center">
                      {item.hoverTagline}
                    </span>
                  </div>
                </div>
               
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}