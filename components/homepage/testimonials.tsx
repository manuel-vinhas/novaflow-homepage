import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "NovaFlow's AI agents reduced our customer support costs by 45% while improving satisfaction scores by 25%.",
      company: "TechSolutions Inc."
    },
    {
      quote: "The Voice AI generated 240 qualified leads in the first month alone—more than our entire sales team.",
      company: "Global Retail Corp"
    },
    {
      quote: "Analysis that took our team two weeks is now completed overnight with greater accuracy.",
      company: "DataDriven Analytics"
    }
  ];

  const metrics = [
    { value: "300%", label: "Average ROI" },
    { value: "99.7%", label: "Uptime Guarantee" },
    { value: "92%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <p className="text-lg italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold">{testimonial.company}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Performance Metrics</h3>
          <div className="flex flex-wrap justify-around">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center px-4 py-2">
                <h2 className="text-4xl font-bold mb-1">{metric.value}</h2>
                <p className="text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;