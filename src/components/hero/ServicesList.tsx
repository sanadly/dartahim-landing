
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ServiceItem } from './servicesData';

interface ServicesListProps {
  services: ServiceItem[];
  activeCard: number;
  setActiveCard: (index: number) => void;
}

const ServicesList = ({ services, activeCard, setActiveCard }: ServicesListProps) => {
  return (
    <div className="w-full mt-2">
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">خدماتنا الرئيسية</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {services.map(service => (
          <Link 
            key={service.id} 
            to={service.link} 
            className={cn("p-3 md:p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all hover:shadow-lg flex flex-col", 
              activeCard === service.id ? "ring-2 ring-primary shadow-md" : ""
            )}
            onMouseEnter={() => setActiveCard(service.id)}
          >
            <div className={`p-1.5 md:p-2 rounded-full bg-gradient-to-r ${service.color} w-fit mb-2 md:mb-3`}>
              {service.icon}
            </div>
            <h4 className="font-bold mb-1 text-sm md:text-base">{service.title}</h4>
            <p className="text-xs md:text-sm text-text/70 mb-2">{service.description}</p>
            <div className="mt-auto flex items-center text-xs text-primary font-medium">
              اكتشف المزيد <ChevronRight className="h-2.5 md:h-3 w-2.5 md:w-3 mr-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
