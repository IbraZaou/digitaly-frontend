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
            {/* Overlay pour améliorer la lisibilité sur mobile */}
            <div className="absolute inset-0 bg-black/30 md:bg-transparent"></div>

            <div className='relative max-w-9xl mx-auto flex items-center min-h-[calc(100vh-5rem)] p-4 sm:p-6 md:p-10 lg:p-20'>
                <div className='w-full lg:w-3/5'>
                    <h1 className='font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-5'>
                        {t('heroTitle')}
                    </h1>

                    <p className='text-white font-light text-base sm:text-lg max-w-xl mb-6 md:mb-8'>
                        {t('heroDescription')}
                    </p>

                    <button
                        className="w-full sm:w-auto bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end 
                        px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-300 
                        text-white flex items-center justify-center sm:justify-start font-bold text-sm sm:text-base"
                    >
                        {t('heroButton')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;