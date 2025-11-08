import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  Target,
  Users,
  MapPin,
  HeartHandshake,
  TrendingUp
} from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: 'Trusted Expertise',
      description: 'Decades of combined experience in IT infrastructure and solutions delivery across multiple industries',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'End-to-End Capabilities',
      description: 'Comprehensive services from initial consultation to deployment, integration, and ongoing support',
      color: 'purple',
    },
    {
      icon: Users,
      title: 'Multi-Vendor Expertise',
      description: 'Certified partnerships with leading OEMs ensuring genuine products and expert implementation',
      color: 'cyan',
    },
    {
      icon: MapPin,
      title: 'India-Wide Reach',
      description: 'Strategic presence serving clients across major cities and emerging markets throughout India',
      color: 'green',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-First Approach',
      description: 'Flexible engagement models and 24×7 support ensuring your business operations never stop',
      color: 'amber',
    },
    {
      icon: TrendingUp,
      title: 'Innovation-Driven Solutions',
      description: 'Continuous adaptation to emerging technologies keeping your business ahead of the curve',
      color: 'red',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const colorVariants = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    cyan: 'from-cyan-500 to-cyan-600',
    green: 'from-green-500 to-green-600',
    amber: 'from-amber-500 to-amber-600',
    red: 'from-red-500 to-red-600',
  };

  const hoverColorVariants = {
    blue: 'group-hover:shadow-blue-200',
    purple: 'group-hover:shadow-purple-200',
    cyan: 'group-hover:shadow-cyan-200',
    green: 'group-hover:shadow-green-200',
    amber: 'group-hover:shadow-amber-200',
    red: 'group-hover:shadow-red-200',
  };

  return (
    <section id="why-choose-us" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl" />
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Savvy Spectra</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in digital transformation with proven expertise and unwavering commitment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl ${hoverColorVariants[feature.color]} transition-all duration-300 border border-gray-100`}>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorVariants[feature.color]} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colorVariants[feature.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full filter blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full filter blur-3xl" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your IT Infrastructure?
                </h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Partner with Savvy Spectra Solutions and experience the difference that true IT expertise makes. Let's build your digital future together.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-sm text-blue-100">Uptime SLA</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">&lt;15m</div>
                  <div className="text-sm text-blue-100">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-blue-100">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-blue-100">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
