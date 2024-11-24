import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../assets/image1.png';
import HubImage1 from '../../assets/HubImage1.png';
import HubImage2 from '../../assets/HubImage2.png';
import HubImage3 from '../../assets/HubImage3.png';
import { useLanguage } from '../../context/LanguageContext';

const HubSection = () => {
    const { t } = useLanguage();

    return (
        <div>
            <div className='max-w-[90%] mx-auto py-16 lg:py-32'>
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
                    {/* Left Content */}
                    <div className='w-full lg:w-1/2 text-center lg:text-left'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-h2-color leading-tight mb-6 lg:mb-8'>
                            {t('hubTitle')}
                        </h2>
                        <p className='text-h2-color text-base sm:text-lg leading-relaxed mb-8 lg:mb-10 opacity-80'>
                            {t('hubDescription')}
                        </p>

                        <button className="w-full sm:w-auto bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end 
                            px-4 sm:px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-300 
                            text-white flex items-center justify-center lg:justify-start font-bold text-base sm:text-lg">
                            {t('learnMore')}
                            <FontAwesomeIcon className='ml-3' icon={faArrowRight} />
                        </button>
                    </div>

                    {/* Right Images Section - Position absolue par rapport au conteneur parent */}
                    <div className='w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[600px]'>
                        {/* Main large image */}
                        <div className='absolute right-0 lg:-right-[calc((52vw-100%)/2)] top-1/2 -translate-y-1/2 w-[90%] h-[300px] sm:h-[400px] lg:h-[500px] 
                            rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]'>
                            <img
                                src={Image1}
                                alt={t('mainWorkspace')}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Top floating image - Hidden on mobile */}
                        <div className='hidden sm:block absolute -top-0 right-[5%] w-32 sm:w-40 lg:w-48 h-24 sm:h-28 lg:h-32 
                            rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
                            <img
                                src={HubImage2}
                                alt={t('teamCollaboration')}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Bottom floating image - Hidden on mobile */}
                        <div className='hidden sm:block absolute -bottom-0 right-[65%] w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 
                            rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
                            <img
                                src={HubImage3}
                                alt={t('developerWorkspace')}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        {/* Left floating image - Hidden on mobile */}
                        <div className='hidden sm:block absolute left-20 top-[20%] w-32 sm:w-40 lg:w-48 h-24 sm:h-28 lg:h-32 
                            rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105'>
                            <img
                                src={HubImage1}
                                alt={t('teamMeeting')}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HubSection;