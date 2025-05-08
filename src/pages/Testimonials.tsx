import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Star } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';
import { Testimonial } from '../types';

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
  {
    id: '3',
    name: 'محمد علي',
    company: 'ستارت أب تك',
    comment: 'خدمة ممتازة وفريق محترف. ساعدونا في تطوير تطبيق جوال مميز وتقديم حلول مبتكرة لتحديات التطوير. سعداء جداً بالنتائج.',
    rating: 4,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    name: 'نورا أحمد',
    company: 'مجلة الأزياء الرقمية',
    comment: 'تعاملنا مع Rexose لتطوير موقعنا الإلكتروني وكانت التجربة ممتازة. الفريق محترف ومتعاون، والنتيجة تجاوزت توقعاتنا.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    name: 'خالد عبدالله',
    company: 'معهد التدريب التقني',
    comment: 'استعنا بخدمات Rexose لتطوير منصة تعليمية إلكترونية، وقد أبدعوا في تنفيذها. النظام سهل الاستخدام وتلقينا ردود فعل إيجابية من المستخدمين.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

interface TestimonialFormData {
  name: string;
  company: string;
  rating: number;
  comment: string;
}

export default function Testimonials() {
  const [selectedRating, setSelectedRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TestimonialFormData>();
  
  const onSubmit = async (data: TestimonialFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would submit to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      data.rating = selectedRating;
      console.log('Testimonial submitted:', data);
      
      setIsSuccess(true);
      reset();
      setSelectedRating(5);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Helmet>
        <title>آراء العملاء | Rexose Agency</title>
        <meta name="description" content="اقرأ آراء وتجارب عملائنا مع Rexose Agency. شارك تجربتك معنا وأخبرنا كيف كانت تجربتك في العمل معنا." />
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
              آراء العملاء
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              اكتشف ما يقوله عملاؤنا عن تجربتهم في العمل معنا
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Submit Testimonial Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="شارك رأيك"
            subtitle="نحن نقدر آراءكم وملاحظاتكم. شاركنا تجربتك في العمل معنا."
            center
          />
          
          <div className="mx-auto mt-12 max-w-2xl rounded-lg bg-white p-8 shadow-md">
            {isSuccess && (
              <div className="mb-6 rounded-md bg-success-50 p-4 text-success-800">
                تم إرسال تقييمك بنجاح! شكراً لمشاركة رأيك معنا.
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  الاسم
                </label>
                <input
                  id="name"
                  type="text"
                  className={`mt-1 block w-full rounded-md border ${
                    errors.name ? 'border-error-500' : 'border-gray-300'
                  } px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500`}
                  {...register('name', { required: 'الاسم مطلوب' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-error-600">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  الشركة
                </label>
                <input
                  id="company"
                  type="text"
                  className={`mt-1 block w-full rounded-md border ${
                    errors.company ? 'border-error-500' : 'border-gray-300'
                  } px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500`}
                  {...register('company', { required: 'اسم الشركة مطلوب' })}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-error-600">{errors.company.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  التقييم
                </label>
                <div className="mt-2 flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="p-1"
                      onClick={() => setSelectedRating(rating)}
                    >
                      <Star
                        size={24}
                        className={
                          rating <= selectedRating
                            ? 'fill-warning-400 text-warning-400'
                            : 'text-gray-300'
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  التعليق
                </label>
                <textarea
                  id="comment"
                  rows={5}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.comment ? 'border-error-500' : 'border-gray-300'
                  } px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500`}
                  {...register('comment', { required: 'التعليق مطلوب' })}
                ></textarea>
                {errors.comment && (
                  <p className="mt-1 text-sm text-error-600">{errors.comment.message}</p>
                )}
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال التقييم'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}