import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  delay?: number;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  delay = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'group rounded-2xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-md',
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="mb-5 text-gray-600">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center text-primary-600 transition-all group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
      >
        المزيد من التفاصيل
        <ArrowRight className="ms-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
}