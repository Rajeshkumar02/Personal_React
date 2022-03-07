import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Rajeshkumar S </span>
        from <span className={s.purple}> Tamil Nadu , India.</span>
        <br /><br />
        Web Developer.
        <br /><br /> Bachelor in Computer Science from
        <br />
        KPR Insitute of Engineering and Technology, Coimbatore.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Video Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading Books
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Listerning Music
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Never let the fear of striking out keep you from playing the game!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
