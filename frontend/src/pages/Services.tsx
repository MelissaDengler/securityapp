import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CameraIcon, 
  KeyIcon, 
  UserGroupIcon, 
  ClockIcon,
  BoltIcon,
  EyeIcon,
  HeartIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CreditCardIcon, 
  BanknotesIcon, 
  BuildingLibraryIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

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

// Add this new array for why choose us features
const whyChooseUs = [
  {
    title: "Industry Experience",
    description: "Over 15 years of security expertise serving residential and commercial clients across South Africa.",
    icon: ClockIcon,
    stats: "15+ Years",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Rapid Response",
    description: "Average response time of under 5 minutes with our strategically located response units.",
    icon: BoltIcon,
    stats: "<5 min",
    gradient: "from-red-500 to-red-600"
  },
  {
    title: "Certified Team",
    description: "All our security personnel are PSIRA registered and undergo continuous training.",
    icon: ShieldCheckIcon,
    stats: "100% Certified",
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "24/7 Monitoring",
    description: "State-of-the-art control room with redundant systems for uninterrupted service.",
    icon: EyeIcon,
    stats: "24/7/365",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Client Satisfaction",
    description: "Maintaining a 98% client satisfaction rate with transparent service delivery.",
    icon: HeartIcon,
    stats: "98% Rating",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    title: "Advanced Technology",
    description: "Leveraging cutting-edge security technology and AI-powered solutions.",
    icon: CpuChipIcon,
    stats: "Smart Security",
    gradient: "from-yellow-500 to-yellow-600"
  }
];

// Add this new array for payment plans
const paymentPlans = [
  {
    name: 'Monthly Plan',
    price: 'R499',
    period: '/month',
    description: 'Perfect for residential security needs',
    features: [
      'No long-term contract',
      'Monthly system check',
      'Standard response time',
      '24/7 monitoring',
      'Basic app access'
    ],
    icon: CreditCardIcon,
    popular: false
  },
  {
    name: 'Annual Plan',
    price: 'R449',
    period: '/month',
    description: 'Most popular for homes and small businesses',
    features: [
      '12-month contract',
      'Priority response',
      'Quarterly system upgrade',
      'Advanced app features',
      'Free equipment maintenance',
      'SMS notifications'
    ],
    icon: BanknotesIcon,
    popular: true
  },
  {
    name: 'Business Plan',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for businesses',
    features: [
      'Customized contract terms',
      'VIP response priority',
      'Monthly security assessment',
      'Dedicated account manager',
      'Multi-location support',
      'API integration options'
    ],
    icon: BuildingLibraryIcon,
    popular: false
  }
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

        {/* Payment Plans Section */}
        <motion.section 
          className="mt-32 mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Flexible Payment Options
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Choose Your <span className="text-red-600 dark:text-red-500">Security Plan</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transparent pricing with no hidden costs. Choose the plan that best fits your security needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {paymentPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-2xl ${
                  plan.popular 
                    ? 'border-2 border-red-600 dark:border-red-500' 
                    : 'border border-gray-200 dark:border-gray-800'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <plan.icon className="h-8 w-8 text-red-600 dark:text-red-500" />
                    {plan.popular && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-500">
                        <CheckCircleIcon className="h-5 w-5" />
                        <span className="text-sm font-medium">Recommended</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                        <CheckCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button 
                    className={`w-full py-4 px-8 rounded-xl font-semibold ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    } transition-colors duration-200`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">Secure Payment Methods</p>
            <div className="flex justify-center items-center gap-6">
              <img src="/visa.svg" alt="Visa" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/mastercard.svg" alt="Mastercard" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="/american-express.svg" alt="American Express" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section 
          className="py-24 bg-gray-50 dark:bg-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Why Choose <span className="text-red-600 dark:text-red-500">Complete Security</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Everything you need for <span className="text-red-600 dark:text-red-500">complete security</span> excellence with cutting-edge technology and unmatched expertise
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                  <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10`}>
                        <feature.icon className="h-6 w-6 text-red-600 dark:text-red-500" />
                      </div>
                      <span className="text-2xl font-bold text-red-600 dark:text-red-500">
                        {feature.stats}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    <div className="mt-6 flex items-center text-red-600 dark:text-red-500">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">1500+</div>
                <div className="text-gray-600 dark:text-gray-400">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Response Units</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-500 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

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
