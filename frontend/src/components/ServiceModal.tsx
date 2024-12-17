import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    description: string;
    features: string[];
    eta: string;
    icon: any;
    details?: {
      pricing?: string;
      coverage?: string;
      response?: string;
      equipment?: string[];
    };
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-light-card dark:bg-dark-card p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="rounded-lg bg-light-hover dark:bg-dark-hover p-3"
                    >
                      <service.icon className="h-6 w-6 text-primary-600" />
                    </motion.div>
                    <h3 className="heading-3">{service.name}</h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </Dialog.Title>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-4"
                >
                  <p className="text-body">{service.description}</p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="flex items-center text-body"
                          >
                            <svg className="h-4 w-4 text-primary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Service Details
                      </h4>
                      <dl className="space-y-3">
                        {service.details?.pricing && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Pricing</dt>
                            <dd className="text-body">{service.details.pricing}</dd>
                          </motion.div>
                        )}
                        {service.details?.coverage && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Coverage Area</dt>
                            <dd className="text-body">{service.details.coverage}</dd>
                          </motion.div>
                        )}
                        {service.details?.response && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Response Time</dt>
                            <dd className="text-body">{service.details.response}</dd>
                          </motion.div>
                        )}
                      </dl>
                    </div>
                  </div>

                  {/* Equipment Section */}
                  {service.details?.equipment && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-6"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Equipment & Technology
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {service.details.equipment.map((item, index) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="bg-light-hover dark:bg-dark-hover rounded-lg p-3 text-sm text-body text-center"
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Launch Timeline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Expected Launch
                      </p>
                      <p className="text-lg font-semibold text-primary-600">
                        {service.eta}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                      onClick={onClose}
                    >
                      Register Interest
                    </motion.button>
                  </motion.div>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
