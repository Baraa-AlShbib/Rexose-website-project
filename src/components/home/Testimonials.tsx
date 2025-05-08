import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import { Testimonial } from '../../types';

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'أحمد محمد',
    company: 'شركة التقنية المتطورة',
    comment: 'كان العمل مع Rexose Agency تجربة رائعة! فريقهم محترف جداً ومبدع، وقدموا لنا حلولاً مبتكرة لمشاكلنا. أنصح بشدة بالتعامل معهم.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'سارة خالد',
    company: 'مؤسسة الإبداع',
    comment: 'ساعدتنا Rexose في إعادة تصميم موقعنا وتحسين استراتيجيتنا التسويقية، مما أدى إلى زيادة كبيرة في المبيعات. نتائج مذهلة!',
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="آراء عملائنا"
          subtitle="اكتشف ما يقوله عملاؤنا عن تجربتهم في العمل معنا"
          center
        />
        
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/testimonials"
            className="inline-flex items-center rounded-full border border-primary-600 px-6 py-3 text-base font-medium text-primary-600 transition-colors hover:bg-primary-50"
          >
            عرض جميع التقييمات
          </Link>
        </motion.div>
      </div>
    </section>
  );
}