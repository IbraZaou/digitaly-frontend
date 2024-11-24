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
            {/* Container avec scroll horizontal sur mobile */}
            <div className="max-w-[90%] mx-auto py-5">
                <div className="flex gap-8 pb-8 lg:pb-5
                    scrollbar-hide lg:grid lg:grid-cols-3 no-scrollbar ">
                    {services.map((service, index) => (
                        <div key={index}
                            className="flex-none w-[85%] sm:w-[60%] md:w-[45%] lg:w-full 
                            flex flex-col h-full shadow-md rounded-md  hover:-translate-y-6 transition ease-in-out duration-300
                            snap-start 
                           "
                        >
                            <div className="w-full h-7 lg:h-80 overflow-hidden rounded-lg shadow-lg mb-4">
                                <img
                                    src={service.image}
                                    alt={t(service.titleKey)}
                                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 lg:p-10">


                                <h3 className="text-h2-color font-semibold text-xl lg:text-2xl my-3">
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
    );
};

export default Service;

