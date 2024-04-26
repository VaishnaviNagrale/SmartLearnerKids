import React from 'react';
import { ArrowRight } from 'lucide-react';
import Layout2 from '../Layout/Layout2';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/categories');
  };

  return (
    <Layout2>
      <button
        type="button"
        className="animate-bounce justify-center inline-flex items-center rounded-md bg-blue-200 px-6 py-3 text-sm font-bold text-black hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-600"
        onClick={handleButtonClick}
      >
        Let's Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </Layout2>
  );
}

export default HomePage;
