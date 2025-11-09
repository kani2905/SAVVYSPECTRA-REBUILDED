import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    emailjs
      .send(
        'service_8sleh8m', // 🔹 your EmailJS service ID
        'template_vum7p0z', // 🔹 your EmailJS template ID
        {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  company: formData.company,
  message: formData.message,
},
        'j_fv3k-w38X4FuSwI' // 🔹 your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitted(true);; // show success message
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          });
          // hide message after 5 seconds
         setTimeout(() => {
  setSubmitted(false)
}, 5000);

        },
        (error) => {
          console.error('Email sending failed:', error.text);
          alert('Something went wrong! Please try again later.');
        }
      );
  }
};


   const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'FO-02, 4th Floor, 28/A, Smart Avenue, 80Feet Rd, Indiranagar, Bangalore - 560038',
    color: 'purple',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 97395 32183',
    link: 'tel:+919739532183',
    color: 'orange',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'sivakumar@savvyspectra.com',
    link: 'mailto:sivakumar@savvyspectra.com',
    color: 'green',
  }
];


const colorVariants = {
  blue: 'from-[#0A57A3] to-[#084A8D]',
  purple: 'from-[#6A0DAD] to-[#520A8A]',
  orange: 'from-[#FF9500] to-[#CC7700]',
  green: 'from-[#00A36C] to-[#007F52]',
  red: 'from-[#E63946] to-[#C5303C]',
};



  return (
  <section id="contact" className="pt-4 pb-8 bg-white">

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#084A8D]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">


          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="h-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">

                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>

                    <div className={`w-10 h-10 bg-gradient-to-br ${colorVariants[info.color]} rounded-lg flex items-center justify-center shadow-md`}>
  <info.icon className="text-white" size={18} />
</div>

                  </div>

                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors block leading-relaxed"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">{info.content}</p>
                  )}

                </div>

              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-gray-100"


        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3"
            >
              <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
              <p className="text-green-800 font-medium">
                Message sent successfully! We'll get back to you soon.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-1.5 rounded-lg border ${
                    errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-1.5 rounded-lg border ${
                    errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-1.5 rounded-lg border ${
                    errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-1.5 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none`}
                placeholder="Tell us about your requirements..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#084A8D] to-[#084A8D] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#084A8D] hover:to-[#084A8D] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
