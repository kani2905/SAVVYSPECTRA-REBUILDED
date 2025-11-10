import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#111827] text-white border-t border-gray-400 mt-2 pt-6 pb-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-2">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-8 items-start">

          {/* Brand */}
          <div className="pl-0 md:pl-16 text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Savvy Spectra Solutions  <br />  Pvt Ltd</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Empowering businesses with smart, scalable, and secure IT solutions across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-center">
           <div className="flex flex-col items-center md:items-center">

              <h4 className="text-lg font-semibold mb-1 tracking-wide">Quick Links</h4>

              <nav className="space-y-[7px] flex flex-col items-start">
                {['Home','About','Services','Industries','Why Choose-Us','Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-[15px] leading-[22px] text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Info */}
<div className="pl-0 md:pl-14 flex flex-col items-center md:items-start text-left">
  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
  <div className="space-y-3">
    <div className="flex items-start justify-start space-x-3">
      <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
      <p className="text-gray-300 text-sm text-left">
        FO-02, 4th Floor, 28/A, Smart Avenue,<br />
        80Feet Rd, Indiranagar,<br />
        Bangalore - 560038
      </p>
    </div>
    <div className="flex items-center justify-start space-x-3">
      <Phone size={20} className="text-blue-400 flex-shrink-0" />
      <a href="tel:+919739532183" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
        +91 97395 32183
      </a>
    </div>
    <div className="flex items-center justify-start space-x-3">
      <Mail size={20} className="text-blue-400 flex-shrink-0" />
      <a href="mailto:sivakumar@savvyspectra.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
        sivakumar@savvyspectra.com
      </a>
    </div>
  </div>
</div>


        </div>

        <div className="border-t border-gray-700 text-center max-w-5xl mx-auto">
          <p className="text-gray-400 text-sm mt-6">
            © {new Date().getFullYear()} Savvy Spectra Solutions Private Limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
