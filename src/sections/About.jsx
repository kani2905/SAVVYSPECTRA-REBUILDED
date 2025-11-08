import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
   <section id="about" className="relative py-16 bg-white overflow-hidden">

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            About <span className="text-[#084A8D]">Savvy Spectra Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-3" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Bangalore-based IT infrastructure company offering end-to-end solutions across India
          </p>
        </motion.div>

        {/* 3 Cards Animated */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {[
            {
              icon: <Target className="text-white" size={28} />,
              bg: "from-blue-50 to-white border-blue-100",
              title: "Our Mission",
              text: "To simplify IT for businesses of all sizes, making technology an enabler of growth and innovation."
            },
            {
              icon: <Eye className="text-white" size={28} />,
              bg: "from-purple-50 to-white border-purple-100",
              title: "Our Vision",
              text: "To be recognized as India’s most trusted IT partner by driving digital transformation seamlessly."
            },
            {
              icon: <MapPin className="text-white" size={28} />,
              bg: "from-blue-50 via-white to-purple-50 border-blue-100",
              title: "Who We Are",
              text: "Savvy Spectra Solutions is a premier IT infrastructure and solutions provider based in Bangalore serving all India."
            }
          ].map((c, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, rotate: 2, scale: 0.9 },
                visible: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { duration: 0.7, type: "spring" } },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${c.bg} p-8 rounded-2xl border shadow-lg`}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
