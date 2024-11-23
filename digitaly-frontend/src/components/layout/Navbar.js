import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Vector from '../../assets/Vector.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div class='px-8 py-4 flex justify-between absolute w-full'>

            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>


            <div className="flex items-center space-x-8 justify-between px-8">

                <Link to="/entreprise" className="hover:text-gray-300 px-4 text-white">
                    L'Entreprise
                </Link>
                <Link to="/emploi" className="hover:text-gray-300 px-4 text-white">
                    Emploi
                </Link>
                <Link to="/contact" className="hover:text-gray-300 px-4 text-white">
                    Contact
                </Link>

                <a href='/' className="flex items-center justify-center space-x-4">
                    <span className="hover:text-gray-300 flex justify-center items-center pr-4 text-white">
                        <FontAwesomeIcon className='mr-3' icon={faGlobe} />
                        FR
                    </span>

                    <a
                        href="/espace-digitalists"
                        className="bg-gradient-to-r from-button-gradient-blue-start to-button-gradient-blue-end px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 text-white flex font-bold"
                    >
                        <img class="mr-3" alt='Vector' src={Vector} />

                        Espace DIGITALISTS
                    </a>
                </a>
            </div>

        </div>
    );
};

export default Navbar;