import React from 'react';
import Background from '../../assets/hero-background.png';

const Hero = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Background})` }}
        >

            <div className='flex items-start justify-center flex-col h-lvh p-10'>

                <h1 className='font-semibold text-white text-6xl w-3/5 mb-5'>Collaboration instantannée pour nos équipes connectées</h1>

                <p className='text-white font-light text-lg mb-5'>Ce portail est un espace interne pour les membres de DIGITALY, distinct du site officiel.</p>

                <button className="bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 text-white flex font-bold" >Accéder au site officiel</button>

            </div>
        </div>
    );
};

export default Hero;

