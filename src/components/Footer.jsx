import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { socialLinks } from '../config/social';

const iconMap = { FaGithub, FaLinkedin, SiFiverr };

const Footer = ({ footerRef }) => (
  <div className="bg-bgTheme-dark w-full border-t border-bgTheme-light/20" ref={footerRef}>
    <footer className="max-w-site mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left — identity */}
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-xl">Muhammad Taha Khan</p>
          <p className="text-textTheme-muted text-sm mt-1">
            Backend Developer &nbsp;·&nbsp; BS-CS Expected June 2026
          </p>
        </div>

        {/* Center — contact */}
        <div className="flex flex-col items-center gap-2 text-sm text-textTheme-muted">
          <a href="mailto:mtkinverse@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaEnvelope size={13} /> mtkinverse@gmail.com
          </a>
          <a href="tel:+923062992398" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaPhone size={13} /> +92 306 2992398
          </a>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, url, icon }) => {
            const Icon = iconMap[icon];
            return Icon ? (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-textTheme-muted hover:text-white transition-colors duration-200"
              >
                <Icon size={22} />
              </a>
            ) : null;
          })}
        </div>
      </div>

      <p className="text-center text-textTheme-muted text-xs mt-8">
        © {new Date().getFullYear()} Muhammad Taha Khan. All rights reserved.
      </p>
    </footer>
  </div>
);

export default Footer;
