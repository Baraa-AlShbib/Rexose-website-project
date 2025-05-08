import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, Share2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import Button from '../components/ui/Button';

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'تطبيق Foodie للطلب الطعام',
    description: 'تطبيق جوال حديث لطلب الطعام عبر الإنترنت مع واجهة مستخدم سلسة ودفع آمن.',
    category: 'app',
    images: [
      'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6205804/pexels-photo-6205804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    outcomes: [
      'زيادة عدد الزيارات بنسبة 180%',
      'تحسين معدل التحويل إلى 15%',
      'تقليل معدل الارتداد إلى 20%',
    ],
    services: ['تطوير الويب', 'تصميم واجهة المستخدم', 'SEO'],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">المشروع غير موجود</h2>
          <p className="mb-6 text-gray-600">
            عذراً، لم نتمكن من العثور على المشروع المطلوب.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
          >
            العودة إلى المشاريع
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{project.title} | Rexose Agency</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeftIcon className="ml-2 h-4 w-4" />
              العودة إلى المشاريع
            </Link>
          </div>
          
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
              >
                {project.title}
              </motion.h1>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <Share2 className="ml-2 h-4 w-4" />
                مشاركة
              </motion.button>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                {project.category === 'web' && 'تطوير الويب'}
                {project.category === 'app' && 'تطوير التطبيقات'}
                {project.category === 'marketing' && 'التسويق الرقمي'}
                {project.category === 'branding' && 'تصميم الهوية'}
              </span>
              {project.services.map((service, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                >
                  {service}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.images.map((image, idx) => (
                <div
                  key={idx}
                  className="h-60 overflow-hidden rounded-lg md:h-80"
                >
                  <img
                    src={image}
                    alt={`${project.title} - صورة ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Project Details */}
          <div className="grid gap-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2"
            >
              <h2 className="mb-6 text-2xl font-bold">نظرة عامة</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {project.description}
                </p>
                <p>
                  {project.category === 'web' && 
                    'قمنا بتطوير موقع ويب عصري وسهل الاستخدام يلبي جميع احتياجات العميل. يتميز الموقع بتصميم جذاب وسرعة تحميل عالية وتجربة مستخدم سلسة.'
                  }
                  {project.category === 'app' && 
                    'قمنا بتصميم وتطوير تطبيق جوال متكامل يعمل على أنظمة iOS و Android. يتميز التطبيق بواجهة مستخدم بديهية وأداء عالي وميزات متقدمة تلبي احتياجات المستخدمين.'
                  }
                  {project.category === 'marketing' && 
                    'قمنا بتنفيذ حملة تسويقية متكاملة شملت وسائل التواصل الاجتماعي وإعلانات البحث المدفوعة وتحسين محركات البحث. حققت الحملة نتائج استثنائية وزيادة كبيرة في المبيعات.'
                  }
                  {project.category === 'branding' && 
                    'قمنا بتصميم هوية بصرية متكاملة تعكس قيم وشخصية العلامة التجارية. شملت الهوية تصميم الشعار والألوان والخطوط وجميع عناصر العلامة التجارية الأخرى.'
                  }
                </p>
                <p>
                  يمثل هذا المشروع مثالاً على قدرتنا على تقديم حلول رقمية عالية الجودة تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم.
                </p>
              </div>
              
              <h2 className="mb-6 mt-12 text-2xl font-bold">التحديات والحلول</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">التحدي:</h3>
                  <p className="text-gray-600">
                    {project.category === 'web' && 
                      'كان التحدي الرئيسي هو إنشاء موقع سريع وسهل الاستخدام مع الحفاظ على تصميم جذاب وميزات متقدمة.'
                    }
                    {project.category === 'app' && 
                      'كان التحدي الرئيسي هو تطوير تطبيق يعمل بسلاسة على مختلف الأجهزة مع واجهة مستخدم بديهية وأداء عالي.'
                    }
                    {project.category === 'marketing' && 
                      'كان التحدي الرئيسي هو الوصول إلى الجمهور المستهدف وزيادة الوعي بالعلامة التجارية في سوق تنافسي.'
                    }
                    {project.category === 'branding' && 
                      'كان التحدي الرئيسي هو ابتكار هوية بصرية فريدة تعكس قيم العلامة التجارية وتميزها عن المنافسين.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">الحل:</h3>
                  <p className="text-gray-600">
                    {project.category === 'web' && 
                      'استخدمنا أحدث التقنيات وأفضل الممارسات لتطوير موقع سريع وسهل الاستخدام. اعتمدنا نهج تصميم متجاوب للتأكد من أن الموقع يعمل بشكل مثالي على جميع الأجهزة.'
                    }
                    {project.category === 'app' && 
                      'اعتمدنا نهج تطوير قائم على المستخدم، بدءاً من النماذج الأولية واختبارات المستخدمين. استخدمنا أحدث التقنيات لضمان أداء عالي وتجربة مستخدم سلسة.'
                    }
                    {project.category === 'marketing' && 
                      'طورنا استراتيجية تسويقية متكاملة تستهدف الجمهور المناسب من خلال القنوات المناسبة. استخدمنا تحليلات البيانات لتحسين الحملة باستمرار.'
                    }
                    {project.category === 'branding' && 
                      'أجرينا بحثاً شاملاً عن السوق والمنافسين، وطورنا هوية بصرية فريدة تعكس شخصية العلامة التجارية وتتواصل بفعالية مع الجمهور المستهدف.'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="mb-6 text-2xl font-bold">النتائج</h2>
              <ul className="space-y-4">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{outcome}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 space-y-6 rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold">معلومات المشروع</h3>
                <div>
                  <div className="flex justify-between border-b border-gray-200 py-3">
                    <span className="font-medium">الفئة:</span>
                    <span>
                      {project.category === 'web' && 'تطوير الويب'}
                      {project.category === 'app' && 'تطوير التطبيقات'}
                      {project.category === 'marketing' && 'التسويق الرقمي'}
                      {project.category === 'branding' && 'تصميم الهوية'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 py-3">
                    <span className="font-medium">العميل:</span>
                    <span>
                      {project.id === '1' && 'شركة Foodie'}
                      {project.id === '2' && 'شركة TechGrow'}
                      {project.id === '3' && 'LuxHome العقارية'}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 py-3">
                    <span className="font-medium">تاريخ الإنجاز:</span>
                    <span>
                      {project.id === '1' && 'يناير 2023'}
                      {project.id === '2' && 'مارس 2023'}
                      {project.id === '3' && 'يونيو 2023'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button href="/contact" className="w-full">
                  أطلق مشروعاً مشابهاً
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}