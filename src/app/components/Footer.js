import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';

import styles from './Footer.module.css';

export default function Footer(){
    return(
<>
<footer>
<div className={`${styles.footerbottom} `}>

  <div className={styles.copyright}>
    © {new Date().getFullYear()} Amber Sultan. All rights reserved.
  </div>
  <div>
  <ul className={`${styles.nav}`}>
              <li>
                <a
                  href="https://www.linkedin.com/in/ambersultan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Visit Amber's LinkedIn profile"
                >
                  <FaLinkedin className={styles.socialIcon} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AmberSultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Visit Amber's GitHub profile"
                >
                  <FaGithub className={styles.socialIcon} />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.behance.net/your-behance-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Visit Amber's Behance profile"
                >
                  <FaBehance className={styles.socialIcon} />
                </a>
              </li> */}
            </ul>
  </div>
</div>

</footer>
</>
    );
}