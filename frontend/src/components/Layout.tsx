import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
];

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg transition-colors duration-200">
      <header className="relative z-50">
        <nav className="bg-white dark:bg-gray-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Animated Text Logo */}
                <Link to="/" className="flex-shrink-0 group relative">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    className="flex flex-col relative"
                  >
                    <div className="relative">
                      <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-red-600 via-red-500 to-red-600 
                                     dark:from-red-500 dark:via-red-400 dark:to-red-500 text-transparent bg-clip-text 
                                     bg-size-200 animate-gradient">
                        INFRARED
                      </span>
                      <motion.div
                        className="absolute -inset-1 bg-red-500/20 rounded-lg blur-md"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold tracking-widest text-gray-600 dark:text-gray-400 pl-1">
                      SECURITY
                    </span>
                  </motion.div>
                  
                  {/* Hover Effect Line */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 
                             dark:from-red-500 dark:to-red-400 transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                      ${
                        isActive
                          ? 'text-red-600 dark:text-red-500'
                          : 'text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-500'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md
                           ${isOpen 
                             ? 'bg-white dark:bg-gray-800' 
                             : 'bg-white dark:bg-gray-800'}`}
                  aria-expanded={isOpen}
                  aria-label="Toggle menu"
                >
                  <div className="relative w-6 h-5 flex items-center justify-center">
                    {isOpen ? (
                      <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-500" />
                    ) : (
                      <>
                        <span className="absolute h-0.5 w-6 bg-red-600 dark:text-red-500 transform -translate-y-2" />
                        <span className="absolute h-0.5 w-6 bg-red-600 dark:text-red-500" />
                        <span className="absolute h-0.5 w-6 bg-red-600 dark:text-red-500 transform translate-y-2" />
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 overflow-hidden bg-white dark:bg-gray-900 
                     shadow-2xl border-t border-gray-200 dark:border-gray-800"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { height: "auto", opacity: 1 },
              closed: { height: 0, opacity: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200
                      ${
                        isActive
                          ? 'bg-red-600/10 text-red-600 dark:bg-red-500/10 dark:text-red-500'
                          : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </nav>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
