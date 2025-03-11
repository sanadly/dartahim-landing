
import { CreditCard, Gift, BarChart4 } from 'lucide-react';
import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  link: string;
  detailDescription?: string;
}

export const servicesData: ServiceItem[] = [{
  id: 0,
  title: "بطاقات الولاء",
  description: "حلول بطاقات رقمية تعزز من ولاء عملائك",
  icon: <CreditCard className="h-5 w-5" />,
  color: "from-primary to-accent",
  link: "/loyalty-cards",
  detailDescription: "بطاقات رقمية سهلة الاستخدام مع نظام نقاط مرن لمكافأة عملائك المخلصين."
}, {
  id: 1,
  title: "منصات التسويق",
  description: "حلول رقمية متكاملة لتسويق منتجاتك وخدماتك",
  icon: <BarChart4 className="h-5 w-5" />,
  color: "from-secondary to-primary",
  link: "/marketing-platforms",
  detailDescription: "منصات تحليلية متقدمة لقياس أداء حملاتك التسويقية وتحسين استراتيجيتك."
}, {
  id: 2,
  title: "حلول استرداد النقود",
  description: "برامج استرداد نقدي تزيد من إقبال العملاء",
  icon: <Gift className="h-5 w-5" />,
  color: "from-accent to-secondary",
  link: "/cashback-solutions",
  detailDescription: "حلول استرداد نقدي مبتكرة تشجع العملاء على زيادة قيمة مشترياتهم."
}];
