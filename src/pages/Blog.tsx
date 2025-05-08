import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/ui/BlogCard';
import { BlogPost } from '../types';

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'أهمية التسويق الرقمي لنمو الأعمال',
    slug: 'importance-of-digital-marketing',
    excerpt: 'اكتشف كيف يمكن للتسويق الرقمي أن يساعد شركتك على النمو وزيادة المبيعات في العصر الرقمي.',
    content: `
في عالم يزداد اتصالاً وتشابكاً عبر الإنترنت، أصبح التسويق الرقمي أحد أهم العوامل التي تساهم في نجاح الأعمال ونموها. يتيح التسويق الرقمي للشركات الوصول إلى جمهور أوسع، وبناء علاقات أقوى مع العملاء، وتحقيق نتائج قابلة للقياس.

### لماذا يعتبر التسويق الرقمي ضرورياً لنمو الأعمال؟

1. **الوصول إلى جمهور أوسع**

   يتيح التسويق الرقمي للشركات الوصول إلى جمهور عالمي بدون قيود جغرافية، مما يفتح أسواقاً جديدة ويزيد من قاعدة العملاء المحتملين.

2. **فعالية التكلفة**

   مقارنة بالتسويق التقليدي، يوفر التسويق الرقمي نتائج أفضل بتكلفة أقل، مما يجعله مثالياً للشركات الصغيرة والمتوسطة ذات الميزانيات المحدودة.

3. **استهداف دقيق**

   تتيح أدوات التسويق الرقمي استهداف شرائح محددة من الجمهور بناءً على العمر، الموقع، الاهتمامات، وسلوك الشراء، مما يزيد من فعالية الحملات التسويقية.

4. **قياس النتائج وتحليلها**

   يمكن قياس نتائج حملات التسويق الرقمي بدقة وتحليلها لمعرفة ما يعمل وما لا يعمل، مما يسمح بتحسين الاستراتيجيات المستقبلية.

### استراتيجيات التسويق الرقمي الأكثر فعالية

- **تحسين محركات البحث (SEO)**

  تحسين موقعك الإلكتروني لرفع ترتيبه في نتائج البحث، مما يزيد من الزيارات العضوية ويقلل من تكلفة جذب العملاء.

- **التسويق عبر وسائل التواصل الاجتماعي**

  بناء حضور قوي على منصات التواصل الاجتماعي للتواصل مع العملاء وبناء الوعي بالعلامة التجارية.

- **التسويق بالمحتوى**

  إنشاء محتوى قيم وذو صلة يجذب الجمهور المستهدف ويعزز مكانة الشركة كخبير في مجالها.

- **الإعلانات المدفوعة**

  استخدام الإعلانات المدفوعة على محركات البحث ووسائل التواصل الاجتماعي للوصول إلى جمهور محدد بسرعة.

### النتيجة

التسويق الرقمي ليس مجرد اتجاه عابر، بل هو تحول جوهري في كيفية تواصل الشركات مع عملائها. الشركات التي تتبنى استراتيجيات التسويق الرقمي وتستثمر فيها هي التي ستنجح وتنمو في المستقبل.

لتحقيق أقصى استفادة من التسويق الرقمي، من المهم وضع استراتيجية واضحة ومتكاملة تتناسب مع أهداف الشركة وميزانيتها. يمكن أن يساعد الخبراء في مجال التسويق الرقمي في تطوير وتنفيذ هذه الاستراتيجية لتحقيق أفضل النتائج.
    `,
    author: 'أحمد محمد',
    date: '2023-06-15',
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['التسويق الرقمي', 'نمو الأعمال', 'الإنترنت'],
  },
  {
    id: '2',
    title: 'كيف تبني هوية بصرية قوية لعلامتك التجارية',
    slug: 'how-to-build-strong-brand-identity',
    excerpt: 'تعرف على أهمية الهوية البصرية وكيفية بناء هوية قوية ومميزة لعلامتك التجارية.',
    content: `
الهوية البصرية هي وجه علامتك التجارية والانطباع الأول الذي يتكون لدى العملاء عنها. هوية بصرية قوية ومتماسكة تساعد في تمييز علامتك التجارية عن المنافسين وبناء ثقة العملاء.

### ما هي الهوية البصرية؟

الهوية البصرية تشمل جميع العناصر المرئية التي تمثل علامتك التجارية، بما في ذلك:

- الشعار
- نظام الألوان
- الخطوط
- الصور والرسومات
- تصميم الموقع الإلكتروني
- مواد التسويق المطبوعة والرقمية

هذه العناصر مجتمعة تشكل الصورة الذهنية للعلامة التجارية في أذهان الجمهور.

### خطوات بناء هوية بصرية قوية

1. **فهم شخصية العلامة التجارية**

   قبل البدء في تصميم العناصر المرئية، من المهم فهم شخصية العلامة التجارية وقيمها. هل هي رسمية أم ودية؟ تقليدية أم عصرية؟ محافظة أم جريئة؟

2. **البحث والتحليل**

   دراسة المنافسين والسوق والجمهور المستهدف. ما هي الهويات البصرية الناجحة في مجالك؟ ما الذي يميز علامتك التجارية؟

3. **تصميم الشعار**

   الشعار هو حجر الأساس في الهوية البصرية. يجب أن يكون بسيطاً وسهل التذكر ويعكس شخصية العلامة التجارية.

4. **اختيار نظام الألوان**

   الألوان تثير مشاعر مختلفة وترسل رسائل معينة. اختر ألواناً تتوافق مع قيم علامتك التجارية وتخاطب الجمهور المستهدف.

5. **تحديد الخطوط**

   اختر خطوطاً واضحة وسهلة القراءة وتعكس شخصية العلامة التجارية. عادة ما يتم اختيار 2-3 خطوط مختلفة للعناوين والنصوص.

6. **تطوير أسلوب التصوير والرسومات**

   حدد أسلوباً موحداً للصور والرسومات المستخدمة في مواد التسويق. هذا يشمل الفلاتر، وزوايا التصوير، والحالة المزاجية العامة.

7. **إنشاء دليل الهوية البصرية**

   وثق جميع عناصر الهوية البصرية في دليل شامل يوضح كيفية استخدامها بشكل صحيح ومتسق.

### أهمية الاتساق في الهوية البصرية

الاتساق هو مفتاح نجاح الهوية البصرية. استخدام العناصر المرئية بشكل متسق عبر جميع نقاط التواصل مع العملاء يساعد في:

- بناء الوعي بالعلامة التجارية
- تعزيز الثقة والمصداقية
- تسهيل التعرف على العلامة التجارية
- بناء صورة احترافية

### أمثلة على هويات بصرية ناجحة

- **Apple**: بساطة التصميم، الألوان المحايدة، والتركيز على المنتج
- **Coca-Cola**: اللون الأحمر المميز، والخط الكلاسيكي، والشعار الذي لم يتغير كثيراً منذ عقود
- **Nike**: شعار "السويش" البسيط والقوي، والشعار "Just Do It"

### الخلاصة

بناء هوية بصرية قوية ليس مجرد مسألة جمالية، بل هو استثمار استراتيجي يساهم في نجاح العلامة التجارية على المدى الطويل. من خلال الفهم العميق لشخصية العلامة التجارية وقيمها، والتخطيط الدقيق لجميع العناصر المرئية، يمكن بناء هوية بصرية تميز العلامة التجارية وتعزز وجودها في السوق.

إذا كنت تفكر في بناء أو إعادة تصميم الهوية البصرية لعلامتك التجارية، فإن الاستعانة بخبراء متخصصين يمكن أن يساعدك في تحقيق أفضل النتائج.
    `,
    author: 'سارة خالد',
    date: '2023-05-22',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['الهوية البصرية', 'تصميم الشعار', 'العلامة التجارية'],
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Get all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );
  
  // Filter blog posts based on search term and selected tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
  
  return (
    <>
      <Helmet>
        <title>المدونة | Rexose Agency</title>
        <meta name="description" content="اقرأ أحدث المقالات حول التسويق الرقمي، تطوير الويب، تصميم الهوية التجارية، والمزيد من المواضيع التقنية والإبداعية." />
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
              المدونة
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              آخر المقالات والأخبار في مجالات التكنولوجيا والتسويق الرقمي والتصميم
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and filter */}
          <div className="mb-12">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="ابحث في المدونة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
                <Search className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag('')}
                  className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                    selectedTag === ''
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  الكل
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog posts grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-gray-50 p-8 text-center">
              <p className="text-gray-600">
                لا توجد نتائج تطابق بحثك. جرب مصطلحات أخرى أو قم بإزالة الفلتر.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}