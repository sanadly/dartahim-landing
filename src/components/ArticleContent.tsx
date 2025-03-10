
import React from 'react';
import { CalendarIcon, ArrowRight, MapPinIcon, ImageIcon } from "lucide-react";
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
  // Function to parse HTML strings in content and add placeholder images for demonstration
  const renderContent = (content: string, index: number) => {
    // Add placeholder images after every 3rd paragraph that isn't HTML
    const shouldAddPlaceholder = index > 0 && index % 3 === 0 && !content.startsWith('<');
    
    return (
      <React.Fragment key={index}>
        {content.startsWith('<') ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <p className="mb-6 text-text/80 leading-relaxed">{content}</p>
        )}
        
        {shouldAddPlaceholder && (
          <div className="my-8 rounded-xl overflow-hidden border border-border">
            <div className="bg-primary/5 p-4 flex items-center justify-center flex-col">
              <ImageIcon className="text-primary/40 h-16 w-16 mb-2" />
              <p className="text-sm text-text/60 italic text-center">صورة توضيحية للمحتوى المذكور أعلاه</p>
            </div>
            <img 
              src={`https://source.unsplash.com/random/800x400?loyalty,marketing,retail,${index}`} 
              alt="صورة توضيحية" 
              className="w-full h-52 object-cover"
            />
          </div>
        )}
      </React.Fragment>
    );
  };

  // Get all article IDs to use for "related articles"
  const allArticleIds = [4, 5, 6, 7, 8];

  // Get article location based on ID
  const getArticleLocation = (articleId: number) => {
    switch(articleId) {
      case 4: return "مصراتة، ليبيا 🇱🇾";
      case 5: return "طرابلس، ليبيا 🇱🇾";
      case 6: return "بنغازي، ليبيا 🇱🇾";
      case 7: return "طرابلس، ليبيا 🇱🇾";
      case 8: return "دوسلدورف، ألمانيا 🇩🇪";
      default: return "ليبيا 🇱🇾";
    }
  };

  // Get article title based on ID
  const getArticleTitle = (articleId: number) => {
    switch(articleId) {
      case 4: return '📱 تطبيق ولاء العملاء: مفتاح النمو المستدام';
      case 5: return '🔄 بناء شبكة ولاء العملاء الخاصة بك';
      case 6: return '💌 عميلك أقرب إليك الآن: الحملات التسويقية المخصصة';
      case 7: return '🧮 دليل دراهم الشامل لتقدير تكلفة برنامج الولاء';
      case 8: return '📢 موعدنا في معرض EuroCIS في دوسلدورف! 🚀';
      default: return '';
    }
  };

  // Get article image based on ID
  const getArticleImage = (articleId: number) => {
    if (articleId === 4) {
      return 'd8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png';
    } else if (articleId === 5 || articleId === 7) {
      return '9b14e838-2969-48fd-be92-aa3e678c56d3.png';
    } else {
      return '69b73410-b7da-4aa0-9a35-00ac7c62e874.png';
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/news" className="flex items-center gap-2 text-primary hover:underline mb-4 transition-all hover:gap-3">
          <ArrowRight size={16} />
          <span>العودة إلى الأخبار</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-text/60 mb-6">
          <div className="flex items-center gap-2">
            <CalendarIcon size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon size={16} />
            <span>{getArticleLocation(id)}</span>
          </div>
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
        {content.map((paragraph, index) => renderContent(paragraph, index))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="font-bold text-xl mb-4">✨ مقالات ذات صلة ✨</h3>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {allArticleIds.filter(articleId => articleId !== id).slice(0, 3).map(articleId => (
            <Link to={`/news/${articleId}`} key={articleId} className="flex-shrink-0 w-72">
              <div className="feature-card group hover:shadow-md transition-all duration-300 h-full">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={`/lovable-uploads/${getArticleImage(articleId)}`} 
                    alt="مقال ذو صلة" 
                    className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-text/60 mb-2">
                  <MapPinIcon size={14} />
                  <span>{getArticleLocation(articleId)}</span>
                </div>
                <h4 className="font-bold">
                  {getArticleTitle(articleId)}
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
