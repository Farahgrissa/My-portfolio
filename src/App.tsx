import { useState } from 'react';

const navLinks = ['About', 'Projects', 'Skills', 'Experience', 'Certifications', 'Contact'];

const skills = {
  Cloud: ['AWS', 'OpenStack', 'EC2', 'S3', 'IAM'],
  Observability: ['OpenSearch', 'Elasticsearch', 'Kibana', 'Fluentd', 'HTTP Collector'],
  'MLOps / ML': ['Python', 'Scikit-learn', 'Isolation Forest', 'Streamlit', 'Jupyter'],
  DevOps: ['Linux / Ubuntu', 'Git', 'Docker', 'Bash', 'SSH'],
  Development: ['React.js', 'Laravel', 'Vue.js', 'PHP', 'Java', 'C / C++'],
};

const projects = [
  {
    id: 1,
    tag: 'PFA · MLOps · Observability',
    titre: 'Anomaly Detection on OpenStack Logs',
    description:
      'Production-grade log analytics pipeline ingesting OpenStack VM telemetry through Fluentd → OpenSearch, processed by an Isolation Forest model for unsupervised anomaly detection, with a Streamlit dashboard for real-time alert visualization.',
    stack: ['OpenStack', 'Fluentd', 'OpenSearch', 'Elasticsearch', 'Kibana', 'Python', 'Scikit-learn', 'Isolation Forest', 'Streamlit'],
    lien: 'https://github.com/oussama-zogh/logs-anomaly-detection-openstack',
    highlight: true,
    pipeline: ['OpenStack VM', 'Fluentd', 'OpenSearch', 'Isolation Forest', 'Streamlit'],
  },
  {
    id: 2,
    tag: 'Cryptography · Security Research',
    titre: 'RSA Combined Attack',
    description:
      'Research implementation combining three RSA attack vectors into a single exploit chain. Demonstrates weaknesses in RSA key generation and padding when multiple vulnerabilities are present simultaneously.',
    stack: ['Python', 'Cryptography', 'Number Theory', 'RSA'],
    lien: 'https://github.com/Farahgrissa/Attaque_RSA',
    highlight: false,
    pipeline: [],
  },
  {
    id: 3,
    tag: 'Cybersecurity · Full-stack',
    titre: 'OSSEC Community Platform',
    description:
      'Secure membership platform for the national cybersecurity club. Protected registration flows, role-based access, and a React dashboard.',
    stack: ['React', 'Auth', 'RBAC', 'Security'],
    lien: 'https://github.com/FarahGrissa/ossec-community',
    highlight: false,
    pipeline: [],
  },
  {
    id: 4,
    tag: 'Full-stack · Internship',
    titre: 'Medical Appointments Platform',
    description:
      'SPA for medical appointment management built during an internship at Elyos Digital. Single-page navigation, form validation, and a MySQL backend.',
    stack: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
    lien: 'https://github.com/FarahGrissa/medical-appointments',
    highlight: false,
    pipeline: [],
  },
  {
    id: 5,
    tag: 'Web · Backend',
    titre: 'Tunisia Guide',
    description:
      'Dynamic tourist guide for Tunisia with a PHP backend serving location data, cultural content, and itinerary pages.',
    stack: ['PHP', 'JavaScript', 'HTML / CSS', 'MySQL'],
    lien: 'https://github.com/Farahgrissa/tunisia-guide',
    highlight: false,
    pipeline: [],
  },
];

