'use client';
import { useEffect, useState, } from "react";
import useDarkTheme from "../hook/useDarkTheme";

const Navbar = () => {
    const { theme, themeToggle } = useDarkTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['Overview', 'Curriculum', 'Testimonial', 'Price'];

    const handleSectionClick = (section) => {
        const sectionElement = document.getElementById(section.toLowerCase());
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" })
        }
    }

    // Close mobile menu on resize (UX fix)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 981) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="bg-[#00000020] text-white px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* LEFT: Logo */}
                <div className="flex items-center space-x-2">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15.5H5.94173M30.699 15.5L15.3495 15.5M15.3495 0V6M15.3495 31V25M9.47549 1.17969L11.7493 6.72296M21.2235 29.82L18.9497 24.2767M1.16841 9.56836L6.65785 11.8645M29.5305 21.4315L24.0411 19.1354M1.1685 21.4316L6.65795 19.1355M29.5306 9.56846L24.0412 11.8646M9.47571 29.8203L11.7495 24.277M21.2237 1.18005L18.9499 6.72332M26.2032 4.54004L22.0018 8.78268M4.49575 26.4603L8.69719 22.2177M26.2032 26.46L22.0018 22.2173M4.49575 4.53965L8.69719 8.78229" stroke="white" strokeWidth="1.75" />
                    </svg>
                    <span className="text-white font-bold text-lg">PPA</span>
                </div>

                {/* CENTER: Desktop Menu */}
                <ul className="hidden desktop:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <button
                                onClick={() => handleSectionClick(link)}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                                {link}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* RIGHT: Actions */}
                <div className="flex items-center gap-3">

                    {/* Theme Toggle */}
                    <button
                        onClick={themeToggle}
                        className="p-2 hover:bg-white/10 rounded-lg transition duration-200"
                    >
                        {theme === "light" ? (
                            // Moon Icon
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3c0 .67.07 1.32.21 1.95a7 7 0 0 0 8.58 8.58c.63.14 1.28.21 1.95.21z" />
                            </svg>
                        ) : (
                            // Sun Icon
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        )}
                    </button>

                    {/* Enroll Button (Desktop only) */}
                    <button className="hidden desktop:block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                        Enroll Now
                    </button>

                    {/* Hamburger (Mobile) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="desktop:hidden p-2 hover:bg-white/10 rounded-lg"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div className="desktop:hidden mt-4 border-t border-white/10 pt-4 space-y-3">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link}>
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        handleSectionClick(link);
                                    }}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                                >
                                    {link}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition">
                        Enroll Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;