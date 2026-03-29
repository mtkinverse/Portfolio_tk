import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const metrics = [
  { value: '3+',  label: 'Production Deployments' },
  { value: '3+',  label: 'Client Projects' },
  { value: '3–4', label: 'Engineers Led' },
  { value: '3.7', label: 'CGPA' },
];

const Hero = () => (
  <section id="hero" className="py-16 px-4">
    <div className="max-w-site mx-auto">
      <div className="flex flex-col min-[875px]:flex-row items-center gap-10 bg-bgTheme-dark rounded-2xl shadow-2xl shadow-black/40 px-8 py-12 min-[875px]:px-14">

        {/* Profile image */}
        <div className="shrink-0">
          <img
            src="/myPic.jpg"
            alt="Muhammad Taha Khan"
            className="w-52 h-52 min-[875px]:w-64 min-[875px]:h-64 object-cover rounded-2xl border-2 border-bgTheme-accent shadow-lg shadow-bgTheme-accent/30"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center min-[875px]:items-start gap-4 text-center min-[875px]:text-left">

          {/* Title pill */}
          <span className="inline-block px-4 py-1 rounded-full bg-bgTheme-accent/20 border border-bgTheme-accent text-bgTheme-accent text-sm font-medium">
            Associate Backend Developer · 360XpertsSolutions
          </span>

          <h1 className="text-4xl min-[875px]:text-5xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-bgTheme-accent">Taha</span>
          </h1>

          <p className="text-textTheme-muted text-base leading-relaxed max-w-2xl">
            Backend developer with hands-on production experience building distributed systems, microservices,
            and agentic AI pipelines. I implement the kind of patterns — multi-tenancy, event sourcing,
            per-message encryption, Kubernetes deployments — that most developers only read about.
            BS-CS at NUCES-FAST Karachi (CGPA 3.7, expected June 2026).
          </p>

          {/* Metrics row */}
          <div className="grid grid-cols-2 min-[600px]:grid-cols-4 gap-4 w-full mt-2">
            {metrics.map(({ value, label }) => (
              <div key={label} className="bg-bgTheme-card rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-bold text-bgTheme-accent">{value}</p>
                <p className="text-textTheme-muted text-xs mt-0.5 leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons + social icons */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="#projects"
              className="px-5 py-2 bg-bgTheme-accent text-white rounded-full text-sm font-medium hover:bg-bgTheme-light transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              download
              className="px-5 py-2 border border-bgTheme-accent text-bgTheme-accent rounded-full text-sm font-medium hover:bg-bgTheme-accent hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload size={12} /> Resume
            </a>
            <a
              href="https://github.com/mtkinverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-textTheme-muted hover:text-white transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/taha-khan-259106257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-textTheme-muted hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
