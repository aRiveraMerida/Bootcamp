import github from '/images/github.png';
import instagram from '/images/instagram.png';
import linkedin from '/images/linkedin.png';
import twitter from '/images/twitter.png';

import FooterUI from './ui/components/FooterUI';

export const socialLogos = [
  { link: 'https://github.com/aRiveraMerida', src: github, alt: 'github' },
  { link: 'https://www.instagram.com/rivera_merida', src: instagram, alt: 'instagram' },
  { link: 'https://www.linkedin.com/in/albertoriveramerida/', src: linkedin, alt: 'linkedin' },
  { link: 'https://twitter.com/aRiveraMerida', src: twitter, alt: 'twitter' },
];

const Footer = () => {
  return (
    <FooterUI>
      <ul>
        {socialLogos.map((logo, idx) => (
          <li key={idx}>
            <a href={logo.link} target='_blank'>
              <img src={logo.src} alt={`logo ${logo.alt}`} width={40} height={40} />
            </a>
          </li>
        ))}
      </ul>
      <p>
        Creado con amor por @RiveraMerida <span role="img">💕</span>
      </p>
    </FooterUI>
  );
};

export default Footer;
