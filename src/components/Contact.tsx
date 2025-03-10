
import { useState } from 'react';
import { Mail, Phone, Send, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding px-6 relative bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm mb-4 animate-fade-up">
            <span className="text-sm font-medium">اتصل بنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            نحن هنا <span className="text-gradient">لمساعدتك</span>
          </h2>
          <p className="text-text/80 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            تواصل معنا للحصول على المزيد من المعلومات حول خدماتنا وكيف يمكننا مساعدتك في تحقيق أهدافك
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">          
          {/* Contact Form */}
          <div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30">
              <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className=" mb-2 text-sm font-medium">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="أدخل رسالتك هنا..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'جاري الإرسال...' : (
                    <>
                      <Send size={18} />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

                    {/* Contact Info */}
                    <div className="flex flex-col space-y-8 md:pr-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">اتصل بنا</h4>
                <p className="text-text/70 dir-ltr">+218 94-6753753</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">البريد الإلكتروني</h4>
                <p className="text-text/70">info@dartahim.ly</p>
                <p className="text-text/70">support@dartahim.ly</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-bold mb-4">تابعنا على</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Youtube size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
