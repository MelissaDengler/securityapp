import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  ArrowRightIcon,
  CameraIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import SecurityHero from '../assets/security-hero.svg';
import Pattern from '../assets/pattern.svg';
import { ReportIssueModal } from '../components/ReportIssueModal';
import TechnicianModal from '../components/TechnicianModal';

const features = [
  {
    name: '24/7 Monitoring',
    description: 'Round-the-clock security monitoring and rapid response services.',
    icon: ClockIcon,
  },
  {
    name: 'Professional Guards',
    description: 'Highly trained and certified security personnel.',
    icon: UserGroupIcon,
  },
  {
    name: 'Advanced Security',
    description: 'State-of-the-art security systems and protocols.',
    icon: ShieldCheckIcon,
  },
];

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
}

const technicianCallout = {
  standardRate: 'R550',
  afterHoursRate: 'R850',
  weekendRate: 'R950',
  publicHolidayRate: 'R1200',
  standardHours: '08:00 - 17:00 (Mon-Fri)',
  afterHours: '17:00 - 22:00 (Mon-Fri)',
  minimumCalloutTime: '1 hour',
  travelCost: 'R12/km (calculated from nearest branch)',
  response: {
    standard: 'Within 4 hours',
    emergency: 'Within 1 hour',
    afterHours: 'Within 2 hours'
  },
  qualifications: [
    'PSIRA registered technicians',
    'Certified alarm system specialists',
    'Advanced electronic security training',
    'Criminal background checked'
  ]
};

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hello! How can we help you today?", isUser: false }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showTechnicianModal, setShowTechnicianModal] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: messages.length + 2,
        text: "Thank you for your message. One of our security experts will get back to you shortly.",
        isUser: false
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url(${Pattern})`,
          backgroundSize: '40px 40px',
          opacity: 0.4
        }} />
        
        {/* Content Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-2xl mx-auto lg:mx-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative inline-block"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
                  Professional Security Services
                </span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-8">
                Protecting What{' '}
                <span className="relative inline-block text-red-600 dark:text-red-500">
                  Matters Most
                  <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-red-600/30 dark:bg-red-500/30 rounded-full transform -skew-x-12" />
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                Professional security services tailored to protect your assets with cutting-edge
                technology and highly trained personnel.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col gap-4 max-w-md mx-auto"
              >
                <Link
                  to="/contact"
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-4 w-full"
                >
                  Get Started
                  <ArrowRightIcon className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <motion.button
                  onClick={() => setShowReportModal(true)}
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-4 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CameraIcon className="h-5 w-5" />
                  Report an Issue
                </motion.button>

                <motion.button
                  onClick={() => setShowTechnicianModal(true)}
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-4 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <WrenchScrewdriverIcon className="h-5 w-5" />
                  Request Technician
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:block"
            >
              <div className="relative w-full aspect-square max-w-2xl mx-auto">
                {/* Background Circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-red-500/5 to-red-600/5 dark:from-red-500/10 dark:to-red-600/10 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-to-br from-red-500/10 to-red-600/10 dark:from-red-500/20 dark:to-red-600/20" />
                </div>
                
                <motion.img
                  src={SecurityHero}
                  alt="Security Shield"
                  className="relative w-full h-full object-contain"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full py-32 bg-white dark:bg-black overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url(${Pattern})`,
          backgroundSize: '40px 40px',
          opacity: 0.2
        }} />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-8">
              Everything you need for complete security
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We provide comprehensive security solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative h-full rounded-3xl bg-gray-50 dark:bg-gray-900 p-10 hover:bg-white dark:hover:bg-gray-800 
                              transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 dark:from-red-500/10 dark:to-red-600/10 
                                rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/50 
                                  text-red-600 dark:text-red-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.name}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="relative w-full bg-gradient-to-br from-red-600 via-red-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url(${Pattern})`,
          backgroundSize: '40px 40px',
          opacity: 0.1
        }} />
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-2xl">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                Coming Soon
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                New Services Launching Soon
              </h2>
              <p className="text-xl text-red-100">
                Armed Response and Advanced Surveillance systems launching soon!
              </p>
            </div>
            <div>
              <button
                onClick={() => alert('Thank you for your interest! We\'ll notify you when these services launch.')}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-red-600 font-semibold 
                         hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        {!isChatOpen ? (
          <motion.button
            onClick={() => setIsChatOpen(true)}
            className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-full 
                     pl-4 sm:pl-6 pr-4 sm:pr-5 py-3 sm:py-4 shadow-xl hover:shadow-2xl hover:shadow-red-600/25 
                     transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
            <span className="text-sm font-medium sm:hidden">Chat</span>
            <ChatBubbleLeftRightIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-[calc(100vw-2rem)] sm:w-96 
                      max-h-[80vh] sm:max-h-[600px] overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-red-600 dark:bg-red-700 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-base sm:text-lg font-semibold text-white">Chat with Us</h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-2 bg-white rounded-lg transition-all duration-200 hover:bg-white/90 
                         shadow-sm hover:shadow-md"
                aria-label="Close chat"
              >
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-[calc(60vh-8rem)] sm:h-[400px] flex flex-col">
              <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                        message.isUser
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      }`}
                    >
                      <p className="text-sm leading-relaxed break-words">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-800">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                               bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500
                               text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500 
                               focus:border-transparent transition-shadow duration-200"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-red-600 
                             hover:bg-red-700 text-white rounded-xl shadow-lg hover:shadow-xl 
                             transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!newMessage.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">Send message</span>
                    <svg
                      className="h-5 w-5 transform rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <ReportIssueModal 
        isOpen={showReportModal} 
        onClose={() => setShowReportModal(false)} 
      />

      <TechnicianModal 
        isOpen={showTechnicianModal}
        onClose={() => setShowTechnicianModal(false)}
        techInfo={technicianCallout}
      />
    </div>
  );
}
