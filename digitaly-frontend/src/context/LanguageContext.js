// contexts/LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, languages } from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('fr');

    useEffect(() => {
        // Vérifier si une langue est déjà stockée
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            setCurrentLang(savedLang);
        } else {
            // Sinon, détecter la langue du navigateur
            const browserLang = navigator.language.split('-')[0];
            if (translations[browserLang]) {
                setCurrentLang(browserLang);
            }
        }
    }, []);

    const changeLanguage = (lang) => {
        setCurrentLang(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    return (
        <LanguageContext.Provider value={{
            currentLang,
            changeLanguage,
            languages, // Exporter la liste des langues disponibles
            t: (key) => translations[currentLang][key] || key // Helper de traduction
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};