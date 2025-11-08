import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Monitor,
  Building2,
  Factory,
  GraduationCap,
  Heart,
  ShoppingBag,
  Rocket,
  Radio
} from 'lucide-react';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: Monitor,
      title: 'IT & ITeS',
      description: 'Technology infrastructure for software and service companies',
    },
    {
      icon: Building2,
      title: 'BFSI',
      description: 'Secure solutions for banking and financial institutions',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart manufacturing',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Digital infrastructure for educational institutions',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for medical facilities',
    },
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Omnichannel technology for retail businesses',
    },
    {
      icon: Rocket,
      title: 'Startups & SMBs',
      description: 'Scalable IT solutions for growing businesses',
    },
    {
      icon: Radio,
      title: 'Telecommunication',
      description: 'Robust infrastructure for telecom service providers',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="industries" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50" />

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industries-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industries-pattern)" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Industries We <span className="text-blue-600">Serve</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering specialized IT solutions across diverse sectors with industry-specific expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 rounded-xl transition-all duration-300" />

                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-200">
                      <Icon className="text-white" size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl" />
            </div>

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Serving Clients Across India
              </h3>
              <p className="text-lg text-blue-50 max-w-3xl mx-auto leading-relaxed mb-6">
                From Bangalore to Delhi, Mumbai to Chennai, we provide comprehensive IT solutions
                to businesses across major cities and emerging markets throughout India.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-white font-medium">
                {['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'].map((city, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
