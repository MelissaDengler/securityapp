import { motion } from 'framer-motion';
import {
  FaCarSide,
  FaHouse,
  FaMobile,
  FaPersonWalking,
  FaShieldHalved,
  FaTriangleExclamation,
} from 'react-icons/fa6';

const safetyTips = [
  {
    icon: FaCarSide,
    title: 'Vehicle Safety',
    description: 'Keep your car doors locked and windows closed, especially in traffic. Park in well-lit areas and be aware of your surroundings when approaching or leaving your vehicle. Install a tracking device and keep valuables out of sight.',
    tips: [
      'Install a reliable car alarm and immobilizer',
      'Never leave valuables visible in your car',
      'Be vigilant at traffic lights and intersections'
    ]
  },
  {
    icon: FaHouse,
    title: 'Home Security',
    description: 'Secure all entry points with quality locks. Install security gates, burglar bars, and an alarm system connected to armed response. Keep outdoor areas well-lit and maintain good visibility around your property.',
    tips: [
      'Install security cameras and motion sensors',
      'Keep emergency numbers readily available',
      'Join your neighborhood watch group'
    ]
  },
  {
    icon: FaPersonWalking,
    title: 'Personal Safety',
    description: 'Stay alert and aware of your surroundings at all times. Avoid walking alone, especially at night. Keep valuables concealed and be cautious when using ATMs or handling cash in public.',
    tips: [
      'Walk confidently and stay aware of surroundings',
      'Avoid displaying valuable items in public',
      'Use well-lit and populated routes'
    ]
  },
  {
    icon: FaMobile,
    title: 'Digital Security',
    description: 'Keep your phone secure and avoid using it visibly in public places. Share your location with trusted contacts when traveling. Have emergency numbers on speed dial and use tracking apps.',
    tips: [
      'Install emergency response apps',
      'Keep location sharing on with trusted contacts',
      'Save emergency numbers for quick access'
    ]
  },
  {
    icon: FaShieldHalved,
    title: 'Public Transport Safety',
    description: 'Use registered taxi services and avoid unmarked taxis. When using public transport, stay alert and keep your belongings close. Travel in groups when possible and avoid isolated stations.',
    tips: [
      'Use only authorized taxi services',
      'Keep belongings close and secure',
      'Travel in groups when possible'
    ]
  },
  {
    icon: FaTriangleExclamation,
    title: 'Emergency Preparedness',
    description: 'Have a plan for various emergency scenarios. Keep a list of emergency contacts easily accessible. Know the locations of nearby police stations, hospitals, and safe zones.',
    tips: [
      'Create and practice emergency plans',
      'Keep a safety kit in your car and home',
      'Know your nearest safe zones'
    ]
  }
];

export default function SafetyTips() {
  return (
    <div className="w-full bg-white dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
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
            Cape Town Safety <span className="text-red-600 dark:text-red-500">Tips</span>
          </motion.h1>
          <motion.p 
            className="text-content text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Stay safe in Cape Town with our comprehensive security guidelines. These tips are designed to help you navigate daily life safely and confidently.
          </motion.p>
        </motion.div>

        {/* Safety Tips Grid */}
        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {safetyTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                <div className="relative bg-white dark:bg-black rounded-lg p-4 w-fit">
                  <tip.icon className="h-8 w-8 text-red-600 dark:text-red-500" />
                </div>
              </div>
              
              <h3 className="heading-3 mb-4">{tip.title}</h3>
              <p className="text-content mb-6">{tip.description}</p>
              
              <ul className="space-y-2">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-red-600 dark:text-red-500 mt-1">•</span>
                    <span className="text-content">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Contacts Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="heading-2 mb-6">Emergency Contacts</h2>
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:10111" 
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <span>Police Emergency: 10111</span>
            </a>
            <a 
              href="tel:107" 
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <span>Ambulance: 107</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
