import { motion } from 'framer-motion';
import { ArrowRight, MousePointer } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-right"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">العمل أصبح</span>
              <span className="block mt-2 text-primary-600">رقمياً</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-md mx-auto md:mx-0 text-lg text-gray-600 md:text-xl"
            >
              نساعد الشركات على النجاح في العصر الرقمي من خلال حلول تقنية متطورة وإبداعية.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center md:justify-start space-x-4 rtl:space-x-reverse"
            >
              <Button href="/contact" size="lg">
                ابدأ مشروعك
                <ArrowRight className="ms-2 h-5 w-5" />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                استكشف خدماتنا
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 hidden md:flex justify-start items-center text-gray-500"
            >
              <MousePointer className="h-4 w-4 mr-2 animate-pulse" />
              <span className="text-sm">مرر لأسفل لاستكشاف المزيد</span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Rexose Agency Team Working"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-lg bg-white p-4 shadow-md">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    <img
                      className="h-10 w-10 rounded-full border-2 border-white"
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Team member"
                    />
                    <img
                      className="h-10 w-10 rounded-full border-2 border-white"
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Team member"
                    />
                    <img
                      className="h-10 w-10 rounded-full border-2 border-white"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Team member"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">+35</p>
                    <p className="text-xs text-gray-500">عميل سعيد</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}