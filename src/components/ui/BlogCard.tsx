import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../lib/utils';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg bg-white overflow-hidden shadow-soft transition-all duration-300 hover:shadow-md"
    >
      <Link to={`/blog/${post.slug}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-3 flex items-center text-sm text-gray-500">
          <Calendar size={16} className="mr-1" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="mb-2 text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="mb-4 text-gray-600 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}