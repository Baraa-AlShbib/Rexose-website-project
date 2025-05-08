import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryColors = {
    web: 'bg-primary-100 text-primary-600',
    app: 'bg-secondary-100 text-secondary-600',
    marketing: 'bg-accent-100 text-accent-600',
    branding: 'bg-success-100 text-success-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg bg-white shadow-soft transition-all duration-300 hover:shadow-md"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className={cn('rounded-full px-3 py-1 text-xs font-medium', categoryColors[project.category])}>
              {project.category === 'web' && 'تطوير الويب'}
              {project.category === 'app' && 'تطوير التطبيقات'}
              {project.category === 'marketing' && 'التسويق الرقمي'}
              {project.category === 'branding' && 'تصميم الهوية'}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
          <p className="mb-4 text-gray-600 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service, idx) => (
              <span key={idx} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {service}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}