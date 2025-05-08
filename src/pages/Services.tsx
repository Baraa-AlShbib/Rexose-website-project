import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, LineChart, Palette } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { Service, Package } from '../types';

// Sample service data
const services: Service[] = [
  {
    id: 'web-development',
    title: 'تطوير الويب والتطبيقات',
    description: 'نقدم خدمات تطوير ويب وتطبيقات مخصصة تلبي احتياجات عملك. نستخدم أحدث التقنيات والأطر لبناء حلول رقمية متطورة وفعالة.',
    icon: 'code',
    packages: [
      {
        id: 'web-basic',
        name: 'الباقة الأساسية',
        price: '5,000 درهم',
        features: [
          'موقع ويب مكون من 5 صفحات',
          'تصميم متجاوب مع الأجهزة المحمولة',
          'تكامل نموذج اتصال',
          'تحسين محركات البحث الأساسي',
          'دعم لمدة شهر',
        ],
      },
      {
        id: 'web-pro',
        name: 'الباقة الاحترافية',
        price: '12,000 درهم',
        features: [
          'موقع ويب مخصص بالكامل',
          'لوحة تحكم سهلة الاستخدام',
          'تكامل وسائل التواصل الاجتماعي',
          'تحسين محركات البحث المتقدم',
          'دعم لمدة 3 أشهر',
        ],
      },
      {
        id: 'app-development',
        name: 'تطوير التطبيقات',
        price: '20,000 درهم',
        features: [
          'تطبيق جوال لنظامي iOS و Android',
          'واجهة مستخدم سلسة وبديهية',
          'تكامل مع API الخارجية',
          'تحليلات المستخدم',
          'دعم لمدة 6 أشهر',
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'التسويق الرقمي و SEO',
    description: 'نساعدك على الوصول إلى جمهورك المستهدف من خلال استراتيجيات التسويق الرقمي المتكاملة وخدمات تحسين محركات البحث.',
    icon: 'chart',
    packages: [
      {
        id: 'seo-basic',
        name: 'تحسين محركات البحث الأساسي',
        price: '3,000 درهم / شهر',
        features: [
          'تحليل الكلمات المفتاحية',
          'تحسين العوامل الداخلية',
          'بناء الروابط الأساسي',
          'تحليل المنافسين',
          'تقرير شهري',
        ],
      },
      {
        id: 'seo-pro',
        name: 'تحسين محركات البحث المتقدم',
        price: '6,000 درهم / شهر',
        features: [
          'استراتيجية شاملة لتحسين محركات البحث',
          'تحسين العوامل الداخلية والخارجية',
          'إنشاء محتوى عالي الجودة',
          'بناء روابط متقدم',
          'تقارير أسبوعية',
        ],
      },
      {
        id: 'digital-campaign',
        name: 'حملة تسويقية متكاملة',
        price: '10,000 درهم / شهر',
        features: [
          'إدارة منصات التواصل الاجتماعي',
          'إعلانات مدفوعة (Google, Facebook, Instagram)',
          'تسويق المحتوى',
          'حملات البريد الإلكتروني',
          'تحليل مفصل للنتائج',
        ],
      },
    ],
  },
  {
    id: 'branding',
    title: 'تصميم الهوية التجارية',
    description: 'نصمم هويات بصرية فريدة تعكس قيم علامتك التجارية وتميزها عن المنافسين. نساعدك على بناء علامة تجارية قوية ومميزة.',
    icon: 'palette',
    packages: [
      {
        id: 'branding-basic',
        name: 'الهوية الأساسية',
        price: '4,000 درهم',
        features: [
          'تصميم الشعار',
          'بطاقات العمل',
          'القرطاسية الأساسية',
          'دليل الألوان والخطوط',
          'ملفات بتنسيقات متعددة',
        ],
      },
      {
        id: 'branding-pro',
        name: 'الهوية الكاملة',
        price: '8,000 درهم',
        features: [
          'تصميم الشعار بأشكال متعددة',
          'القرطاسية الكاملة',
          'دليل استخدام العلامة التجارية',
          'تصميم وسائل التواصل الاجتماعي',
          'تصميم بريد إلكتروني',
        ],
      },
      {
        id: 'branding-premium',
        name: 'الهوية الشاملة',
        price: '15,000 درهم',
        features: [
          'كل ما في الباقة الكاملة',
          'تصميم موقع ويب بسيط',
          'استراتيجية العلامة التجارية',
          'نصوص وشعارات العلامة التجارية',
          'تصميم المواد التسويقية المطبوعة',
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>خدماتنا | Rexose Agency</title>
        <meta name="description" content="استكشف خدماتنا المتخصصة في تطوير الويب والتطبيقات، التسويق الرقمي، وتصميم الهوية التجارية." />
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
              خدماتنا
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              نقدم مجموعة شاملة من الحلول الرقمية لمساعدة عملك على النمو والازدهار
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Details */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={index % 2 === 1 ? 'order-2' : 'order-1'}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-6">
                  {service.icon === 'code' && <Code size={32} />}
                  {service.icon === 'chart' && <LineChart size={32} />}
                  {service.icon === 'palette' && <Palette size={32} />}
                </div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 mb-8">{service.description}</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-primary-600"></span>
                    التصميم المخصص لاحتياجات عملك
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-primary-600"></span>
                    فريق من الخبراء المتخصصين
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-primary-600"></span>
                    استخدام أحدث التقنيات والأساليب
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-primary-600"></span>
                    دعم مستمر بعد إطلاق المشروع
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={index % 2 === 1 ? 'order-1' : 'order-2'}
              >
                <img
                  src={
                    service.icon === 'code'
                      ? 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                      : service.icon === 'chart'
                      ? 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                      : 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  }
                  alt={service.title}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </motion.div>
            </div>
            
            {/* Service Packages */}
            <div className="mt-16">
              <SectionHeading
                title="باقاتنا"
                subtitle="اختر الباقة التي تناسب احتياجات عملك"
                center
              />
              
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {service.packages.map((pkg, pkgIndex) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: pkgIndex * 0.1 }}
                    className="rounded-lg bg-white p-8 shadow-soft hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-primary-600 mb-6">
                      {pkg.price}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start">
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
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full rounded-full bg-primary-600 py-3 text-center font-medium text-white transition-colors hover:bg-primary-700">
                      اختر هذه الباقة
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      
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
              هل لديك مشروع في ذهنك؟
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-primary-100"
            >
              دعنا نساعدك على تحويل أفكارك إلى واقع. تواصل معنا اليوم لمناقشة مشروعك.
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