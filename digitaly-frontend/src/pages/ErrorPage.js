// pages/ErrorPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ErrorPage = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-20">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-button-gradient-blue-start mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-h2-color mb-4">{t('pageNotFound')}</h2>
                <p className="text-lg text-gray-600 mb-8">{t('pageNotFoundDescription')}</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end 
                    px-6 py-3 rounded-md text-white font-semibold hover:opacity-90 transition-all duration-300"
                >
                    {t('backToHome')}
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;