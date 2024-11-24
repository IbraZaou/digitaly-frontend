// components/sections/Service.js
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
        <div className="container max-w-[90%] mx-auto py-16 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col h-full">
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                            <img
                                src={service.image}
                                alt={t(service.titleKey)}
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <h3 className="text-h2-color font-semibold text-2xl my-3">
                            {t(service.titleKey)}
                        </h3>
                        <p className="text-h2-color">
                            {t(service.descriptionKey)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;