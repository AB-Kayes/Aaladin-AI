import { motion } from "framer-motion";

const TextOverlay = ({ className }) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center z-10 ${className || ""}`}
    >
      <div className="max-w-lg lg:max-w-xl px-6">
        {/* Dark background overlay for better readability */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI-Powered Innovation
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We transform complex AI challenges into elegant solutions that
            adapt, learn, and evolve with your business needs.
          </motion.p>

          <motion.div
            className="space-y-3 lg:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm lg:text-base">
                Generative AI Solutions
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm lg:text-base">
                Adaptive Learning Systems
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm lg:text-base">
                Real-time Intelligence
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TextOverlay;
