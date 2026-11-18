export default {
  global: {
    Name: 'La postventa',
    Description:
      'Este componente formativo aborda la postventa como una etapa fundamental para fortalecer la relación con los clientes y promover su fidelización. Comprende las etapas, características, tipos de servicios y herramientas para la atención postventa, así como los procedimientos para ejecutar acciones de seguimiento y evaluar la calidad del servicio, de acuerdo con las políticas organizacionales y las necesidades del cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Postventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Etapas de la postventa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos de la postventa',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de la calidad del servicio postventa',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Procedimiento para estructurar un servicio postventa',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas postventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia del servicio postventa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de servicios postventa',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Buenas prácticas para la atención al cliente en el servicio postventa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguimiento al cliente después de la compra',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Asistencia técnica',
      significado:
        'servicio especializado que permite orientar al cliente, diagnosticar fallas y solucionar problemas relacionados con el funcionamiento de un producto.',
    },
    {
      termino: 'Atención al cliente',
      significado:
        'conjunto de actividades destinadas a atender consultas, solicitudes, inquietudes y necesidades de los clientes.',
    },
    {
      termino: 'Calidad del servicio',
      significado:
        'capacidad de la empresa para atender los requerimientos del cliente de manera oportuna, confiable y conforme a los compromisos establecidos.',
    },
    {
      termino: 'CRM',
      significado:
        'sistema de gestión de relaciones con clientes que permite organizar información sobre compras, solicitudes e interacciones para facilitar el seguimiento comercial.',
    },
    {
      termino: 'Fidelización',
      significado:
        'conjunto de acciones orientadas a fortalecer la confianza y mantener relaciones comerciales duraderas con los clientes.',
    },
    {
      termino: 'Garantía',
      significado:
        'respaldo que protege los derechos del consumidor frente a fallas o incumplimientos relacionados con los productos o servicios adquiridos, según las condiciones legales aplicables.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'medidas utilizadas para evaluar el cumplimiento de los objetivos, los tiempos de atención y los resultados del servicio postventa.',
    },
    {
      termino: 'Incidencia',
      significado:
        'situación que afecta o puede afectar la experiencia del cliente después de una compra y requiere atención por parte de la empresa.',
    },
    {
      termino: 'Mantenimiento correctivo',
      significado:
        'actividades destinadas a diagnosticar y solucionar fallas que afectan el funcionamiento de un producto.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'actividades programadas para conservar el funcionamiento adecuado de los productos y reducir la probabilidad de fallas.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso de revisión y ajuste de procedimientos y actividades para fortalecer permanentemente la calidad del servicio.',
    },
    {
      termino: 'Postventa',
      significado:
        'conjunto de actividades realizadas después de concretar una venta para atender las necesidades del cliente, verificar su satisfacción y mantener una relación comercial positiva.',
    },
    {
      termino: 'PQRS',
      significado:
        'sistema de gestión de peticiones, quejas, reclamos y sugerencias que permite registrar, clasificar y realizar seguimiento a las solicitudes de los clientes.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'nivel de conformidad del cliente respecto al producto o servicio adquirido y la atención recibida.',
    },
    {
      termino: 'Seguimiento postventa',
      significado:
        'actividad que permite mantener la comunicación con el cliente después de la compra para conocer su experiencia, identificar dificultades y brindar orientación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Artal Castells, M. (2010). Dirección de ventas: Organización del departamento de ventas y gestión de vendedores (9.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Da Silva, D. (2021). 6 tipos de servicio postventa para fidelizar clientes. Zendesk.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). Quality management—Customer satisfaction—Guidelines for complaints handling in organizations (ISO Standard No. 10002:2018).',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2012). Marketing (14.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Lemontech. (2023). ¿Qué son los indicadores de medición?',
      link: '',
    },
    {
      referencia:
        'Pérez Feijoo, H. M., Pérez Hernández, J. M., López González, L., & Caballero Bravo, C. (2013). Comunicación y atención al cliente. McGraw-Hill Interamericana de España.',
      link: '',
    },
    {
      referencia:
        'Ramirez, A. (2019). ¿Qué elementos componen la postventa? InformaBTL.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (s. f.). Fallas en un producto, baja calidad e incumplimiento de garantías.',
      link: '',
    },
    {
      referencia:
        'Zendesk. (2023). ¿Qué es atención al cliente? Guía introductoria con infografía.',
      link: 'https://www.zendesk.com.mx/blog/customer-service/atencion-al-cliente/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor técnico',
          centro: 'Centro de Comercio y Servicio - Regional Bolívar',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
