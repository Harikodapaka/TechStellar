import type { ServiceSectionProps } from './ServiceSection';

const services: ServiceSectionProps[] = [
  {
    title: 'Custom Software Development',
    paragraphs: [
      'We create custom software applications that support your digital transformation goals. Our consultants and developers help you deliver engaging, scalable, future-ready digital experiences.',
    ],
    bullets: [
      'Business analysis & documentation',
      'Front-end & back-end development',
      'SPAs & RESTful API development',
      'Wireframing & prototyping',
      'QA testing, support & maintenance',
    ],
    image: '/images/services/product.svg',
    reverseOnDesktop: false,
  },
  {
    title: 'Offshore Development Services',
    paragraphs: [
      'The Techstellar Offshore Development Services model enables you to scale up your team in accordance with your demands and specifications, increasing your agility and positioning you for rapid expansion.',
      'The notion of an offshore development center (ODC) is new in the context of global business principles. With the use of offshore development services, business owners may employ teams from around the globe to do tasks without having to station them in their own nation, cutting expenses.',
    ],
    bullets: [
      'Reduces the cost.',
      'Increased Efficiency and Reliability.',
      'Saves time with faster solutions & multitasking.',
      'Skilled and Diverse Talent Pool.',
      'Access to Established Infrastructure.',
    ],
    image: '/images/services/offshore.svg',
    reverseOnDesktop: true,
  },
  {
    title: 'IT Staff Augmentation',
    paragraphs: [
      'Techstellar provides top-notch IT Staff Augmentation Services that provide vital skill sets for your business or IT goals, helping to close the skills gap between demand and supply while adding skilled developers to your team.',
    ],
    bullets: [
      'Collaborative End-to-end Solutions.',
      'Excellent Execution and Delivery.',
      'Cost-effective Partnership Model.',
    ],
    image: '/images/services/it-staff.svg',
    reverseOnDesktop: false,
  },
  {
    title: 'Cloud-Native & DevOps Services',
    paragraphs: [
      'Transform your software delivery with Techstellar’s DevOps and cloud services. We help you streamline infrastructure, automate workflows, and accelerate releases.',
    ],
    bullets: [
      'Containerization, frameworks & modern languages',
      'Microservices & API development',
      'Agile DevOps pipelines',
      'Infrastructure planning & automation',
      'Cloud hosting, migration & integration',
    ],
    image: '/images/services/cloud.svg',
    reverseOnDesktop: true,
  },
  {
    title: 'AI & Machine Learning',
    paragraphs: [
      'From data annotation to workflow automation, Techstellar helps you build AI/ML solutions that streamline operations and unlock new opportunities.',
    ],
    bullets: [
      'AI/ML model development & deployment',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Processing',
      'Data annotation & labeling',
      'AI-powered chatbots & virtual assistants',
    ],
    image: '/images/services/ai-ml.svg',
    reverseOnDesktop: false,
  },
  {
    title: 'Big Data & Data Science',
    paragraphs: [
      'Techstellar helps you modernize, analyze, and leverage your data to gain a competitive edge. We support the full data lifecycle—from exploration to deployment.',
    ],
    bullets: [
      'Data engineering & pipeline development',
      'Data warehousing & ETL processes',
      'Data analysis & visualization',
      'Predictive modeling & analytics',
      'Business intelligence solutions',
    ],
    image: '/images/services/bigdata.svg',
    reverseOnDesktop: true,
  },
];

export default services;
