import { ShieldCheckIcon, VideoCameraIcon, BellAlertIcon } from '@heroicons/react/24/outline';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Toast from '../components/Toast';
import LoadingSpinner from '../components/LoadingSpinner';
import ServiceModal from '../components/ServiceModal';

const upcomingServices = [
  {
    name: 'Armed Response',
    description: 'Swift and professional armed response services available 24/7. Our highly trained officers ensure rapid response times and maximum security.',
    icon: ShieldCheckIcon,
    features: [
      'Rapid response times',
      'Highly trained armed officers',
      '24/7 availability',
      'GPS tracked vehicles',
      'Direct dispatch center communication'
    ],
    eta: 'Coming January 2024',
    details: {
      pricing: 'Starting from R499/month',
      coverage: 'All major cities in South Africa',
      response: 'Average response time: 4-7 minutes',
      equipment: [
        'Armed Response Vehicles',
        'Body Cameras',
        'GPS Tracking',
        'Mobile Command Center',
        'Tactical Equipment',
        'Communication Systems'
      ]
    }
  },
  {
    name: 'Advanced Surveillance',
    description: 'State-of-the-art surveillance systems with AI-powered detection and real-time monitoring capabilities.',
    icon: VideoCameraIcon,
    features: [
      'AI-powered threat detection',
      'High-resolution cameras',
      'Night vision capabilities',
      'Remote monitoring',
      'Cloud storage solutions'
    ],
    eta: 'Coming February 2024',
    details: {
      pricing: 'Starting from R799/month',
      coverage: 'Customizable for any property size',
      response: 'Real-time alerts within seconds',
      equipment: [
        '4K HD Cameras',
        'AI Processing Units',
        'Motion Sensors',
        'Night Vision Tech',
        'Cloud Storage',
        'Mobile App Access'
      ]
    }
  },
  {
    name: 'Smart Alarm Systems',
    description: 'Next-generation alarm systems with smart home integration and advanced detection capabilities.',
    icon: BellAlertIcon,
    features: [
      'Smart home integration',
      'Mobile app control',
      'Advanced motion detection',
      'Battery backup',
      'Tamper alerts'
    ],
    eta: 'Coming March 2024',
    details: {
      pricing: 'Starting from R299/month',
      coverage: 'Available nationwide',
      response: 'Instant notifications',
      equipment: [
        'Smart Hub',
        'Motion Detectors',
        'Door Sensors',
        'Window Sensors',
        'Panic Buttons',
        'Backup Battery'
      ]
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5
    }
  }
};

const featureVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const shimmerVariants = {
  hidden: { x: "-100%" },
  visible: { 
    x: "100%",
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

export default function ComingSoon() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<typeof upcomingServices[0] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleNotifyClick = async (serviceName: string) => {
    setLoading(serviceName);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(null);
    setToastMessage(`You'll be notified when ${serviceName} launches!`);
    setShowToast(true);
  };

  const handleServiceClick = (service: typeof upcomingServices[0]) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-light-bg to-light-card dark:from-dark-bg dark:to-dark-card">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="heading-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Coming <span className="text-primary-600">Soon</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg sm:text-xl lg:text-2xl text-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              We're expanding our security services to provide even more comprehensive protection.
              Stay tuned for these exciting new offerings.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-light-card dark:bg-dark-card">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Our Upcoming Services
            </h2>
            <p className="mt-2 heading-2">
              Everything you need for complete security
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {upcomingServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="card flex flex-col items-start h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="rounded-lg bg-light-hover dark:bg-dark-hover p-3">
                    <service.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <dt className="mt-4 heading-3">{service.name}</dt>
                  <dd className="mt-2 text-content">{service.description}</dd>
                  <motion.div 
                    className="mt-6 inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/10 px-3 py-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: 0.6 + index * 0.2 
                    }}
                  >
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {service.eta}
                    </span>
                  </motion.div>
                  <motion.button 
                    className="mt-6 btn-primary w-full relative overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNotifyClick(service.name);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading === service.name}
                  >
                    {loading === service.name ? (
                      <LoadingSpinner size="sm" color="text-white" />
                    ) : (
                      <>
                        <span>Notify Me</span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="success"
        duration={4000}
      />

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          service={selectedService}
        />
      )}
    </div>
  );
}
