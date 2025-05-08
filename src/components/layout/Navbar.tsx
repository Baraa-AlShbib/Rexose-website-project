import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { title: 'الرئيسية', href: '/' },
  { title: 'من نحن', href: '/about' },
  { title: 'خدماتنا', href: '/services' },
  { title: 'مشاريعنا', href: '/projects' },
  { title: 'آراء العملاء', href: '/testimonials' },
  { title: 'المدونة', href: '/blog' },
  { title: 'اتصل بنا', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-bold text-primary-700">
            Rexose
          </span>
          <span className="ml-1 text-sm text-gray-600">Agency</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'font-medium transition-colors hover:text-primary-600',
                    location.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-gray-700'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <Globe size={16} /> العربية <ChevronDown size={16} />
          </button>
          <Link
            to="/contact"
            className="rounded-full bg-primary-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            ابدأ مشروعك
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <nav className="container mx-auto bg-white px-4 py-6 shadow-lg">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        'block font-medium transition-colors',
                        location.pathname === item.href
                          ? 'text-primary-600'
                          : 'text-gray-700'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link
                    to="/contact"
                    className="block rounded-full bg-primary-600 px-5 py-3 text-center font-medium text-white transition-colors hover:bg-primary-700"
                    onClick={() => setIsOpen(false)}
                  >
                    ابدأ مشروعك
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}