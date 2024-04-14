import React from 'react';
import { ArrowRight } from 'lucide-react';
import Layout2 from '../Layout/Layout2';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ title,loc, description, route }) {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    navigate(`/learn/${route}`);
  };

  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden shadow-lg m-4">
      <img
        src={loc}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left text-white">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <button
          onClick={handleLearnClick}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold"
        >
          Let's Learn <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function CategoryPage() {
  const categories = [
    {
      title: 'A-Z',
      loc: './src/assets/images/capital_letters.jpg',
      description: 'Capital Letters',
      route: 'capitals',
    },
    {
      title: 'a-z',
      loc: './src/assets/images/small_letters.jpg',
      description: 'Small Letters',
      route: 'smalls',
    },
    {
      title: '0-9',
      loc: './src/assets/images/digits.jpg',
      description: 'Digits',
      route: '0-9',
    },
    ];
  return (
    <Layout2>
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} loc={category.loc} description={category.description} route={category.route}/>
        ))}
      </div>
    </Layout2>
  );
}

export default CategoryPage;
