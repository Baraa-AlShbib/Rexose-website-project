import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { formatDate } from '../lib/utils';
import { BlogPost as BlogPostType } from '../types';

// Sample blog posts data
const blogPosts: BlogPostType[] = [
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

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">المقال غير موجود</h2>
          <p className="mb-6 text-gray-600">
            عذراً، لم نتمكن من العثور على المقال المطلوب.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
          >
            العودة إلى المدونة
          </Link>
        </div>
      </div>
    );
  }
  
  // Function to convert markdown-like content to HTML
  const renderContent = (content: string) => {
    // This is a simple converter, in a real app you would use a proper markdown library
    const html = content
      .replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-8 mb-4">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n- (.*)/g, '<li class="mb-2">$1</li>')
      .replace(/<li class="mb-2">/g, '</p><ul class="list-disc pl-6 mb-4"><li class="mb-2">')
      .replace(/<\/li>\n[^<]/g, '</li></ul><p class="mb-4">')
      .replace(/\n1\. (.*)/g, '<li class="mb-2">$1</li>')
      .replace(/<li class="mb-2">/g, '</p><ol class="list-decimal pl-6 mb-4"><li class="mb-2">')
      .replace(/<\/li>\n[^<]/g, '</li></ol><p class="mb-4">');
    
    return `<p class="mb-4">${html}</p>`;
  };
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Rexose Agency</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="ml-2 h-4 w-4" />
              العودة إلى المدونة
            </Link>
          </div>
          
          <article className="mx-auto max-w-4xl">
            {/* Blog Header */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
              >
                {post.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 flex items-center text-gray-600"
              >
                <span className="mr-4">{post.author}</span>
                <span className="mx-2">•</span>
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                
                <div className="mr-auto">
                  <button className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors">
                    <Share2 className="ml-2 h-4 w-4" />
                    مشاركة
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-96 w-full object-cover"
              />
            </motion.div>
            
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 flex flex-wrap gap-2"
            >
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
            
            {/* Blog Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-lg max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />
            
            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 rounded-lg bg-gray-50 p-6"
            >
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="mr-4">
                  <h3 className="text-xl font-semibold">{post.author}</h3>
                  <p className="text-gray-600">كاتب ومختص في التسويق الرقمي</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                كاتب ومختص في مجال التسويق الرقمي وتطوير الأعمال، يهتم بمشاركة الخبرات والمعرفة لمساعدة الشركات على النمو في العصر الرقمي.
              </p>
            </motion.div>
          </article>
        </div>
      </div>
    </>
  );
}