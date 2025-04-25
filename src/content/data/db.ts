import type  { SocialProps, CardIndexProps, ItemProps, Skills, WorkExperienceItem } from '../../interfaces/Interface';


/** USED ON INDEX  */

export const socials: SocialProps[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/erick-herrera-a72a7a61/',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/HerreraCruz',
      icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
    }
];

export const cards: CardIndexProps[] = [
    {
      title: 'Sobre Mí',
      title_en: 'About Me',
      description: `Desarrollador de software con 2 años de experiencia en la integración de tecnologías para optimizar procesos organizacionales. Especializado en la implementación de soluciones que mejoran la gestión y acceso a los datos, facilitando la eficiencia operativa y la toma de decisiones. `,
      description_en: `Software developer with 2 years of experience in integrating technologies to optimize organizational processes. Specialized in implementing solutions that enhance data management and accessibility, facilitating operational efficiency and decision-making.`
    },
    {
      title: 'Trayectoria Profesional',
      title_en: 'Professional Journey',
      description: `Desarrollador de aplicaciones de escritorio, web estáticas y dinámicas, alcanzando el objetivo de mejorar los procesos de las organizaciones y realzar los productos o servicios que se ofrecen, con la presentación de métricas que permitan la toma de decisiones.`,
      description_en: `Developer of desktop, static, and dynamic web applications, aiming to improve organizational processes and enhance the products or services offered by presenting metrics that support decision-making.`
    },
    {
      title: 'Amante de Conocimiento',
      title_en: 'Knowledge Lover',
      description: `Siempre abierto a aprender nuevos conocimientos, ya sea expandiendo áreas ya conocidas o abriendo nuevos campos de aprendizaje, ya sea en ciencias sociales o naturales, entendiendo que el conocimiento es poder y siempre es útil saber “poco” de muchas áreas. `,
      description_en: `Always open to learning new knowledge, whether by expanding familiar areas or exploring new fields of study, be it in social or natural sciences. Understanding that knowledge is power, and it is always useful to know “a little” about many areas.`
    }
]

export const skills: Skills = {
    Frontend: [
        { name: "JavaScript", level: 50 },
        { name: "TailwindCSS", level: 50 },
        { name: "React", level: 50 },
        { name: "TypeScript", level: 50 },
        { name: "Next.js", level: 50 },
    ],
    Backend: [
        { name: "Python", level: 50 },
        { name: "Java", level: 50 },
        { name: "TypeScript", level: 50 },
        { name: "PHP", level: 50 },
    ],
    Databases: [
      { name: "MSSQL", level: 50 },
      { name: "MySQL", level: 50 },
      { name: "MongoDB", level: 50 },
      { name: "Supabase", level: 50 },
    ],
}



/** NAVBAR */

export const navItems: ItemProps[] = [
    { titleEs: 'Sobre Mí', titleEn: 'About Me', href: '/' },
    {
      titleEs: 'Proyectos', 
      titleEn: 'Projects',
      href: '/projects',
      subitems: [
        { titleEs: 'Reportes Pokemon v2', titleEn: 'Pokemon Reports', href: '/projects/pokemon-reports' },
        { titleEs: 'Plataforma de E-Commerce', titleEn: 'E-Commerce Platform', href: '/projects/commerce-platform' },
        { titleEs: 'Crowd Funding', titleEn: 'Crowd Funding', href: '/projects/crowd-funding' },
        { titleEs: 'Plataforma de Delivery', titleEn: 'Delivery Platform', href: '/projects/delivery-platform' },
        { titleEs: 'Plataforma de Taxis VIP', titleEn: 'VIP Taxi Platform', href: '/projects/taxi-platform' },
        
      ]
    },
    { titleEs: 'Experiencia Laboral', titleEn: 'Work Experience', href: '/workexperience' },
];

/** WORK EXPERIENCE */

export const experiences: WorkExperienceItem[] = [
  {
    title: "Desarrollador de Aplicaciones Web",
    titleEN: "Web Applications Developer",
    company: "",
    period: "2023 - Presente",
    description: [
      "Gestionar equipo de desarrollo mediante metodologías ágiles.",
      "Gestionar versiones de desarrollo mediante repositorios GitHub",
      "Desarrollo de nuevas feature a aplicaciones existentes",
      "Diseñar esquema de bases de datos",
      "Implementar soluciones a necesidades operacionales",
    ],
    descriptionEN: [
      "Manage development teams using agile methodologies.",
      "Manage development versions through GitHub repositories.",
      "Develop new features for existing applications",
      "Design database schemas.",
      "Implement solutions for operational needs.",
    ],
    technologies: ["Python", "Java", "MySQL", "PHP", "Laravel", "React", "TailwindCSS", "Supabase"],
  }
];