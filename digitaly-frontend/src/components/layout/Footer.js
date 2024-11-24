import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faYoutube, faFacebookF, faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t, currentLang, changeLanguage, languages } = useLanguage();
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);

    const scrollToTop = (e) => {
        e.preventDefault();
        const element = document.getElementById('top');
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className='bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end px-4 sm:px-8 lg:px-20 py-6 lg:py-10 text-white'>
            {/* Top Section */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-8 lg:mb-16'>
                <img src={Logo} alt="Logo" className="h-8 md:h-5" />
                <button
                    onClick={scrollToTop}
                    className='text-white text-base lg:text-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
                >
                    <FontAwesomeIcon className='mr-3 sm:mr-5' color='white' icon={faCircleChevronUp} />
                    <span className="whitespace-nowrap font-light ">{t('backToTop')}</span>
                </button>
            </div>

            {/* Grid Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 lg:mb-16'>
                {/* Language Section */}
                <div className='order-last sm:order-first lg:order-none'>
                    {/* <h3 className="font-semibold mb-4 text-lg">{t('selectLanguage')}</h3> */}
                    <div className="relative">
                        <button
                            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base"
                            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                        >
                            <FontAwesomeIcon icon={faGlobe} />
                            <span>{currentLang.toUpperCase()}</span>
                        </button>

                        {/* Language Dropdown */}
                        {showLanguageMenu && (
                            <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg py-1 z-50 min-w-[120px]">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                            setShowLanguageMenu(false);
                                        }}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Enterprise Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">{t('enterprise')}</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('homeDigitaly')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('ourHistory')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('ourAgencies')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('privacyPolicy')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('legalInfo')}</a></li>
                    </ul>
                </div>

                {/* Employment Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">{t('employment')}</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('careers')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('discoverJobs')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('joinUs')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('training')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('internship')}</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">{t('contactUs')}</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('contact')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('pressRoom')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('news')}</a></li>
                        <li><a href="#" className="hover:opacity-80 text-sm sm:text-base">{t('followUs')}</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8'>
                <p className="text-xs sm:text-sm opacity-80 text-center sm:text-left">
                    {t('copyright')}
                </p>
                <div className="flex gap-4 sm:gap-6">
                    <a href="https://discord.gg/digitaly" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="https://twitter.com/DigitalyGlobal" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </a>
                    <a href="https://www.youtube.com/@digitalyglobal" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                    <a href="https://discord.gg/digitaly" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </a>
                    <a href=" https://www.instagram.com/DigitalyGlobal/" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="https://www.tiktok.com/@digitalyglobal" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faTiktok} size="lg" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;