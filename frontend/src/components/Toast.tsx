import { motion, AnimatePresence } from 'framer-motion';
import { Fragment, useEffect } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ 
  message, 
  type = 'success', 
  isVisible, 
  onClose, 
  duration = 3000 
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: CheckCircleIcon,
    error: XMarkIcon,
    info: CheckCircleIcon,
  };

  const colors = {
    success: 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300',
    error: 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300',
    info: 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className={`rounded-lg p-4 ${colors[type]} shadow-lg border border-current border-opacity-10`}>
            <div className="flex items-center space-x-3">
              <Icon className="h-5 w-5" />
              <p className="font-medium">{message}</p>
              <button
                onClick={onClose}
                className="ml-4 inline-flex rounded-md bg-white/20 p-1.5 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-current opacity-20 rounded-full"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
