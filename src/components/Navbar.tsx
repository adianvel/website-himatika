'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/team', label: 'Struktur' },
    { href: '/news', label: 'Berita' },
    { href: '/contact', label: 'Kontak' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-white/5 p-1 backdrop-blur-sm border border-white/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logohima.png"
                                alt="HIMATIKA Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-bold text-lg md:text-xl text-slate-100 group-hover:text-blue-400 transition-colors">
                                HIMATIKA UNU JOGJA
                            </span>
                            <span className="block text-xs text-slate-400">
                                Himpunan Mahasiswa Informatika
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-lg font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-500/30"
                        >
                            Kenalan Yuk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-100 hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                >
                    <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-1 border border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-slate-300 font-medium rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 mt-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl text-center shadow-lg"
                        >
                            Kenalan Yuk
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
