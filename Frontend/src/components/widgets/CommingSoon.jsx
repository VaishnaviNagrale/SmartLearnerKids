import React from 'react'
import { Star, ChevronDown } from 'lucide-react'
import image from '../../assets/SmartLearnerKids.jpg'

const CommingSoon = () => {
  return (
    <section className="overflow-hidden animate-pulse">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt=""
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
      src={image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h1 className="my-4 text-3xl font-semibold text-black">Comming Soon</h1>
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
  )
}
export default CommingSoon;