import { motion } from 'framer-motion';
import { ShieldCheckIcon, CameraIcon, KeyIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Physical Security',
    description: 'Professional security guards and patrol services for your premises. 24/7 protection with highly trained personnel.',
    price: 'Custom Quote',
    icon: ShieldCheckIcon,
    features: ['24/7 Guard Service', 'Mobile Patrols', 'Emergency Response', 'Threat Assessment']
  },
  {
    title: 'Electronic Surveillance',
    description: 'State-of-the-art CCTV systems and monitoring solutions with AI-powered threat detection.',
    price: 'Starting at $99/mo',
    icon: CameraIcon,
    features: ['HD Cameras', 'Night Vision', 'Motion Detection', 'Cloud Storage']
  },
  {
    title: 'Access Control',
    description: 'Modern access control systems for secure entry management with biometric options.',
    price: 'Starting at $199/mo',
    icon: KeyIcon,
    features: ['Biometric Scanning', 'Key Card Access', 'Remote Management', 'Audit Trails']
  },
  {
    title: 'Event Security',
    description: 'Specialized security services for events and special occasions with comprehensive coverage.',
    price: 'Custom Quote',
    icon: UserGroupIcon,
    features: ['Crowd Control', 'VIP Protection', 'Risk Assessment', 'Emergency Planning']
  },
];

export default function Services() {
  return (
    <div className="w-full bg-white dark:bg-black min-h-screen">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="heading-1 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professional Security <span className="text-red-600 dark:text-red-500">Services</span>
          </motion.h1>
          <motion.p 
            className="text-content max-w-3xl mx-auto text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive security solutions tailored to protect what matters most to you.
            Our expert team ensures your safety with cutting-edge technology and professional service.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                <div className="relative bg-white dark:bg-black rounded-lg p-4">
                  <service.icon className="h-8 w-8 text-red-600 dark:text-red-500" />
                </div>
              </div>
              
              <h3 className="mt-6 heading-3">{service.title}</h3>
              <p className="mt-4 text-content">{service.description}</p>
              
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-content">
                    <svg className="h-5 w-5 text-red-600 dark:text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-baseline">
                <span className="text-2xl font-bold text-red-600 dark:text-red-500">{service.price}</span>
              </div>

              <motion.button 
                className="mt-8 btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="heading-2 mb-6">Ready to enhance your security?</h2>
          <p className="text-content mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom security solution tailored to your needs.
          </p>
          <motion.button 
            className="btn-primary px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
