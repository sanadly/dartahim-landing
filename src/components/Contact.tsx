
import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import BookingButton from "./BookingButton";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "تم استلام رسالتك",
        description: "سنتواصل معك في أقرب وقت ممكن.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  // Common style for social media links
  const socialLinkStyle = "bg-transparent text-primary hover:bg-primary/10 p-3 rounded-full transition-colors duration-300 hover:shadow-md";

  return (
    <section id="contact" className="py-16 px-6 relative overflow-hidden" dir="rtl">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتك. يمكنك التواصل معنا من خلال النموذج أدناه أو عبر وسائل التواصل المختلفة.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="feature-card p-8">
            <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  رسالتك
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="button-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="feature-card p-8">
              <h3 className="text-xl font-bold mb-6">معلومات الاتصال</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">رقم الهاتف</h4>
                    <p className="text-text/70 dir-right text-right">0946753753</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">البريد الإلكتروني</h4>
                    <p className="text-text/70">info@darahim.ly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">العنوان</h4>
                    <p className="text-text/70">طرابلس، ليبيا</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="feature-card p-8">
              <h3 className="text-xl font-bold mb-6">تابعنا على وسائل التواصل</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.facebook.com/darahim.ly" className={socialLinkStyle} aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className={socialLinkStyle} aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className={socialLinkStyle} aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/darahimly/" className={socialLinkStyle} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className={socialLinkStyle} aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
              
              {/* Added CTA button under social links */}
              <div className="mt-6">
              <BookingButton className="text-sm md:text-base py-2 md:py-3 justify-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
