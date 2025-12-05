import React from 'react';
// @ts-ignore: allow importing image without type declarations
import Logo from '../assets/Nav/logo.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                <img src={Logo} alt="Essential Space Logo" className="w-10 h-10 rounded-lg" />
              </div>
              <span className="font-[SweetApricot] text-3xl text-gray-900 ">Essential Space</span>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Essential Space. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-6">Ready to create more space in your mind?</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition-colors">
            Download Essential Space
          </button>
        </div>
      </div>
    </footer>
  );
};