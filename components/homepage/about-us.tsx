import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const teamMembers = [
    { 
      title: "AI Director", 
      imagePath: "/api/placeholder/120/120",
      description: "Leads our AI development team with 15+ years of experience in machine learning and natural language processing."
    },
    { 
      title: "ML Engineer", 
      imagePath: "/api/placeholder/120/120",
      description: "Specializes in developing custom machine learning models optimized for business process automation."
    },
    { 
      title: "Solutions Architect", 
      imagePath: "/api/placeholder/120/120",
      description: "Designs seamless integration solutions between our AI agents and client business systems."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About NovaFlow</h2>
          <p className="text-xl text-purple-600 font-medium">Experts in AI agent development</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Story</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                NovaFlow was founded by experts in artificial intelligence and machine learning who recognized the increasing demand for specialized AI agent solutions. We combine technical expertise with business process knowledge to deliver AI that creates real value.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To transform how businesses operate by creating intelligent AI agents that handle routine tasks with exceptional quality, allowing human talent to focus on creative and strategic work.
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our professionals bring decades of combined experience in AI development, machine learning optimization, and enterprise software integration. We&apos;re passionate about helping businesses leverage the latest advancements in AI technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100">
                  <div className="mb-4 mx-auto relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-100">
                    <Image 
                      src={member.imagePath} 
                      alt={member.title} 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>
                  <h4 className="font-bold text-xl text-center text-gray-800 mb-2">{member.title}</h4>
                  <p className="text-gray-600 text-sm text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;