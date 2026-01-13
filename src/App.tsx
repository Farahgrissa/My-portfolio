interface Projet {
  id: number;
  titre: string;
  description: string;
  stack: string[];
  categorie: string;
  lien: string;
}

const mesProjets: Projet[] = [
  {
id: 1,
    titre: "Medical Appointments",
    description: "Application Fullstack de prise de rendez-vous médicaux avec une navigation fluide sans rechargement de page.",
    stack: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS"],
    categorie: "Fullstack",
    lien: "https://github.com/FarahGrissa/medical-appointments"
  },
  {
    id: 2,
    titre: "OSSEC Community",
    description: "Plateforme sécurisée avec inscription protégée et dashboard React.",
    stack: ["React", "Security", "Auth"],
    categorie: "Cybersecurity",
    lien: "https://github.com/FarahGrissa/ossec-community"
  },
  {
    id: 3,
    titre: "Tunisia Guide",
    description: "Guide touristique dynamique avec PHP et JS.",
    stack: ["PHP", "JavaScript", "HTML/CSS"],
    categorie: "Web",
    lien: "https://github.com/FarahGrissa/tunisia-guide"
  },
  {
    id: 4,
    titre: "Numeric Library",
    description: "Bibliothèque de calcul scientifique optimisée en bas niveau.",
    stack: ["C"],
    categorie: "Engineering",
    lien: "https://github.com/FarahGrissa/Numeric-library"
  }
];
function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300 p-8 font-sans">
      {/* Header avec un effet de lueur marine */}
      <header className="max-w-6xl mx-auto mb-20 pt-10">
        <span className="text-[#64ffda] font-mono mb-2 block">Bonjour, je suis</span>
        <h1 className="text-6xl font-bold text-slate-100 mb-4">
          Farah Grissa.
        </h1>
        <h2 className="text-4xl font-semibold text-slate-400">
          Élève Ingénieure en Informatique @ ENSI.
        </h2>
        <p className="max-w-xl mt-6 text-lg leading-relaxed">
          Passionnée par le développement Fullstack (Laravel/React) et la cybersécurité. 
          Je conçois des solutions robustes et sécurisées.
        </p>
      </header>

      {/* Section Projets */}
      <main className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-100 italic">01. Mes Projets</h2>
          <div className="h-[1px] bg-slate-700 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mesProjets.map((p) => (
            <div key={p.id} className="bg-[#112240] p-8 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#64ffda]/30 group">
              <div className="flex justify-between items-center mb-6">
                <div className="text-[#64ffda]">
                   {/* Icône dossier */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <a href={p.lien} target="_blank" className="text-slate-400 hover:text-[#64ffda]">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-[#64ffda] transition-colors">
                {p.titre}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {p.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {p.stack.map(s => (
                  <span key={s} className="font-mono text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export default App;