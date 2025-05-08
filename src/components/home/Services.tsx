import { Code, LineChart, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  const services = [
    {
      title: 'تطوير الويب والتطبيقات',
      description: 'نبني تطبيقات ويب وجوال مخصصة باستخدام أحدث التقنيات لتلبية احتياجات عملك.',
      icon: <Code size={24} />,
      href: '/services#web-development',
    },
    {
      title: 'التسويق الرقمي و SEO',
      description: 'نساعدك على الوصول إلى جمهورك المستهدف من خلال استراتيجيات التسويق الرقمي المتكاملة.',
      icon: <LineChart size={24} />,
      href: '/services#digital-marketing',
    },
    {
      title: 'تصميم الهوية التجارية',
      description: 'نصمم هويات بصرية فريدة تعكس قيم علامتك التجارية وتميزها عن المنافسين.',
      icon: <Palette size={24} />,
      href: '/services#branding',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="خدماتنا"
          subtitle="نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدة عملك على النمو والازدهار"
          center
        />
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-primary-600 px-6 py-3 text-base font-medium text-primary-600 transition-colors hover:bg-primary-50"
          >
            عرض جميع الخدمات
          </Link>
        </motion.div>
      </div>
    </section>
  );
}