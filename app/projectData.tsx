import { StaticImageData } from 'next/image';
import reactPortfolio from '../assets/Adnan-s-Portfolio.png';
import astroBlog from '../assets/AdnanRp.png';
import alHilalSite from '../assets/alhdsfzco.png'
import wpPortfolioLive from '../assets/wpPortLive.png'
import wpPortfolio from '../assets/wpPort.png'
import wpCorporate from '../assets/wpCorporate.png'
import CRE from '../assets/CRE-BT5.png'
import crmsystem from '../assets/crmsystem.png'
import daysTracker from '../assets/daysTracker.jpg'
import socialMediaSaas from '../assets/SocialMediaSaas.png'

export interface Project {
    title: string;
    description: string;
    tech: string;
    image: StaticImageData;
    codeLink?: string;
    demoLink?: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Archived - Portfolio Website in React",
      description: "A Portdolio Website",
      tech: "React, Framer Motion",
      image: reactPortfolio,
      codeLink: "https://github.com/AdnanRahmanpoor/adnan-portfolio",
      demoLink: "https://adnan-rahmanpoor-react.vercel.app"
    },
    {
      title: "Blog Site in AstroJS",
      description: "A customized blog website from AstroWind Template build on AstroJS",
      tech: "AstroJS, Tailwind CSS",
      image: astroBlog,
      codeLink: "https://github.com/AdnanRahmanpoor/adnanrp",
      demoLink: "https://adnanrp.pages.dev"
    },
    {
      title: "Business Landing Page",
      description: "A landing page for a business in React",
      tech: "React, Framer Motion",
      image: alHilalSite,
      codeLink: "https://github.com/yourusername/project3",
      demoLink: ""
    },
    {
      title: "Social Media SaaS",
      description: "A Landing page made in Webflow for a Social Media SaaS",
      tech: "Webflow",
      image: socialMediaSaas,
      codeLink: '',
      demoLink: 'https://socialmediasaas.webflow.io/'
    },
    {
      title: "WordPress Porfolio Site",
      description: "A Portfolio Site built in WordPress (Free)",
      tech: "WordPress",
      image: wpPortfolioLive,
      codeLink: "",
      demoLink: "https://adnanrp359.wordpress.com"
    },
    {
      title: "WordPress Site",
      description: "A Portfolio Site built in WordPress using Elementor",
      tech: "WordPress, Elementor",
      image: wpPortfolio,
      codeLink: "",
      demoLink: "https://github.com/AdnanRahmanpoor/adnan-rahmanpoor-portfolio-nextjs/blob/main/assets/wpPort.png"
    },
    {
      title: "Corporate Site in WordPress",
      description: "A Corporate Site made in WordPress using Elementor",
      tech: "WordPress, Elementor",
      image: wpCorporate,
      codeLink: '',
      demoLink: 'https://github.com/AdnanRahmanpoor/adnan-rahmanpoor-portfolio-nextjs/blob/main/assets/wpCorporate.png'
    },
    {
        title: "Landing Page in Bootstrap 5",
        description: "A landing page made using BootStrap",
        tech: "HTML, Bootstrap",
        image: CRE,
        codeLink: "https://github.com/AdnanRahmanpoor/crownrealestate-landing-bt5",
        demoLink: ''
      },
      {
        title: "CRM System",
        description: "A Work in progress Customer Relationship Management (CRM) using Python",
        tech: "Python, Django, TailwindCSS",
        image: crmsystem,
        codeLink: "https://github.com/AdnanRahmanpoor/crm_system",
        demoLink: ""
      },
      {
        title: "DaysTracker",
        description: "A mobile app where a user can track days to/from important days",
        tech: "Flutter, Dart",
        image: daysTracker,
        codeLink: 'https://github.com/AdnanRahmanpoor/DaysTracker',
        demoLink: 'https://github.com/AdnanRahmanpoor/DaysTracker/releases/tag/v1.1.0'
      },
  ];