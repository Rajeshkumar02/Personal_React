import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>-By <br />Rajeshkumar S</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} RK</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/Rajeshkumar02"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100025611187235"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Rajeshkumar_02"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajeshkumar2002/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
