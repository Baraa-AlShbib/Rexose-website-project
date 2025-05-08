import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would submit to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isSuccess && (
        <div className="rounded-md bg-success-50 p-4 text-success-800">
          تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
        </div>
      )}
      
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          type="email"
          className={`mt-1 block w-full rounded-md border ${
            errors.email ? 'border-error-500' : 'border-gray-300'
          } px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500`}
          {...register('email', {
            required: 'البريد الإلكتروني مطلوب',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'البريد الإلكتروني غير صحيح',
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          الرسالة
        </label>
        <textarea
          id="message"
          rows={5}
          className={`mt-1 block w-full rounded-md border ${
            errors.message ? 'border-error-500' : 'border-gray-300'
          } px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500`}
          {...register('message', { required: 'الرسالة مطلوبة' })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-error-600">{errors.message.message}</p>
        )}
      </div>
      
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
          <Send size={16} className="ms-2" />
        </Button>
      </div>
    </form>
  );
}