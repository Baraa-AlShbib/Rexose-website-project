import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { Project } from '../types';

// Sample projects data
const projects: Project[] = [
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
  {
    id: '4',
    title: 'هوية بصرية لمقهى Aroma',
    description: 'تصميم هوية بصرية كاملة لسلسلة مقاهي محلية، شاملة الشعار والقرطاسية وعناصر العلامة التجارية.',
    category: 'branding',
    images: [
      'https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    outcomes: [
      'زيادة تعرف العملاء على العلامة التجارية',
      'تحسين الصورة العامة للمقهى',
      'زيادة نسبة العملاء المتكررين',
    ],
    services: ['تصميم الهوية', 'تصميم الشعار', 'استراتيجية العلامة التجارية'],
  },
  {
    id: '5',
    title: 'مدونة إلكترونية لمجلة Fashion Trends',
    description: 'تطوير مدونة احترافية لمجلة أزياء مع نظام إدارة محتوى سهل الاستخدام وتصميم عصري.',
    category: 'web',
    images: [
      'https://images.pexels.com/photos/5717777/pexels-photo-5717777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    outcomes: [
      'زيادة الاشتراكات بنسبة 70%',
      'تحسين معدل التفاعل مع المحتوى',
      'تسهيل عملية نشر المقالات الجديدة',
    ],
    services: ['تطوير الويب', 'تصميم واجهة المستخدم', 'إدارة المحتوى'],
  },
  {
    id: '6',
    title: 'تطبيق HealthTrack للياقة',
    description: 'تطبيق متكامل لمتابعة الصحة واللياقة البدنية مع ميزات متابعة التمارين والنظام الغذائي وتقارير تقدم مفصلة.',
    category: 'app',
    images: [
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    outcomes: [
      'تحقيق 10,000 تنزيل في الشهر الأول',
      'معدل احتفاظ بالمستخدمين بنسبة 65%',
      'تقييمات إيجابية من المستخدمين',
    ],
    services: ['تطوير تطبيقات', 'تصميم واجهة المستخدم', 'اختبار المستخدم'],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);
  
  return (
    <>
      <Helmet>
        <title>مشاريعنا | Rexose Agency</title>
        <meta name="description" content="استعرض محفظة أعمالنا من المشاريع الناجحة في مجالات تطوير الويب والتطبيقات والتسويق الرقمي وتصميم الهوية." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              مشاريعنا
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              اكتشف مجموعة متنوعة من المشاريع الناجحة التي أنجزناها لعملائنا
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              الكل
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                filter === 'web'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              تطوير الويب
            </button>
            <button
              onClick={() => setFilter('app')}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                filter === 'app'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              تطوير التطبيقات
            </button>
            <button
              onClick={() => setFilter('marketing')}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                filter === 'marketing'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              التسويق الرقمي
            </button>
            <button
              onClick={() => setFilter('branding')}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                filter === 'branding'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              تصميم الهوية
            </button>
          </div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))
              ) : (
                <div className="col-span-full mt-12 text-center">
                  <p className="text-gray-600">لا توجد مشاريع متوفرة في هذه الفئة حالياً.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              هل أنت جاهز لبدء مشروعك التالي؟
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-primary-100"
            >
              دعنا نساعدك على تحويل فكرتك إلى مشروع ناجح.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-primary-600 shadow-sm hover:bg-gray-100"
              >
                تواصل معنا
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}