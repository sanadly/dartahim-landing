
import React from 'react';
import { CalendarIcon, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

interface ArticleContentProps {
  id: number;
  title: string;
  date: string;
  content: string[];
  imageUrl: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ 
  id,
  title, 
  date, 
  content, 
  imageUrl 
}) => {
  // Function to parse HTML strings in content
  const renderContent = (content: string) => {
    if (content.startsWith('<')) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return <p className="mb-6 text-text/80 leading-relaxed">{content}</p>;
  };

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/news" className="flex items-center gap-2 text-primary hover:underline mb-4 transition-all hover:gap-3">
          <ArrowRight size={16} />
          <span>العودة إلى الأخبار</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-text/60 mb-6">
          <CalendarIcon size={16} />
          <span>{date}</span>
        </div>
      </div>
      
      <div className="mb-8 overflow-hidden rounded-xl">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        {content.map((paragraph, index) => (
          <React.Fragment key={index}>
            {renderContent(paragraph)}
          </React.Fragment>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="font-bold text-xl mb-4">مقالات ذات صلة</h3>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {[1, 2, 3, 4, 5].filter(articleId => articleId !== id).slice(0, 3).map(articleId => (
            <Link to={`/news/${articleId}`} key={articleId} className="flex-shrink-0 w-72">
              <div className="feature-card group hover:shadow-md transition-all duration-300 h-full">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={`/lovable-uploads/${
                      articleId === 1 || articleId === 4 ? 'd8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png' : 
                      articleId === 2 || articleId === 5 ? '9b14e838-2969-48fd-be92-aa3e678c56d3.png' : 
                      '69b73410-b7da-4aa0-9a35-00ac7c62e874.png'
                    }`} 
                    alt="مقال ذو صلة" 
                    className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-bold">
                  {articleId === 1 ? 'دراهم تطلق خدمة المدفوعات الرقمية' : 
                   articleId === 2 ? 'شراكة استراتيجية مع مصرف ليبيا المركزي' : 
                   articleId === 3 ? 'دراهم تفوز بجائزة أفضل شركة ناشئة' :
                   articleId === 4 ? 'تطبيق ولاء العملاء: مفتاح النمو المستدام' :
                   'بناء شبكة ولاء العملاء الخاصة بك'}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
