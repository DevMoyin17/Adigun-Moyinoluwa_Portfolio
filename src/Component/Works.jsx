import React from 'react';

const works = [
  {
    title: 'Mini E-commerce Website',
    description: 'A fully functional e-commerce platform featuring product listings, cart functionality, and a seamless checkout experience, built using React and Node.js.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
    liveUrl: 'https://mini-ecommerce-eight-lyart.vercel.app/',
    repoUrl: 'https://github.com/DevMoyin17/ecommerce',
  },
 
  {
    title: 'Healthcare Management System',
    description: 'A full-stack hospital management solution handling appointments, records, billing, and schedules. Built using React, Node.js, MongoDB.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
    liveUrl: 'https://hospital-management-omega-one.vercel.app/',
    repoUrl: 'https://github.com/DevMoyin17/hospital-management-system',
  },

 {
  title: 'Cryptocurrency Price Tracker',
  description: 'A responsive Vue 3 and Tailwind CSS app displaying real-time crypto prices with search, currency conversion, manual refresh, dark mode, and loading skeletons, powered by CoinGecko API.',
imageUrl: 'https://images.unsplash.com/photo-1639754390580-2e7437267698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D',
  liveUrl: 'https://crypto-tracker-sigma-lyart.vercel.app/',
  repoUrl: 'https://github.com/DevMoyin17/Crypto_tracker'
}


];

const Works = () => {
  return (
    <section className="py-16 bg-gray-950 text-white" id="work">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{work.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{work.description}</p>
                <div className="flex justify-center items-center gap-4">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={work.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-600 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