const experience = [
  {
    period: 'Summer 2024',
    role: 'Full-stack Developer Intern',
    org: 'Elyos Digital',
    type: 'Internship',
    points: [
      'Built a medical appointment SPA with Laravel + Vue.js + Inertia.js',
      'Designed MySQL schema and REST API endpoints',
      'Delivered production-ready build with client sign-off',
    ],
  },
  {
    period: '2024 – 2025',
    role: 'Vice-President & HR Lead',
    org: 'OSSEC Cybersecurity Club — ENSI',
    type: 'Leadership',
    points: [
      'Co-organized TuniHack 11.0, the national cybersecurity hackathon',
      'Managed a 200+ member team across technical and event tracks',
      'Coordinated partnerships with national sponsors and industry partners',
    ],
  },
];

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    lien: 'https://www.credly.com/badges/990d3d5b-5e1a-4fec-a14f-9c9bd2ebf2c7/linked_in_profile',
  },
  {
    name: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI / Coursera',
    lien: 'https://www.coursera.org/account/accomplishments/verify/PUL0WD7MFKU2',
  },
  {
    name: 'Supervised Machine Learning',
    issuer: 'DeepLearning.AI / Coursera',
    lien: 'https://www.coursera.org/account/accomplishments/verify/PJMSN936T2M3',
  },
];

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-[#64ffda] text-sm tracking-wider">farah.dev</span>
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((l, i) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-slate-400 hover:text-[#64ffda] text-sm font-mono transition-colors">
                <span className="text-[#64ffda] mr-1">{String(i + 1).padStart(2, '0')}.</span>{l}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#112240] border-t border-slate-800 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l, i) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-slate-300 font-mono text-sm">
              <span className="text-[#64ffda] mr-2">{String(i + 1).padStart(2, '0')}.</span>{l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-24 min-h-screen flex flex-col justify-center">
      <p className="font-mono text-[#64ffda] text-sm mb-5 tracking-widest uppercase">
        Open to internship · July 2026 · 2 months
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 leading-tight">
        Farah Grissa.
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
        Cloud · DevOps · MLOps
      </h2>
      <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
        2nd-year engineering student at ENSI, specializing in AI. I build{' '}
        <span className="text-slate-200">observability pipelines</span>, deploy{' '}
        <span className="text-slate-200">ML models on cloud infrastructure</span>, and automate
        with Linux & Docker. My flagship project is an anomaly detection pipeline on OpenStack
        logs using Isolation Forest + OpenSearch.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#projects" className="border border-[#64ffda] text-[#64ffda] font-mono px-6 py-3 rounded hover:bg-[#64ffda]/10 transition-colors">
          View Projects →
        </a>
        <a href="#contact" className="border border-slate-600 text-slate-400 font-mono px-6 py-3 rounded hover:border-slate-400 hover:text-slate-200 transition-colors">
          Contact me
        </a>
      </div>

      <div className="mt-16 flex flex-wrap gap-10">
        {[
          ['AWS Certified', 'Cloud Practitioner'],
          ['Anomaly Detection', 'OpenStack · Isolation Forest'],
          ['TuniHack 11.0', 'Co-organized'],
        ].map(([v, l]) => (
          <div key={v} className="border-l-2 border-[#64ffda] pl-4">
            <p className="text-slate-100 font-semibold text-sm">{v}</p>
            <p className="text-slate-500 font-mono text-xs">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <SectionTitle number="01" title="About" />
      <div className="grid md:grid-cols-5 gap-12 mt-10 items-start">

        {/* Photo — left */}
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="relative">
            <img
              src="/farah.jpg"
              alt="Farah Grissa"
              className="w-56 h-56 md:w-64 md:h-64 rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = 'none';
              }}
            />
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-lg border-2 border-[#64ffda]/40 -z-10" />
          </div>
        </div>

        {/* Text — right */}
        <div className="md:col-span-3 text-slate-400 leading-relaxed space-y-4">
          <p>
            I'm a second-year computer science engineering student at{' '}
            <span className="text-slate-200">ENSI (École Nationale des Sciences de l'Informatique)</span>,
            Tunisia, specializing in AI for my upcoming academic year.
          </p>
          <p>
            My technical focus sits at the intersection of{' '}
            <span className="text-[#64ffda]">cloud infrastructure</span>,{' '}
            <span className="text-[#64ffda]">observability</span>, and{' '}
            <span className="text-[#64ffda]">machine learning operations</span>. I'm drawn to
            systems where data pipelines, anomaly detection, and infrastructure automation converge.
          </p>
          <p>
            I also serve as Vice-President of{' '}
            <span className="text-slate-200">OSSEC</span>, the national cybersecurity club at
            ENSI — a role that sharpened my skills in team coordination and event management.
          </p>
          <div className="pt-2 space-y-2">
            {['AWS / OpenStack', 'Fluentd · OpenSearch · Kibana', 'Python · Scikit-learn · Isolation Forest', 'Docker · Linux · Git'].map((s) => (
              <div key={s} className="flex items-center gap-2 text-sm">
                <span className="text-[#64ffda] text-xs">▹</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <SectionTitle number="02" title="Projects" />
      <div className="mt-10 space-y-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`rounded-lg p-7 border transition-all duration-300 hover:-translate-y-1 ${p.highlight
              ? 'bg-[#112240] border-[#64ffda]/40'
              : 'bg-[#112240] border-slate-700 hover:border-[#64ffda]/30'
              }`}
          >
            <p className="font-mono text-xs text-[#64ffda] mb-2 uppercase tracking-wider">{p.tag}</p>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-slate-100">{p.titre}</h3>
              <a href={p.lien} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#64ffda] ml-4 shrink-0" aria-label="GitHub">
                <IconGitHub className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
            {p.pipeline.length > 0 && (
              <div className="flex items-center gap-1 mb-4 flex-wrap">
                {p.pipeline.map((step, i) => (
                  <span key={step} className="flex items-center gap-1">
                    <span className="bg-[#0a192f] border border-[#64ffda]/20 text-slate-400 font-mono text-xs px-2.5 py-1 rounded">
                      {step}
                    </span>
                    {i < p.pipeline.length - 1 && <span className="text-[#64ffda] text-xs">→</span>}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-0.5 rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <SectionTitle number="03" title="Skills" />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-[#112240] rounded-lg p-6 border border-slate-700 hover:border-[#64ffda]/30 transition-colors">
            <h3 className="font-mono text-[#64ffda] text-xs uppercase tracking-wider mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map((s) => (
                <li key={s} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="text-[#64ffda] text-xs">▹</span>{s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <SectionTitle number="04" title="Experience" />
      <div className="mt-10 space-y-10">
        {experience.map((e) => (
          <div key={e.role} className="flex gap-6">
            <div className="hidden md:flex flex-col items-center pt-1">
              <div className="w-2 h-2 rounded-full bg-[#64ffda]" />
              <div className="w-px flex-grow bg-slate-700 mt-2" />
            </div>
            <div className="pb-6">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="font-mono text-[#64ffda] text-xs bg-[#64ffda]/10 px-2 py-0.5 rounded">{e.type}</span>
                <span className="font-mono text-slate-500 text-xs">{e.period}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">{e.role}</h3>
              <p className="text-slate-400 text-sm mb-4">{e.org}</p>
              <ul className="space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-[#64ffda] mt-0.5 text-xs">▹</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 py-20">
      <SectionTitle number="05" title="Certifications" />
      <div className="mt-10 grid sm:grid-cols-3 gap-5">
        {certifications.map((c) => (
          <div key={c.name} className="bg-[#112240] rounded-lg p-6 border border-slate-700 hover:border-[#64ffda]/30 transition-colors">
            <p className="text-slate-100 font-semibold text-sm mb-1">{c.name}</p>
            <p className="text-slate-500 font-mono text-xs">{c.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <SectionTitle number="06" title="Contact" />
      <div className="mt-10 max-w-xl">
        <p className="text-slate-400 leading-relaxed mb-8">
          I'm looking for a{' '}
          <span className="text-slate-200">2-month internship starting July 2026</span>{' '}
          in Cloud, DevOps, MLOps, or Observability. Feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Farahgrissa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-sm text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            <IconGitHub className="w-4 h-4" /> GitHub
          </a>
          <span className="text-slate-700">·</span>
          <a
            href="https://www.linkedin.com/in/farah-grissa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-sm text-slate-400 hover:text-[#64ffda] transition-colors"
          >
            <IconLinkedIn className="w-4 h-4" /> LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-bold text-slate-100">
        <span className="font-mono text-[#64ffda] text-lg mr-2">{number}.</span>{title}
      </h2>
      <div className="h-px bg-slate-700 flex-grow" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300 font-sans">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;