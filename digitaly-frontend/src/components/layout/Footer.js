// components/layout/Footer.js
import React from 'react';
import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faYoutube, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    const scrollToTop = (e) => {
        e.preventDefault();
        const element = document.getElementById('top');
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className='bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end px-20 py-10 text-white'>
            <div className='flex justify-between items-center mb-16'>
                <img src={Logo} alt="Logo" className="h-8" />
                <button
                    onClick={scrollToTop}
                    className='text-white text-lg flex items-center w-80 hover:opacity-80 transition-opacity duration-300'
                >
                    <FontAwesomeIcon className='mr-5' color='white' icon={faCircleChevronUp} />
                    {t('backToTop')}
                </button>
            </div>

            <div className='grid grid-cols-4 gap-8 mb-16'>
                <div>
                    <h3 className="font-semibold mb-4">{t('selectLanguage')}</h3>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">{t('enterprise')}</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:opacity-80">{t('homeDigitaly')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('ourHistory')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('ourAgencies')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('privacyPolicy')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('legalInfo')}</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">{t('employment')}</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:opacity-80">{t('careers')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('discoverJobs')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('joinUs')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('training')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('internship')}</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">{t('contactUs')}</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:opacity-80">{t('contact')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('pressRoom')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('news')}</a></li>
                        <li><a href="#" className="hover:opacity-80">{t('followUs')}</a></li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-between items-center pt-8 border-t border-white/20'>
                <p className="text-sm opacity-80">{t('copyright')}</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;