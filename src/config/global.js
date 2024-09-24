export default {
  global: {
    componenteFormativo: 'Plan de comunicación',
    descripcionCurso:
      'Un plan de comunicación como cualquier otro plan requiere la implementación de estrategias y acciones que lleven al cumplimiento de los objetivos propuestos. <br> <br> Estos objetivos ya se han analizado en temas anteriores y deben tener dos tipos de enfoque: en los medios y en el mensaje. <br> <br> El plan de comunicación ayuda a determinar las actividades que una empresa debe realizar para el cumplimiento de dichos objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-principal-ok.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo-1.svg'),
      },
      {
        clases: ['decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo-2.svg'),
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
        titulo: 'El plan de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La comunicación en la empresa',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Proceso de la comunicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de comunicación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Medios de comunicación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estructura del plan de comunicación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura gráfica del plan',
        desarrolloContenidos: true,
      },
      //      {
      //        nombreRuta: 'tema3',
      //        numero: '3',
      //        titulo: 'Titulo de primer nivel',
      //        desarrolloContenidos: true,
      //      },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF7_124100_DU.pdf',
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
  complementario: [
    {
      tema: 'Elaboración de un plan de comunicación.',
      referencia:
        'SENA. (2020). Adaptado de Manuales prácticos de la Mipyme: Como Elaborar el Plan de Comunicación. (s.f.). Ejemplo Plan de Comunicación.',
      tipo: 'Documento PDF',
      link: 'downloads/Ejemplo_plan_de_comunicacion.pdf',
    },
    //   {
    //    tema: '',
    //    referencia: '',
    //    tipo: '',
    //    descarga: '/downloads/prueba.pdf',
    //  },
  ],
  glosario: [
    {
      termino: '<i>Above The Line</i> (ATL) o por encima de la línea',
      significado:
        'Técnica basada en la utilización de medios de publicidad tradicional o convencional. Los medios <i>Above The Line</i> hacen referencia a los medios masivos, con gran difusión, que se caracterizan por su elevado coste. Los medios tradicionales son televisión, radio, prensa y publicidad exterior.',
    },
    {
      termino: '<i>Below The Line</i> (BTL) o por debajo de la línea',
      significado:
        'Técnica basada en la utilización de medios de publicidad no convencionales. Se caracterizan por ser más directos y personales. Los medios BTL son el <i>marketing</i> directo, promociones al consumidor, promociones al fabricante, relaciones públicas, internet. Internet es un medio considerado por unos autores en la clasificación ATL mientras que por otros en la BTL.',
    },
    {
      termino: 'Comunicación corporativa',
      significado:
        'Comunicación por la cual la empresa premeditadamente emite un mensaje con el fin de transmitir o decir al público lo que la empresa es.',
    },
    {
      termino: '<i>Lobbying</i> o grupos de presión',
      significado:
        'Proceso planificado de comunicación persuasiva cuyo fin es influir y predisponer al receptor del mensaje para conseguir determinados objetivos para la empresa. Los <i>lobbys</i> actúan como grupos de presión.',
    },
    {
      termino: '<i>Mailing</i>',
      significado:
        'Envío de información a través del correo. Se trata de una alternativa del <i>marketing</i> directo.',
    },
    {
      termino: '<i>Marketing</i> de guerrilla',
      significado:
        'Se trata de cualquier alternativa comercial a la publicidad convencional, que utiliza altas dosis de creatividad e impacto visual para captar al público objetivo. Suele elegir la vía pública para el reclamo publicitario.',
    },
    {
      termino: 'Publicidad viral',
      significado:
        'Integra a todos los mensajes comerciales que se generan fundamentalmente a partir de un vídeo y que ofrecen un mensaje indirecto, no relacionado con una marca en concreto, pero que tienen un alto impacto en las redes sociales. Una publicidad se convierte en viral (virus) cuando es compartida por muchas personas a través de la mencionada herramienta de la <i>Web 2.0.</i>',
    },
  ],
  referencias: [
    {
      referencia:
        'Coll, P. y Lluís, J. (2018). <i>Marketing</i> y Comunicación en la Nueva Economía. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Cuenca, J. y Verazzi, L. (2018). Guía Fundamental de la Comunicación Interna. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Davara, A. M. (1992). Estrategias de Comunicación en <i>Marketing</i>. Edit. DOSSAT S.A.',
      link: '',
    },
    {
      referencia:
        'Estrella, A. M. y Segovia, C. (2016). Comunicación Integrada de <i>Marketing</i>. ESIC EDITORIAL.',
      link: '',
    },
    {
      referencia:
        'Informa BTL. (2010, 6 de octubre). <i>Marketing</i> de Guerrilla en la Nieve. ',
      link: 'https://www.informabtl.com/marketing-de-guerrilla-en-la-nieve/ ',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2003). Fundamentos de <i>Marketing</i>. (6ta ed.). Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Monserrat, J. y Sabater, F. (2017). Planificación Estratégica de Comunicación en Redes Sociales. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Puon, L. (2013, 7 de diciembre). Definición de Publicidad. Merca 2.0. ',
      link: 'https://www.merca20.com/definicion-de-publicidad/',
    },
    {
      referencia:
        'Stanton, W., Etzel, M. y Walker, B. (2004). Fundamentos de <i>Marketing</i>. (13a ed.). McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Thompson. I. (2006, febrero). Definición de Propaganda. PromonegocioS.net. ',
      link:
        'https://www.promonegocios.net/mercadotecnia/propaganda-definicion.html ',
    },
    {
      referencia:
        'Timoteo, A. J. (2013). Manejo de la Comunicación Organizacional. Ediciones Díaz de Santos.',
      link: '',
    },
    {
      referencia: 'Vila, F. (2013). Comunicación Estratégica. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Xunta de Galicia. (s.f.). Manuales prácticos de la pyme: Como Elaborar el Plan de Comunicación. ',
      link:
        'http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/1919/1/Como%20elaborar%20el%20plan%20de%20comunicaci%c3%b3n.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Quindío',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Correctora de estilo',
          centro:
            'Centro para la Industrial y la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
