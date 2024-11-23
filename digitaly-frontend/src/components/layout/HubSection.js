import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../assets/image1.png'

const HubSection = () => {
    return (
        <div className='flex items-center'>
            <div className=' p-20'>
                <h2 className='text-4xl font-semibold text-h2-color w-3/6'>
                    Le Hub dédié à la Synergie des DIGITALISTS
                </h2>
                <p className='w-3/5 my-10 text-h2-color text-sm leading-6'>
                    Cet espace exclusif est conçu pour renforcer la collaboration et l’efficacité de nos équipes. Ici, chaque membre trouve un environnement dédié à l’harmonie et à la réussite collective, favorisant une synergie optimale au sein de DIGITALY. Découvrez comment nous travaillons ensemble pour atteindre nos objectifs communs et faire des projets de nos clients une réussite.
                </p>

                <button className="bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 text-white flex font-bold items-center justify-center">
                    En Savoir Plus
                    <FontAwesomeIcon className='ml-3 mt-1' icon={faArrowRight} />
                </button>

            </div>

            <div>
                <img className='h-full w-full' src={Image1} alt="image1" />
            </div>
        </div>
    );
};

export default HubSection;