import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Cloud, Settings, Shield, Lightbulb, ShoppingCart } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Design, deployment, and management of robust IT infrastructure tailored to your business needs.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud migration, management, and optimization services for enhanced agility and cost-efficiency.',
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Settings,
      title: 'Managed IT Services',
      description: 'Comprehensive managed services ensuring your IT systems run smoothly with 24/7 monitoring and support.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving cyber threats and ensure compliance.',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: Lightbulb,
      title: 'IT Consulting',
      description: 'Strategic IT advisory services to align technology with your business objectives and drive innovation.',
      gradient: 'from-amber-500 to-amber-600',
    },
    {
      icon: ShoppingCart,
      title: 'IT Product Reselling',
      description: 'Certified partnerships with leading OEMs providing genuine hardware and software solutions.',
      gradient: 'from-green-500 to-green-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Core <span className="text-[#084A8D]">Offerings</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-3" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to empower your business with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full filter blur-2xl`} />
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
    <Icon className="text-white" size={22} />
  </div>

  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
    {service.title}
  </h3>
</div>


                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
