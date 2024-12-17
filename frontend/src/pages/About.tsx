import { motion } from 'framer-motion';
import { ShieldCheckIcon, UserGroupIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const values = [
  {
    title: 'Integrity',
    description: 'We operate with unwavering honesty and ethical standards in all our dealings.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in security services and customer satisfaction.',
    icon: ChartBarIcon,
  },
  {
    title: 'Innovation',
    description: 'We continuously adopt and develop cutting-edge security technologies.',
    icon: SparklesIcon,
  },
  {
    title: 'Teamwork',
    description: 'We work together seamlessly to provide comprehensive security solutions.',
    icon: UserGroupIcon,
  },
];

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Secured Locations', value: '500+' },
  { label: 'Trained Personnel', value: '200+' },
  { label: 'Client Satisfaction', value: '99%' },
];

export default function About() {
  return (
    <div className="w-full bg-white dark:bg-black min-h-screen">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
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
            Protecting What <span className="text-red-600 dark:text-red-500">Matters Most</span>
          </motion.h1>
          <motion.p 
            className="text-content text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            With over a decade of experience in the security industry, we've built a reputation
            for excellence in protecting businesses, events, and individuals through innovative
            solutions and unwavering dedication.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <motion.dt 
                className="text-4xl font-bold text-red-600 dark:text-red-500"
                whileHover={{ scale: 1.05 }}
              >
                {stat.value}
              </motion.dt>
              <dd className="mt-2 text-content">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="heading-2 mb-6">Our Mission</h2>
          <p className="text-content text-lg">
            To provide unparalleled security services that ensure the safety and peace of mind
            of our clients through professional excellence, cutting-edge technology, and
            unwavering dedication to protection.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="mt-24">
          <motion.h2 
            className="heading-2 text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
                  <div className="relative bg-white dark:bg-black rounded-lg p-4">
                    <value.icon className="h-8 w-8 text-red-600 dark:text-red-500" />
                  </div>
                </div>
                <h3 className="mt-6 heading-3">{value.title}</h3>
                <p className="mt-4 text-content">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="heading-2 mb-6">Ready to Work Together?</h2>
          <p className="text-content mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help protect what matters most to you.
          </p>
          <motion.button 
            className="btn-primary px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
