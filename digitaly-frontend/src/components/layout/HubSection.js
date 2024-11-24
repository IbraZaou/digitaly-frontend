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
        <div className='flex items-center justify-between px-20 py-32 relative'>
            {/* Left Content */}
            <div className='w-1/2 pr-20'>
                <h2 className='text-5xl font-semibold text-h2-color leading-tight mb-8'>
                    {t('hubTitle')}
                </h2>
                <p className='text-h2-color text-lg leading-relaxed mb-10 opacity-80'>
                    {t('hubDescription')}
                </p>

                <button className="bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-300 text-white flex items-center font-bold text-lg">
                    {t('learnMore')}
                    <FontAwesomeIcon className='ml-3' icon={faArrowRight} />
                </button>
            </div>

            {/* Right Images Section */}
            <div className='w-1/2 relative h-[600px]'>
                {/* Main large image */}
                <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[500px] rounded-lg overflow-hidden'>
                    <img
                        src={Image1}
                        alt={t('mainWorkspace')}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Top floating image */}
                <div className='absolute -top-0 right-[15%] w-48 h-32 rounded-lg overflow-hidden'>
                    <img
                        src={HubImage2}
                        alt={t('teamCollaboration')}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Bottom floating image */}
                <div className='absolute -bottom-0 right-[75%] w-48 h-48 rounded-lg overflow-hidden'>
                    <img
                        src={HubImage3}
                        alt={t('developerWorkspace')}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Left floating image */}
                <div className='absolute left-0 top-[20%] w-48 h-32 rounded-lg overflow-hidden'>
                    <img
                        src={HubImage1}
                        alt={t('teamMeeting')}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default HubSection;