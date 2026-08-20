import './index.css';
import React, { useState } from 'react';
import { 
  Mail, 
  Award, 
  GraduationCap
} from 'lucide-react';

// Typed GitHub SVG Component
const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Typed LinkedIn SVG Component
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  category: 'web' | 'embedded' | 'data';
  description: string;
  tags: string[];
  github: string;
}

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'experience' | 'skills'>('home');
  const [projectFilter, setProjectFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'bloomscroll',
      title: 'bloomscroll',
      category: 'web',
      description: 'A React + TypeScript Chrome extension utilizing on-device computer vision models to detect excessive phone scrolling and automatically trigger charity donations via Stripe. Implemented custom image stability logic and URL blacklists to eliminate false triggers.',
      tags: ['TypeScript', 'React', 'Vite', 'MediaPipe', 'Stripe API'],
      github: 'https://github.com/Frank808-Git'
    },
    {
      id: 'tah-control',
      title: 'Total Artificial Heart (TAH) Control System',
      category: 'embedded',
      description: 'Closed-loop PID algorithm programmed in C on an ESP32 microcontroller to execute real-time cardiac metric tracking and stabilize flow rates within 2% under varying head pressures.',
      tags: ['C', 'ESP32', 'Embedded Systems', 'PID Control', 'Sensors'],
      github: 'https://github.com/Frank808-Git'
    },
    {
      id: 'avionics-ground',
      title: 'Avionics Telemetry & RF Ground Station',
      category: 'embedded',
      description: 'A PyQt GUI application with a Python backend to maintain 10,000+ ft telemetry link over half-duplex LoRa. Redesigned the RF protocol with interleaved burst logic to guarantee 99% packet delivery.',
      tags: ['Python', 'PyQt', 'LoRa RF', 'Telemetry'],
      github: 'https://github.com/Frank808-Git'
    },
    {
      id: 'data-automation',
      title: 'Test Performance Data Automation Engine',
      category: 'data',
      description: 'Automated Python application parsing 10,000+ student exam records to accelerate analytics throughput by 85% and pinpoint key learning gaps across curriculum topics.',
      tags: ['Python', 'pandas', 'NumPy', 'Data Analytics'],
      github: 'https://github.com/Frank808-Git'
    }
  ];

  const experiences: Experience[] = [
    {
      role: 'Project Controls and Algorithms Subteam Lead',
      company: 'Pulse Project',
      location: 'Irvine, CA',
      period: 'Apr. 2026 – Present',
      bullets: [
        'Lead a 15-person subteam developing control systems for a total artificial heart (TAH).',
        'Programmed an ESP32 executing a closed-loop PID algorithm, achieving real-time flow rate stability within 2%.',
        'Integrated differential pressure sensors for continuous cardiac metric tracking.'
      ]
    },
    {
      role: 'Avionics Software Developer',
      company: 'UCI Rocket Project Solids',
      location: 'Irvine, CA',
      period: 'Aug. 2025 – Present',
      bullets: [
        'Created a PyQt GUI application and Python backend for ground crew ground station telemetry at +10,000 ft.',
        'Redesigned RF protocol to execute signal bursts, securing 99% packet delivery over half-duplex LoRa.',
        'Built real-time event listener to parse incoming RF packets instantly, accelerating signal detection by 40%.'
      ]
    },
    {
      role: 'Data Analyst Intern and Curriculum Developer',
      company: 'ThinkAcademy',
      location: 'Irvine, CA',
      period: 'Jun. 2026 – Present',
      bullets: [
        'Developed an automated Python application to parse 10,000+ test scores, cutting processing time by 85%.',
        'Analyzed topic-level performance data to design 15+ workbooks, driving topic mastery up by 20%.'
      ]
    },
    {
      role: 'Software and Web Development Intern',
      company: 'GSL Group',
      location: 'Vancouver, BC',
      period: 'Jun. 2025 – Aug. 2025',
      bullets: [
        'Rebuilt team website, increasing patron usage by 80% and modernizing UI for 4,500+ users.',
        'Integrated RESTful APIs to retrieve live data and maintain scoreboard precision software.'
      ]
    }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-sky-400">Frank Yeh</span>
          <div className="flex gap-6">
            {(['home', 'projects', 'experience', 'skills'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize text-sm font-medium transition-colors pb-1 relative ${
                  activeTab === tab ? 'text-sky-400' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 flex-grow w-full">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Frank Yeh</h1>
              <p className="text-xl text-sky-400 font-medium">Computer Science & Engineering Student at UC Irvine</p>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                Building full-stack web applications, real-time RF communication links, and embedded control systems. Experienced in embedded microcontrollers (ESP32), Python data automation, and modern web frameworks.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Frank808-Git" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:text-sky-400 border border-slate-700 transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/frank-yeh" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:text-sky-400 border border-slate-700 transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:frankyeh808@gmail.com" className="p-2 bg-slate-800 rounded-lg hover:text-sky-400 border border-slate-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>

            <div className="p-6 bg-slate-800/50 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-sky-400 font-semibold">
                <GraduationCap size={20} />
                <span>Education</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">University of California, Irvine</h3>
                  <p className="text-slate-400 text-sm">B.S. in Computer Science & Engineering | GPA: 3.835</p>
                </div>
                <span className="text-slate-500 text-sm">Sep. 2023 – June 2027</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 pt-2">
                <Award size={14} className="text-sky-400" />
                <span>Honors: Dean's Honor List (7/9 quarters), Dean's Choice Award UCI Annual Engineering Design Review</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="flex gap-2 border-b border-slate-800 pb-4">
              {[
                { label: 'All', value: 'all' },
                { label: 'Web & Software', value: 'web' },
                { label: 'Embedded & Systems', value: 'embedded' },
                { label: 'Data & Analytics', value: 'data' }
              ].map(f => (
                <button
                  key={f.value}
                  onClick={() => setProjectFilter(f.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    projectFilter === f.value 
                      ? 'bg-sky-400 text-slate-900 border-sky-400' 
                      : 'border-slate-700 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between hover:border-sky-400/50 transition-all">
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-slate-100">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium bg-sky-400/10 text-sky-400 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="border-l-2 border-sky-400/30 pl-6 space-y-8 ml-2">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative space-y-2">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 ring-4 ring-slate-900" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="font-bold text-lg text-slate-100">{exp.role}</h3>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-sky-400">{exp.company} • {exp.location}</p>
                  <ul className="list-disc list-inside text-sm text-slate-400 space-y-1 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Languages', items: ['C++', 'C', 'Python', 'Java', 'C#', 'TypeScript', 'SQL', 'MATLAB'] },
                { title: 'Systems & Infrastructure', items: ['Linux/Unix', 'Docker', 'Git', 'REST APIs', 'Embedded Systems', 'Bash/Shell', 'CI/CD'] },
                { title: 'Libraries & Frameworks', items: ['React', 'Node.js', 'Flask', 'Vite', 'PyQt', 'MediaPipe', 'pandas', 'NumPy'] },
                { title: 'Hardware & Tools', items: ['ESP32', 'Arduino', 'VS Code', 'Jupyter Notebook', 'Visual Studio'] }
              ].map((group, idx) => (
                <div key={idx} className="bg-slate-800/40 border border-slate-800 rounded-xl p-5 space-y-3">
                  <h3 className="text-sky-400 font-semibold text-sm">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span key={skill} className="bg-slate-800 border border-slate-700/60 text-slate-300 text-xs px-2.5 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © 2026 Frank Yeh • Built with React, TypeScript & Tailwind CSS
      </footer>
    </div>
  );
}