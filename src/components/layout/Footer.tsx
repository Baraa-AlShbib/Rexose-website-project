import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 text-xl font-bold">Rexose Agency</h3>
            <p className="mb-4 text-gray-300">
              نحن نساعد الشركات على الازدهار في العصر الرقمي من خلال حلول تقنية متطورة وإبداعية.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://facebook.com" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-primary-600" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-primary-600" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-primary-600" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="rounded-full bg-gray-800 p-2 transition-colors hover:bg-primary-600" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-bold">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 transition-colors hover:text-primary-400">من نحن</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-primary-400">خدماتنا</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 transition-colors hover:text-primary-400">مشاريعنا</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 transition-colors hover:text-primary-400">المدونة</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 transition-colors hover:text-primary-400">اتصل بنا</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-bold">خدماتنا</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-primary-400">تطوير الويب والتطبيقات</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-primary-400">التسويق الرقمي و SEO</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-primary-400">تصميم الهوية التجارية</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-primary-400">استشارات تقنية</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 transition-colors hover:text-primary-400">استضافة المواقع</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-bold">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin size={20} className="text-primary-400" />
                <span className="text-gray-300">دبي، الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={20} className="text-primary-400" />
                <span className="text-gray-300">+971 50 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={20} className="text-primary-400" />
                <span className="text-gray-300">info@rexose.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Rexose Agency. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <Link to="/privacy-policy" className="text-gray-400 transition-colors hover:text-primary-400">سياسة الخصوصية</Link>
              <Link to="/terms-of-service" className="text-gray-400 transition-colors hover:text-primary-400">شروط الخدمة</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}