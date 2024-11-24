import React from 'react';
import Background from '../../assets/hero-background.png';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div id='top'
            className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20"
            style={{ backgroundImage: `url(${Background})` }}
        >
            {/* Overlay amélioré pour mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 md:from-black/30 md:to-transparent"></div>

            <div className='relative max-w-9xl mx-auto flex items-center min-h-[calc(100vh-5rem)] px-4 sm:px-8 md:px-12 lg:px-20'>
                <div className='w-full md:w-3/4 lg:w-[55%] p-4 sm:p-0'>
                    <h1 className='font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-5 
                        max-w-[100%] md:max-w-[90%] lg:max-w-[100%]'>
                        {t('heroTitle')}
                    </h1>

                    <p className='text-white font-light text-base sm:text-lg mb-6 md:mb-8 
                        max-w-[100%] md:max-w-[85%] lg:max-w-[90%] opacity-90'>
                        {t('heroDescription')}
                    </p>

                    <a href="https://digitalyglobal.com/"
                        className="inline-block w-full sm:w-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="w-full sm:w-auto bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end 
                            px-6 py-3 rounded-md hover:opacity-90 transition-all duration-300 
                            text-white flex items-center justify-center sm:justify-start font-bold text-sm sm:text-base
                            hover:scale-105"
                        >
                            {t('heroButton')}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;