// Single string→component icon registry. Data/config files store icon names
// as strings (no component imports); consumers resolve them here.
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFolder, FaLock,
  FaExternalLinkAlt, FaDownload, FaCode, FaGraduationCap, FaTrophy,
  FaAddressBook, FaBriefcase, FaFilePdf, FaLayerGroup, FaSearch,
  FaRegClock, FaChevronLeft, FaCopy, FaCheck, FaThLarge, FaStream,
  FaRegMoon, FaRegSun, FaTimes, FaRegSquare, FaMinus, FaGlobe,
} from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

export const iconMap = {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFolder, FaLock,
  FaExternalLinkAlt, FaDownload, FaCode, FaGraduationCap, FaTrophy,
  FaAddressBook, FaBriefcase, FaFilePdf, FaLayerGroup, FaSearch,
  FaRegClock, FaChevronLeft, FaCopy, FaCheck, FaThLarge, FaStream,
  FaRegMoon, FaRegSun, FaTimes, FaRegSquare, FaMinus, FaGlobe,
  SiFiverr,
};

export const getIcon = (key) => iconMap[key] ?? null;
