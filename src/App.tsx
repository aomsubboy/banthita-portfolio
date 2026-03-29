/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Code, 
  Languages, 
  ExternalLink,
  ChevronRight,
  Download
} from "lucide-react";

const COLORS = {
  blue: "#003399",
  gold: "#FFCC00",
};

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="mahidol-gradient text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-mahidol-gold opacity-10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-mahidol-gold rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-mahidol-blue/20">
              <img 
                src="/profile.jpg" 
                alt="Banthita Angsuvattanakul" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/business/400/400";
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="inline-block px-3 py-1 bg-mahidol-gold text-mahidol-blue font-bold text-xs uppercase tracking-widest rounded-full mb-4">
              Accounting Student (Year 2)
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
              BANTHITA <br className="hidden md:block"/>
              <span className="text-mahidol-gold">ANGSUVATTANAKUL</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl font-light leading-relaxed">
              Motivated Accountancy student from Mahidol University with a solid foundation in accounting principles. 
              Active participant in business case competitions and campus leadership roles.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-6 mt-8"
            >
              <a href="mailto:banthita.an@gmail.com" className="flex items-center gap-2 text-sm hover:text-mahidol-gold transition-colors">
                <Mail size={18} /> banthita.an@gmail.com
              </a>
              <a href="tel:+66928079098" className="flex items-center gap-2 text-sm hover:text-mahidol-gold transition-colors">
                <Phone size={18} /> +66 928-079098
              </a>
              <span className="flex items-center gap-2 text-sm text-blue-100">
                <MapPin size={18} /> Bangkok, Thailand
              </span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        
        {/* Education Section */}
        <section id="education">
          <h2 className="section-title">Education</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="bg-mahidol-blue/5 p-4 rounded-xl">
              <GraduationCap size={40} className="text-mahidol-blue" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-800">Mahidol University Kanchanaburi campus</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">GPAX: 3.57</span>
              </div>
              <p className="text-mahidol-blue font-medium mb-4">Bachelor of Accountancy</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="space-y-2">
                  <p className="font-semibold text-slate-800">Key Coursework:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Auditing</li>
                    <li>Business Taxation</li>
                    <li>Data Analytics for Accounting</li>
                  </ul>
                </div>
                <div className="space-y-2 md:pt-6">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Financial Reporting</li>
                    <li>Cost Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-6">
            {[
              {
                title: "Head of Production",
                org: "MUKA Youth Challenger Club",
                date: "2026",
                desc: "Directed all production logistics for the 'Thai Hero: Guardian of the SDGs' hackathon. Managed venue operations, AV systems, and end-to-end run-of-show."
              },
              {
                title: "Public Relations",
                org: "Plus Camp 15, MUKA Mahidol",
                date: "2025",
                desc: "Executed PR campaigns and managed communication channels to enhance engagement and outreach to prospective students."
              },
              {
                title: "Graphic Designer",
                org: "Mahidol Accounting Open House",
                date: "2024",
                desc: "Created visual identities and marketing collateral, including social media assets and promotional merchandise."
              }
            ].map((exp, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-hover p-6 rounded-2xl flex gap-6"
              >
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-mahidol-blue text-white flex items-center justify-center font-bold text-xs">
                    {exp.date}
                  </div>
                  <div className="w-px h-full bg-slate-200 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{exp.title}</h3>
                  <p className="text-mahidol-blue text-sm font-semibold mb-2">{exp.org}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Activities & Competitions */}
        <section id="activities">
          <h2 className="section-title">Activities & Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "ASPIRE Case Competition",
                by: "IBMP Thammasat",
                date: "Apr 2025",
                desc: "Collaborated in a business case challenge to develop strategic solutions and financial feasibility studies."
              },
              {
                title: "TAX JUNIOR 2567",
                by: "Tax Auditor Association",
                date: "2024",
                desc: "Engaged in intensive training on Thai tax regulations, focusing on practical tax compliance."
              },
              {
                title: "GrabSpark 2024 Case Competition",
                by: "Grab",
                date: "2024",
                desc: "Proposed data-driven business strategies to solve real-world operational challenges."
              },
              {
                title: "MUKA Nature Clip Contest",
                by: "Bronze Award",
                date: "2024",
                desc: "Developed storytelling and communication skills by translating complex environmental issues."
              }
            ].map((act, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-mahidol-gold/10 rounded-lg">
                    <Trophy size={20} className="text-mahidol-blue" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{act.date}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">{act.title}</h3>
                <p className="text-xs text-mahidol-blue font-bold mb-3">{act.by}</p>
                <p className="text-sm text-slate-500 flex-grow">{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-mahidol-blue font-bold">
                <Languages size={20} />
                <h3>Languages</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Thai</span>
                    <span className="text-slate-400">Native</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-mahidol-blue w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>English</span>
                    <span className="text-slate-400">MU-ELT 88</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-mahidol-blue w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-mahidol-blue font-bold">
                <Code size={20} />
                <h3>Hard Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Accounting", "Excel", "Word", "Docs", "Sheets", "Canva", "Data Analytics"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-mahidol-blue font-bold">
                <Briefcase size={20} />
                <h3>Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Time Management", "Teamwork", "Communication", "Adaptability"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-mahidol-blue/5 text-mahidol-blue text-xs font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Footer CTA */}
        <section className="pt-10 border-t border-slate-200">
          <div className="bg-mahidol-blue rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to contribute.</h2>
              <p className="text-blue-200">Eager to start a first internship to learn professional standards.</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="mailto:banthita.an@gmail.com" 
                className="px-8 py-3 bg-mahidol-gold text-mahidol-blue font-bold rounded-xl hover:bg-white transition-colors flex items-center gap-2"
              >
                Contact Me <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-10 text-center text-slate-400 text-sm">
        <p>© 2026 Banthita Angsuvattanakul. All rights reserved.</p>
        <p className="mt-1">Mahidol University Kanchanaburi Campus</p>
      </footer>
    </div>
  );
}
