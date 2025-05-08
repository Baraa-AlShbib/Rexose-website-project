import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Project } from '../../types';

// Sample project data
const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'تطبيق Foodie للطلب الطعام',
    description: 'تطبيق جوال حديث لطلب الطعام عبر الإنترنت مع واجهة مستخدم سلسة ودفع آمن.',
    category: 'app',
    images: [
      'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    outcomes: [
      'زيادة المبيعات بنسبة 150%',
      'تحسين تجربة المستخدم',
      'تخفيض وقت التسليم بنسبة 30%',
    ],
    services: ['تطوير تطبيقات', 'تصميم واجهة المستخدم', 'استراتيجية العلامة التجارية'],
  },
  {
    id: '2',
    title: 'حملة تسويقية لشركة TechGrow',
    description: 'حملة تسويقية متكاملة لشركة ناشئة في مجال التكنولوجيا أدت إلى زيادة المبيعات بنسبة 200%.',
    category: 'marketing',
    images: [
      'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    outcomes: [
      'زيادة عدد المتابعين بنسبة 400%',
      'تحسين معدل التحويل بنسبة 25%',
      'زيادة الوعي بالعلامة التجارية',
    ],
    services: ['تسويق رقمي', 'إدارة منصات التواصل الاجتماعي', 'تحسين محركات البحث'],
  },
  {
    id: '3',
    title: 'موقع LuxHome العقاري',
    description: 'موقع ويب متطور لشركة عقارية فاخرة مع ميزات بحث متقدمة وتجربة مستخدم استثنائية.',
    category: 'web',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    outcomes: [
      'زيادة عدد الزيارات بنسبة 180%',
      'تحسين معدل التحويل إلى 15%',
      'تقليل معدل الارتداد إلى 20%',
    ],
    services: ['تطوير الويب', 'تصميم واجهة المستخدم', 'SEO'],
  },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="مشاريعنا المميزة"
          subtitle="تعرف على بعض مشاريعنا الناجحة التي ساعدت عملائنا على تحقيق أهدافهم"
          center
        />
        
        <div className="mt-12 relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-primary-100 text-primary-800">
                    {featuredProjects[activeIndex].category === 'web' && 'تطوير الويب'}
                    {featuredProjects[activeIndex].category === 'app' && 'تطوير التطبيقات'}
                    {featuredProjects[activeIndex].category === 'marketing' && 'التسويق الرقمي'}
                    {featuredProjects[activeIndex].category === 'branding' && 'تصميم الهوية'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredProjects[activeIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredProjects[activeIndex].description}
                  </p>
                  <div className="mb-8">
                    <h4 className="font-medium mb-3">النتائج:</h4>
                    <ul className="space-y-2">
                      {featuredProjects[activeIndex].outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 rounded-full bg-primary-600 mr-2"></span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button href={`/projects/${featuredProjects[activeIndex].id}`}>
                    عرض تفاصيل المشروع
                  </Button>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={featuredProjects[activeIndex].images[0]}
                    alt={featuredProjects[activeIndex].title}
                    className="w-full h-80 md:h-96 object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:bg-primary-50 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:bg-primary-50 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="mt-8 flex items-center justify-center space-x-2 rtl:space-x-reverse">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full border border-primary-600 px-6 py-3 text-base font-medium text-primary-600 transition-colors hover:bg-primary-50"
          >
            عرض جميع المشاريع
          </Link>
        </motion.div>
      </div>
    </section>
  );
}