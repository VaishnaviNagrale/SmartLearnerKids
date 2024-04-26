import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import image from '../assets/SmartLearnerKids.jpg';
import Footer from './Layout/Footer';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-full" style={{background:"linear-gradient(to bottom right, #ffffff, #fa9490, #85e7f8)",animation: "gradientAnimation 30s infinite"}}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <img
              alt="Logo"
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-orange-600"
              src={image}
            />
            <span className="font-bold">EffectiveLearnerKids</span>
          </div>
          <div className="hidden lg:flex space-x-4">
            <Link to="/login" className="text-orange-300 hover:text-white relative">
              <button className="bg-orange text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 relative overflow-hidden">
                <span className="absolute -inset-0 bg-orange-300 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 rounded-full"></span>
                Login
              </button>
            </Link>

            <Link to="/register" className="text-orange-300 hover:text-white relative">
              <button className="bg-orange text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 relative overflow-hidden">
                <span className="absolute -inset-0 bg-orange-300 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 rounded-full"></span>
                Sign Up
              </button>
            </Link>

          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="bg-white shadow-md rounded-md py-2">
                <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Login
                </Link>
                <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
        <section className="overflow-hidden animate-none">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt=""
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
      src={image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h1 className="my-4 text-3xl font-semibold text-black">Welcome To Our Website!!</h1>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
