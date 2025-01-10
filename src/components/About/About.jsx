import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/cartoon.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Little Bit About Me!
              </h3><br></br>
              <p>
               My primary focus is on crafting intuitive and visually engaging user interfaces that provide seamless user experiences. With a strong eye for design and attention to detail, I excel in using tools like Figma to transform ideas into polished prototypes and functional designs
              </p>
              <br></br>
              <p>
              In addition to my frontend expertise, I have hands-on experience with backend development, including building RESTful APIs using Spring Boot and managing databases with MySQL. During my time as an intern and through academic projects, I’ve worked collaboratively in Agile environments, contributing to end-to-end development and refining my skills in both design and coding.
              </p>
              <br></br>
              <p>
              I am currently seeking co-op or internship opportunities where I can leverage my skills while continuing to grow as a developer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
