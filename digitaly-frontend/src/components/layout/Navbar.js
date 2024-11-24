import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Vector from '../../assets/Vector.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
    const { t, currentLang, changeLanguage, languages } = useLanguage();
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${isMenuOpen ? 'bg-black/95' : ''}`}>
            <div className='max-w-9xl mx-auto flex flex-wrap items-center justify-between'>
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img src={Logo} alt="Logo" className="h-8 md:h-5" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-white md:hidden hover:text-gray-300 focus:outline-none"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-6 w-6" />
                </button>

                {/* Navigation Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:items-center transition-all duration-300 ease-in-out`}>
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0">
                        {/* Navigation Links */}
                        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
                            <Link
                                to="/entreprise"
                                className="text-white hover:text-gray-300 px-4 py-2 md:py-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('enterprise')}
                            </Link>
                            <Link
                                to="/emploi"
                                className="text-white hover:text-gray-300 px-4 py-2 md:py-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('jobs')}
                            </Link>
                            <Link
                                to="/contact"
                                className="text-white hover:text-gray-300 px-4 py-2 md:py-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t('contact')}
                            </Link>
                        </div>

                        {/* Language and Digitalists Section */}
                        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-0 py-4 md:py-0">
                            {/* Language Selector */}
                            <div className="relative w-full md:w-auto">
                                <button
                                    className="w-full md:w-auto flex items-center justify-start text-white hover:text-gray-300 py-2 md:py-0"
                                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                                >
                                    <FontAwesomeIcon icon={faGlobe} className="mr-3" />
                                    {currentLang.toUpperCase()}
                                </button>

                                {/* Language Dropdown */}
                                {showLanguageMenu && (
                                    <div className="absolute left-0 md:right-0 mt-2 bg-white rounded-md shadow-lg py-1 z-50 min-w-[120px]">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                                onClick={() => {
                                                    changeLanguage(lang.code);
                                                    setShowLanguageMenu(false);
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Digitalists Button */}
                            <Link
                                to="/espace-digitalists"
                                className="w-full md:w-auto bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 text-white flex items-center justify-center md:justify-start"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <img src={Vector} alt="Vector" className="mr-3 h-5 w-5" />
                                <span>{t('digitalists')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;