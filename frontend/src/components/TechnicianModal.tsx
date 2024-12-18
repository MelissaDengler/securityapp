import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

interface TechnicianModalProps {
  isOpen: boolean;
  onClose: () => void;
  techInfo: {
    standardRate: string;
    afterHoursRate: string;
    weekendRate: string;
    publicHolidayRate: string;
    standardHours: string;
    afterHours: string;
    minimumCalloutTime: string;
    travelCost: string;
    response: {
      standard: string;
      emergency: string;
      afterHours: string;
    };
    qualifications: string[];
  };
}

export default function TechnicianModal({ isOpen, onClose, techInfo }: TechnicianModalProps) {
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
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <WrenchScrewdriverIcon className="h-6 w-6 text-red-600" />
                    Technician Callout Information
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Rates Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Callout Rates</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Standard Rate ({techInfo.standardHours})</p>
                        <p className="text-xl font-bold text-red-600">{techInfo.standardRate}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">After Hours ({techInfo.afterHours})</p>
                        <p className="text-xl font-bold text-red-600">{techInfo.afterHoursRate}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Weekend Rate</p>
                        <p className="text-xl font-bold text-red-600">{techInfo.weekendRate}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Public Holiday Rate</p>
                        <p className="text-xl font-bold text-red-600">{techInfo.publicHolidayRate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Response Times</h3>
                      <ul className="space-y-2">
                        {Object.entries(techInfo.response).map(([key, value]) => (
                          <li key={key} className="flex items-center text-gray-600 dark:text-gray-400">
                            <span className="w-24 font-medium capitalize">{key}:</span>
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Charges</h3>
                      <ul className="space-y-2">
                        <li className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Minimum Callout:</span> {techInfo.minimumCalloutTime}
                        </li>
                        <li className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Travel Cost:</span> {techInfo.travelCost}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Technician Qualifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Technicians</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {techInfo.qualifications.map((qual, index) => (
                          <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                            <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => {
                      // TODO: Implement booking logic
                      console.log('Booking technician...');
                      onClose();
                    }}
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book a Technician
                  </motion.button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 