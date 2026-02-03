"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, GraduationCap, LayoutGrid, Mail, Star } from "lucide-react";

const FloatingNav = () => {
    const [active, setActive] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const items = [
        { id: 0, icon: <Home size={20} />, label: "Hero", href: "#hero" },
        { id: 1, icon: <User size={20} />, label: "About", href: "#about" },
        { id: 2, icon: <LayoutGrid size={20} />, label: "Services", href: "#services" },
        { id: 3, icon: <Briefcase size={20} />, label: "Experience", href: "#experience" },
        { id: 4, icon: <GraduationCap size={20} />, label: "Education", href: "#experience" },
        { id: 5, icon: <Star size={20} />, label: "Projects", href: "#projects" },
        { id: 6, icon: <Mail size={20} />, label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const updateIndicator = () => {
            if (btnRefs.current[active] && containerRef.current) {
                const btn = btnRefs.current[active];
                const container = containerRef.current;
                if (!btn) return;
                const btnRect = btn.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                setIndicatorStyle({
                    width: btnRect.width,
                    left: btnRect.left - containerRect.left,
                });
            }
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [active]);

    const scrollToSection = (id: string, index: number) => {
        setActive(index);
        const element = document.querySelector(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full md:w-fit px-4">
            <div
                ref={containerRef}
                className="relative flex items-center justify-between md:justify-center bg-white/70 backdrop-blur-xl shadow-2xl rounded-full p-1.5 md:p-2 border border-white/40 max-w-lg mx-auto"
            >
                <AnimatePresence>
                    <motion.div
                        initial={false}
                        animate={indicatorStyle}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="absolute top-1.5 bottom-1.5 md:top-2 md:bottom-2 rounded-full bg-primary/10 border border-primary/20 pointer-events-none"
                    />
                </AnimatePresence>

                {items.map((item, index) => (
                    <button
                        key={item.id}
                        ref={(el) => { btnRefs.current[index] = el; }}
                        onClick={() => scrollToSection(item.href, index)}
                        className={`relative flex flex-col items-center justify-center px-3 md:px-4 py-2.5 md:py-3 transition-all duration-300 ${active === index ? "text-primary scale-110" : "text-secondary/50 hover:text-secondary hover:scale-105"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                            <span className="text-[11px] font-bold uppercase tracking-widest hidden lg:block">{item.label}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FloatingNav;
