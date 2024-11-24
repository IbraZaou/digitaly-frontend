import React from 'react';
import Mehdi from '../../assets/mehdi.jpg';
import ImageEmail from '../../assets/Image_email1.jpg';
import Commu from '../../assets/Commu.jpg';
import { useLanguage } from '../../context/LanguageContext';

const Service = () => {
    const { t } = useLanguage();

    const services = [
        {
            image: Mehdi,
            titleKey: 'service1Title',
            descriptionKey: 'service1Description',
        },
        {
            image: ImageEmail,
            titleKey: 'service2Title',
            descriptionKey: 'service2Description',
        },
        {
            image: Commu,
            titleKey: 'service3Title',
            descriptionKey: 'service3Description',
        }
    ];

    return (
        <div className="w-full py-16 lg:py-32">
            <div className="max-w-[90%] mx-auto py-5">
                {/* Container pour le scroll */}
                <div className="relative">
                    <div className="flex overflow-x-auto gap-6 pb-8 lg:pb-5 lg:grid lg:grid-cols-3 
                        no-scrollbar snap-x snap-mandatory">
                        {services.map((service, index) => (
                            <div key={index}
                                className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 lg:w-full 
                                flex flex-col bg-white shadow-md rounded-lg hover:-translate-y-6 
                                transition-all duration-300 ease-in-out snap-start"
                            >
                                {/* Image container */}
                                <div className="h-48 sm:h-56 lg:h-64 w-full overflow-hidden rounded-t-lg">
                                    <img
                                        src={service.image}
                                        alt={t(service.titleKey)}
                                        className="w-full h-full object-cover object-center 
                                            hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content container */}
                                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                                    <h3 className="text-h2-color font-semibold text-xl lg:text-2xl mb-4">
                                        {t(service.titleKey)}
                                    </h3>
                                    <p className="text-h2-color text-sm lg:text-base">
                                        {t(service.descriptionKey)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;