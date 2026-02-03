import React from 'react';
import FloatingNav from './components/ui/floating-nav';
import { User } from 'lucide-react';

const App: React.FC = () => {
    return (
        <div className="relative min-h-screen selection:bg-primary/30">
            <FloatingNav />
            <header className="fixed top-0 w-full py-10 z-40">
                <div className="container flex justify-between items-center">
                    <div className="text-2xl font-black text-secondary uppercase tracking-tighter">
                        LUIQUE<span className="text-primary">.</span>
                    </div>
                </div>
            </header>

            <main>
                {/* --- Hero Section --- */}
                <section id="hero" className="min-h-screen flex items-center pt-28 pb-10">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1 hero-content">
                                <h4 className="text-sm font-bold text-gray-400 mb-4 tracking-[0.3em]">HELLO, <span className="text-primary uppercase">MY NAME IS</span></h4>
                                <h1 className="text-6xl md:text-[110px] leading-[0.85] mb-8 text-secondary">
                                    ABLEKPE<br />
                                    <span className="outline-text">ZADOCK</span><br />
                                    SELASI
                                </h1>
                                <p className="text-2xl italic font-accent mb-8 text-secondary/80">I AM Tech Student | Founder | CEO | CFO</p>
                                <p className="text-lg text-gray-500 max-w-lg mb-12 leading-relaxed">
                                    Disciplined and highly motivated tech student with a passion for building impactful solutions through technology, design, and business leadership.
                                </p>
                                <div className="flex items-center gap-10">
                                    <a href="#" className="px-10 py-5 border-2 border-secondary rounded-full font-bold uppercase transition-all hover:bg-secondary hover:text-white text-sm tracking-widest">Download CV</a>
                                    <a href="#services" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all">My Skills</a>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative flex justify-center items-center">
                                <div className="hero-image-circle"></div>
                                <img src="/assets/hero.png" alt="Ablekpe Zadock Selasi" className="w-full max-w-[550px] z-10 drop-shadow-2xl" />
                                <div className="absolute bottom-[-10px] w-full flex justify-around gap-6 px-4 z-20">
                                    <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-5 transform hover:scale-105 transition-transform">
                                        <span className="text-4xl font-black">2<span className="text-primary">+</span></span>
                                        <span className="text-[11px] uppercase font-bold text-gray-400 leading-tight">Years of<br />Experience</span>
                                    </div>
                                    <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-5 transform hover:scale-105 transition-transform">
                                        <span className="text-4xl font-black">10<span className="text-primary">+</span></span>
                                        <span className="text-[11px] uppercase font-bold text-gray-400 leading-tight">Completed<br />Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- About Section --- */}
                <section id="about" className="py-40 border-b border-gray-200">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <div>
                                <h2 className="text-5xl mb-12">ABOUT ME</h2>
                                <p className="text-xl text-gray-500 leading-loose">
                                    I am a disciplined and highly motivated tech student with a strong passion for building impactful solutions and contributing to societal development. I combine technical knowledge, design thinking, and business leadership to create value-driven projects.
                                </p>
                            </div>
                            <div className="flex flex-col gap-10 justify-center">
                                <div className="py-6 border-b border-gray-100 flex items-center gap-6 group">
                                    <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">L</span>
                                    <div>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Languages</span>
                                        <span className="text-lg font-bold">English (Fluent), Local Dialect (Native)</span>
                                    </div>
                                </div>
                                <div className="py-6 border-b border-gray-100 flex items-center gap-6 group">
                                    <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">I</span>
                                    <div>
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Interests</span>
                                        <span className="text-lg font-bold">Reading (Tech, Business, Personal Dev), Community Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Services Section --- */}
                <section id="services" className="py-40">
                    <div className="container">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl mb-4">WHAT I DO</h2>
                            <p className="font-accent italic text-primary text-2xl">My Services</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                { cat: "WEB DEVELOPMENT", title: "Web Design & Logo", desc: "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal." },
                                { cat: "APPS DEVELOPMENT", title: "iOS & Android", desc: "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing." },
                                { cat: "GAME DEVELOPMENT", title: "Unity & Unreal Engine", desc: "Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games." }
                            ].map((s, i) => (
                                <div key={i} className="service-card group">
                                    <h4 className="text-[11px] font-black text-gray-400 mb-8 tracking-[0.2em]">{s.cat}</h4>
                                    <h3 className="text-2xl mb-8 leading-snug">{s.title}</h3>
                                    <p className="text-gray-500 mb-10 text-[15px] leading-relaxed">{s.desc}</p>
                                    <a href="#" className="flex items-center gap-3 text-sm font-black uppercase transition-all group-hover:gap-6">See Pricing <span className="text-primary text-2xl">→</span></a>
                                    <div className="dot-pattern">
                                        {Array(15).fill(0).map((_, i) => <div key={i} className="dot"></div>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Skills Section --- */}
                <section id="skills" className="py-40 bg-secondary text-white rounded-[6rem] mx-6">
                    <div className="container">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl mb-4 text-white">PROFESSIONAL SKILLS</h2>
                            <p className="font-accent italic text-primary text-2xl">My Talent</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                            {[
                                { name: "Frontend Development", val: 85, desc: "Able to build responsive and interactive web interfaces using modern technologies." },
                                { name: "UI/UX Design", val: 75, desc: "Focusing on user-centric design principles to create intuitive digital experiences." },
                                { name: "Technical & Business Analysis", val: 90, desc: "Analyzing complex systems and business requirements to provide effective solutions." }
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-6 text-xs font-black uppercase tracking-widest">
                                        <span>{s.name}</span>
                                        <span className="text-primary">{s.val}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full relative overflow-visible">
                                        <div className="h-full bg-primary rounded-full relative" style={{ width: `${s.val}%` }}>
                                            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 bg-primary border-[5px] border-white rounded-full shadow-lg"></div>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-sm text-gray-400 leading-loose">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Experience Section --- */}
                <section id="experience" className="py-40">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                            <div>
                                <h2 className="text-4xl mb-20 flex items-center gap-6">EXPERIENCE</h2>
                                <div className="resume-line">
                                    {[
                                        { date: "2024 - Present", title: "Founder / CEO", company: "EcclesiaBranx", points: ["Founded and lead the organization", "Define vision, strategy, and growth direction", "Oversee operations and team collaboration", "Lead branding, client engagement, and business development"] },
                                        { date: "2024 - Present", title: "Chief Financial Officer (CFO)", company: "Restart Digital Startup", points: ["Manage budgeting and financial planning", "Track expenses and support sustainability", "Provide financial insights for decision-making", "Support strategic and operational planning"] }
                                    ].map((e, i) => (
                                        <div key={i} className="resume-item group">
                                            <div className="resume-marker"></div>
                                            <span className="font-accent italic text-primary text-base mb-3 block">{e.date}</span>
                                            <h3 className="text-3xl font-black mb-2">{e.title}</h3>
                                            <span className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6 block">{e.company}</span>
                                            <ul className="space-y-4">
                                                {e.points.map((p, pi) => <li key={pi} className="text-[15px] text-gray-500 pl-6 relative before:absolute before:left-0 before:text-primary before:content-['•']"> {p}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl mb-20 flex items-center gap-6">EDUCATION</h2>
                                <div className="resume-line">
                                    <div className="resume-item group">
                                        <div className="resume-marker"></div>
                                        <span className="font-accent italic text-primary text-base mb-3 block">2024 - 2027</span>
                                        <h3 className="text-3xl font-black mb-2">Computer Technology</h3>
                                        <span className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6 block">Kumasi Technical University</span>
                                        <p className="text-[17px] text-gray-500 mb-6 leading-relaxed">High academic performance with a CGPA of <strong className="text-secondary font-black">3.9 / 4.0</strong></p>
                                        <ul className="space-y-4">
                                            <li className="text-[15px] text-gray-500 pl-6 relative before:absolute before:left-0 before:text-primary before:content-['•']"> Active leadership roles alongside academic studies</li>
                                            <li className="text-[15px] text-gray-500 pl-6 relative before:absolute before:left-0 before:text-primary before:content-['•']"> Specialized in Systems Analysis and Software Logic</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Projects Section --- */}
                <section id="projects" className="py-40 bg-gray-50/50">
                    <div className="container">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl mb-4 text-secondary">PROJECTS</h2>
                            <p className="font-accent italic text-primary text-2xl">My Work</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { cat: "UI/UX & FRONTEND", title: "Web Solutions for Small Businesses", img: "Digital Branding", tools: "HTML, CSS, Design Tools, UI/UX Principles" },
                                { cat: "COLLABORATIVE", title: "Ecclesia Brand Ecosystem", img: "Web Dev", tools: "Javascript, React, Branding Strategies" }
                            ].map((p, i) => (
                                <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4">
                                    <div className="h-[400px] bg-gray-100 flex items-center justify-center text-gray-200 text-6xl font-black transition-transform duration-700 group-hover:scale-110 uppercase relative overflow-hidden">
                                        {p.img}
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="p-14">
                                        <h4 className="text-[11px] font-black text-primary mb-3 tracking-[0.4em]">{p.cat}</h4>
                                        <h3 className="text-3xl mb-6 leading-tight font-black">{p.title}</h3>
                                        <div className="h-1 w-20 bg-primary/10 mb-6 group-hover:w-full transition-all duration-700"></div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Tools: {p.tools}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Contact Section --- */}
                <section id="contact" className="py-40 bg-secondary text-white rounded-t-[6rem] relative overflow-hidden">
                    <div className="container relative z-10">
                        <div className="text-center mb-28">
                            <h2 className="text-6xl mb-4 text-white">GET IN TOUCH</h2>
                            <p className="font-accent italic text-primary text-2xl">Contact Me</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                            <div className="space-y-12">
                                {[
                                    { icon: "📍", label: "Location", val: "Kumasi, Ghana" },
                                    { icon: "📧", label: "Email", val: "zadockselasi7@gmail.com" },
                                    { icon: "📞", label: "Call Me", val: "0532 539 051" }
                                ].map((c, i) => (
                                    <div key={i} className="flex items-center gap-10 group">
                                        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-3xl text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">{c.icon}</div>
                                        <div>
                                            <h4 className="text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">{c.label}</h4>
                                            <p className="text-3xl font-regular">{c.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white p-16 rounded-[4rem] text-secondary shadow-2xl transform rotate-1">
                                <h3 className="text-3xl font-black mb-10">Reference</h3>
                                <p className="text-gray-500 italic mb-12 leading-loose text-xl">"Reference available upon request"</p>
                                <div className="flex items-center gap-8">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                                        <User className="text-primary" size={40} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black mb-1">Haadi Mustapha</h4>
                                        <p className="text-base text-primary font-black uppercase tracking-widest">CEO – Restart Digital</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                </section>

                <footer className="py-16 bg-secondary text-center border-t border-white/5 text-gray-500 text-sm font-bold uppercase tracking-[0.2em]">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mb-10 text-primary hover:text-white transition-colors">Back to top ↑</button>
                    <div className="container">
                        © 2026 Ablekpe Zadock Selasi. All rights reserved. Designed with Passion.
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default App;
