
import React, { useState, useEffect } from 'react';
import { 
  CloudRain, 
  Zap, 
  Settings, 
  TrendingUp, 
  Globe, 
  ChevronRight,
  Download,
  ExternalLink,
  Instagram,
  Mail,
  PlayCircle,
  Users,
  Star,
  Sparkles,
  ArrowDown,
  ThermometerSnowflake,
  ArrowUpRight,
  BookOpen,
  Leaf,
  Wind,
  User
} from 'lucide-react';
import { GROUP_MEMBERS, SECTIONS } from './constants';
import FloatingDecor from './components/FloatingDecor';

const CompostAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-80 bg-slate-900 rounded-[3rem] overflow-hidden flex items-center justify-center p-8 border-4 border-slate-800 shadow-inner group">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({length: 10}).map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}></div>
        ))}
      </div>
      <div className="absolute top-4 right-8 flex items-center gap-2 text-emerald-300/50 text-xs font-black uppercase tracking-widest">
        Dekomposisi Aerobik <Leaf size={14} />
      </div>
      <div className="relative z-10 w-48 flex flex-col items-center">
        <div className="w-full h-32 bg-emerald-800 rounded-2xl border-2 border-emerald-900 shadow-lg flex flex-col items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,100,0.1),transparent)]"></div>
           <div className="flex gap-2 mb-2">
              <Leaf className="text-emerald-400 w-6 h-6 animate-bounce" />
              <div className="w-6 h-6 bg-orange-700 rounded-full animate-pulse opacity-50"></div>
           </div>
           <span className="text-[10px] text-emerald-200 font-bold uppercase tracking-tighter">Sampah Organik</span>
           <div className="absolute top-0 w-4 h-full bg-slate-400/20 border-x border-white/10 flex flex-col justify-around py-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1 h-1 bg-blue-400 rounded-full mx-auto"></div>
              ))}
           </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full flex justify-center gap-16 pointer-events-none">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex flex-col items-center animate-bounce" style={{ animationDuration: '4s', animationDelay: `${i * 0.7}s` }}>
             <Wind className="text-blue-300 w-6 h-6 opacity-40 mb-2 rotate-90" />
             <div className="w-1 h-12 bg-gradient-to-t from-blue-300 to-transparent opacity-10"></div>
          </div>
        ))}
        <div className="absolute top-1/2 flex gap-4">
           <ArrowUpRight className="text-orange-400 w-8 h-8 animate-ping opacity-30" />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
         <p className="text-white text-xs font-bold flex items-center gap-2 uppercase tracking-tighter">
           <ThermometerSnowflake size={14} className="text-orange-300" /> 
           Proses: Udara Masuk, Panas Terjaga, Bau Hilang!
         </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Kompensasi tinggi navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'CloudRain': return <CloudRain className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Settings': return <Settings className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Globe': return <Globe className={className} />;
      default: return <Zap className={className} />;
    }
  };

  return (
    <div className="min-h-screen text-slate-900 bg-[#fdfdfd] overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      <FloatingDecor />
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#intro" 
            onClick={(e) => scrollToSection(e, 'intro')}
            className="flex items-center gap-3 group cursor-pointer active:scale-95 transition-transform"
          >
            <div className="bg-gradient-to-tr from-emerald-400 to-teal-600 p-2.5 rounded-2xl shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-800 uppercase">TUGAS<span className="text-emerald-500">FISIKA</span></span>
          </a>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a 
              href="#video" 
              onClick={(e) => scrollToSection(e, 'video')}
              className="hover:text-emerald-500 transition-all active:scale-95 hover:translate-y-[-2px]"
            >
              Intro
            </a>
            <a 
              href="#content" 
              onClick={(e) => scrollToSection(e, 'content')}
              className="hover:text-emerald-500 transition-all active:scale-95 hover:translate-y-[-2px]"
            >
              Materi
            </a>
            <a 
              href="#team" 
              onClick={(e) => scrollToSection(e, 'team')}
              className="hover:text-emerald-500 transition-all active:scale-95 hover:translate-y-[-2px]"
            >
              Tim
            </a>
            <a 
              href="#resources" 
              onClick={(e) => scrollToSection(e, 'resources')}
              className="hover:text-emerald-500 transition-all active:scale-95 hover:translate-y-[-2px]"
            >
              Download
            </a>
          </div>

          <a 
            href="#footer" 
            onClick={(e) => scrollToSection(e, 'footer')}
            className="hidden sm:block bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-extrabold transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
          >
             Hubungi Kami
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="relative pt-44 pb-32 px-6">
        <div className="blob -top-20 -right-20 !bg-emerald-400/20"></div>
        <div className="blob -bottom-20 -left-20 !bg-orange-400/20"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white border-2 border-slate-100 px-6 py-3 rounded-3xl shadow-sm mb-10 animate-bounce cursor-default">
            <Sparkles className="text-emerald-500 w-5 h-5" />
            <span className="text-sm font-black text-slate-700 uppercase tracking-tighter">Projek Climate-Action Sekolah</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-10 tracking-tighter">
            SAMPAH KANTIN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-500">JADI SOLUSI IKLIM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
             Inovasi <span className="text-slate-900 font-bold underline decoration-emerald-400 decoration-4">Eco-Digester</span> Sekolah. Ngolah sisa makanan kantin pake prinsip Fisika buat nyetop emisi metana! 🍎♻️
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#video" 
              onClick={(e) => scrollToSection(e, 'video')}
              className="group flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-200"
            >
              Tonton Video Aksi <PlayCircle className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#content" 
              onClick={(e) => scrollToSection(e, 'content')}
              className="flex items-center gap-2 bg-white border-4 border-slate-100 px-10 py-5 rounded-[2rem] font-black text-lg hover:border-emerald-200 transition-all active:scale-95"
            >
              Kepoin Inovasinya <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Section (Target: Intro Button) */}
      <section id="video" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-400/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-slate-200">
                   <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" alt="Waste Innovation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                         <PlayCircle size={40} className="text-emerald-500" />
                      </div>
                   </div>
                </div>
             </div>
             <div className="space-y-6">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter">Nggak Ada Lagi <span className="text-emerald-500">Bau Sampah</span>!</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Video ini nunjukin gimana tim kita nyulap tong bekas jadi mesin pengolah sisa makanan kantin yang canggih. Kita jelasin kenapa aliran udara (Fisika Fluida) penting banget buat bikin kompos yang nggak bau dan nggak ngasilin gas rumah kaca.
                </p>
                <ul className="space-y-4">
                  {['Eksperimen Aliran Udara Konveksi', 'Pemasangan Sensor Suhu Analog', 'Hasil Jadi Pupuk Organik'].map(item => (
                    <li key={item} className="flex items-center gap-3 font-bold text-slate-700">
                      <div className="bg-emerald-500 p-1 rounded-full"><ChevronRight size={14} className="text-white" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Materi Pembelajaran Section (Target: Materi Button) */}
      <section id="content" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">MATERI <span className="text-emerald-500">PEMBELAJARAN</span></h2>
             <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">Bedah materi dari masalah iklim sampe aksi nyata kita di kantin!</p>
          </div>

          <div className="space-y-40">
            {SECTIONS.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-12">
                   <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {getIcon(section.icon, "w-8 h-8")}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{section.title}</h3>
                </div>

                <div className="space-y-24">
                  {section.parts.map((part, pIdx) => (
                    <div key={pIdx} className={`flex flex-col ${pIdx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}>
                      <div className="flex-1 space-y-6">
                        {part.subtitle && (
                          <h4 className="text-2xl font-black text-emerald-600 uppercase tracking-tighter">{part.subtitle}</h4>
                        )}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] border-2 border-slate-50 shadow-xl shadow-slate-100 relative group overflow-hidden">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-emerald-50 transition-colors"></div>
                           <p className="text-slate-600 text-xl leading-relaxed relative z-10">
                              {part.text}
                           </p>
                        </div>
                      </div>
                      <div className="flex-1 w-full group">
                         <div className="relative h-80 md:h-[400px] rounded-[3rem] overflow-hidden shadow-3xl border-4 border-white">
                            <img src={part.imageUrl} alt={part.subtitle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                            {part.subtitle && (
                               <div className="absolute bottom-8 left-8">
                                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/30">Dokumentasi Projek</span>
                               </div>
                            )}
                         </div>
                      </div>
                    </div>
                  ))}
                </div>

                {section.id === "how-it-works" && (
                   <div className="mt-20">
                      <p className="text-center font-black text-slate-400 uppercase tracking-widest mb-8">Simulasi Aliran Udara Eco-Digester:</p>
                      <CompostAnimation />
                   </div>
                )}

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                      <h5 className="font-black text-slate-800 uppercase tracking-tighter mb-6 flex items-center gap-2">
                        <Star className="text-yellow-500" size={20} fill="currentColor" /> Argumen Logis
                      </h5>
                      <div className="space-y-4">
                        {section.detailedPoints.map((point, i) => (
                           <div key={i} className="flex items-start gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                              <span className="text-slate-600 font-bold">{point}</span>
                           </div>
                        ))}
                      </div>
                   </div>
                   <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-50 shadow-lg">
                      <h5 className="font-black text-slate-800 uppercase tracking-tighter mb-6 flex items-center gap-2">
                        <BookOpen className="text-blue-500" size={20} /> Referensi Literasi
                      </h5>
                      <div className="space-y-4">
                        {section.sources.map((source, i) => (
                           <a key={i} href={source.url} target="_blank" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-emerald-500 hover:text-white transition-all group active:scale-95">
                              <span className="font-black text-sm uppercase">{source.name}</span>
                              <ExternalLink size={16} className="opacity-40 group-hover:opacity-100" />
                           </a>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Card Section (Target: Download Button) */}
      <section id="resources" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">AMBIL <span className="text-emerald-400">BERKAS</span> PROJEK!</h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Kami sudah siapkan data pengurangan sampah, file PPT presentasi di kelas, dan link Canva berisi poster edukasi pemilahan sampah.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <button className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 hover:bg-white/20 transition-all group hover:scale-105 active:scale-95">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                    <Globe size={32} />
                  </div>
                  <div>
                    <span className="block text-white font-black text-xl uppercase mb-1">Slide Canva</span>
                    <span className="text-slate-400 text-sm">Poster & Grafik</span>
                  </div>
                  <div className="mt-4 bg-blue-500 text-white p-3 rounded-full group-hover:translate-x-2 transition-transform">
                    <ExternalLink size={20} />
                  </div>
                </button>

                <button className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 hover:bg-white/20 transition-all group hover:scale-105 active:scale-95">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                    <Download size={32} />
                  </div>
                  <div>
                    <span className="block text-white font-black text-xl uppercase mb-1">Download PPT</span>
                    <span className="text-slate-400 text-sm">Presentasi Kelas</span>
                  </div>
                  <div className="mt-4 bg-orange-500 text-white p-3 rounded-full group-hover:translate-x-2 transition-transform">
                    <Download size={20} />
                  </div>
                </button>

                <button className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 hover:bg-white/20 transition-all group hover:scale-105 active:scale-95">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                    <Star size={32} />
                  </div>
                  <div>
                    <span className="block text-white font-black text-xl uppercase mb-1">Laporan PDF</span>
                    <span className="text-slate-400 text-sm">Paper Riset Lengkap</span>
                  </div>
                  <div className="mt-4 bg-emerald-500 text-white p-3 rounded-full group-hover:translate-x-2 transition-transform">
                    <Download size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section (Target: Tim Button) */}
      <section id="team" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Pasukan <span className="text-emerald-500 italic">Eco-Warrior</span></h2>
            <p className="text-slate-400 text-xl font-medium">Anak SMA yang peduli sama sampah kantin dan suhu bumi.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {GROUP_MEMBERS.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-emerald-400 transition-all shadow-lg group-hover:scale-110 bg-slate-100 flex items-center justify-center relative">
                  <User className="absolute text-slate-300 w-12 h-12" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-10" />
                </div>
                <h4 className="font-black text-slate-800 text-lg group-hover:text-emerald-600 transition-colors">{member.name}</h4>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Target: Hubungi Kami) */}
      <footer id="footer" className="py-24 bg-slate-900 text-white px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div>
               <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                  <div className="bg-emerald-500 p-2 rounded-xl"><Leaf size={24} /></div>
                  <span className="font-black text-3xl tracking-tighter uppercase tracking-widest">TUGAS<span className="text-emerald-500">FISIKA</span></span>
               </div>
               <p className="text-slate-400 max-w-sm">
                  Tugas Kelompok Fisika SMA Harapan Masa Depan. Riset nyata di sekolah, kontribusi nyata buat iklim dunia.
               </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
               <div className="flex gap-6">
                  <Instagram size={24} className="hover:text-emerald-400 cursor-pointer active:scale-90 transition-transform" />
                  <Mail size={24} className="hover:text-emerald-400 cursor-pointer active:scale-90 transition-transform" />
               </div>
               <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                  &copy; 2024 Projek Fisika Kelompok 5. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
