import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import { FAQ } from '../types';

// Sample FAQ data
const faqs: FAQ[] = [
  {
    question: 'ما هي خدمات Rexose Agency؟',
    answer: 'نقدم مجموعة واسعة من الخدمات الرقمية بما في ذلك تطوير الويب والتطبيقات، التسويق الرقمي وتحسين محركات البحث، وتصميم الهوية التجارية. هدفنا هو تقديم حلول متكاملة تساعد عملائنا على النجاح في العصر الرقمي.',
  },
  {
    question: 'كم تستغرق عملية تطوير موقع ويب؟',
    answer: 'تختلف مدة تطوير موقع الويب حسب حجم وتعقيد المشروع. عادة ما تستغرق المواقع البسيطة من 2-4 أسابيع، بينما قد تستغرق المشاريع الأكثر تعقيداً من 8-12 أسبوعاً أو أكثر. نناقش الجدول الزمني المتوقع بشكل مفصل خلال مرحلة التخطيط للمشروع.',
  },
  {
    question: 'هل تقدمون خدمات صيانة وتحديث بعد إطلاق المشروع؟',
    answer: 'نعم، نقدم خدمات صيانة وتحديث مستمرة لجميع مشاريعنا. يمكننا تقديم باقات صيانة شهرية أو سنوية تشمل تحديثات الأمان، الدعم الفني، وإضافة ميزات جديدة حسب احتياجات العميل.',
  },
  {
    question: 'كيف تعملون مع العملاء من خارج الإمارات؟',
    answer: 'نعمل مع عملاء من جميع أنحاء العالم. نستخدم أدوات الاتصال والتعاون عبر الإنترنت للتواصل المستمر وإدارة المشاريع بكفاءة. نعقد اجتماعات افتراضية منتظمة ونقدم تقارير دورية لضمان سير المشروع وفق الخطة المتفق عليها.',
  },
  {
    question: 'ما هي تكلفة تطوير موقع ويب أو تطبيق؟',
    answer: 'تختلف التكلفة حسب متطلبات وحجم المشروع. نقدم عروض أسعار مفصلة بعد فهم احتياجات العميل ونطاق المشروع. هدفنا هو تقديم أفضل قيمة مقابل التكلفة مع الحفاظ على أعلى معايير الجودة.',
  },
  {
    question: 'هل تقدمون خدمات استضافة المواقع؟',
    answer: 'نعم، نقدم خدمات استضافة موثوقة وآمنة لمواقع الويب والتطبيقات التي نطورها. تشمل خدماتنا النسخ الاحتياطي المنتظم، مراقبة الأداء، وتحديثات الأمان لضمان استمرارية عمل موقعك بكفاءة.',
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>اتصل بنا | Rexose Agency</title>
        <meta name="description" content="تواصل مع Rexose Agency لاستفساراتك ومشاريعك. نحن هنا لمساعدتك في تحقيق رؤيتك الرقمية." />
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
              اتصل بنا
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              نحن هنا لمساعدتك. تواصل معنا لأي استفسارات أو لمناقشة مشروعك القادم.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <MapPin size={18} />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold">العنوان</h3>
                    <p className="text-gray-600">
                      دبي، الإمارات العربية المتحدة
                    </p>
                    <p className="mt-1 text-gray-600">
                      مكتب افتراضي - نعمل عن بعد
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Mail size={18} />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold">البريد الإلكتروني</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@rexose.com" className="hover:text-primary-600 transition-colors">
                        info@rexose.com
                      </a>
                    </p>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:support@rexose.com" className="hover:text-primary-600 transition-colors">
                        support@rexose.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Phone size={18} />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold">الهاتف</h3>
                    <p className="text-gray-600">
                      <a href="tel:+97150123456" className="hover:text-primary-600 transition-colors">
                        +971 50 123 4567
                      </a>
                    </p>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+97142123456" className="hover:text-primary-600 transition-colors">
                        +971 4 212 3456
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <MessageCircle size={18} />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-semibold">الدردشة المباشرة</h3>
                    <p className="text-gray-600">
                      متوفرة من الأحد إلى الخميس
                    </p>
                    <p className="mt-1 text-gray-600">
                      9:00 صباحاً - 6:00 مساءً (توقيت الإمارات)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">تابعنا على</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-primary-100 hover:text-primary-600"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="rounded-lg bg-white p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Google Map */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115400.8642012017!2d55.14759227936504!3d25.087750972552576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1694956339244!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rexose Agency Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="الأسئلة الشائعة"
            subtitle="إجابات على الأسئلة الأكثر شيوعاً"
            center
          />
          
          <div className="mt-12 mx-auto max-w-3xl">
            <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-md">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}