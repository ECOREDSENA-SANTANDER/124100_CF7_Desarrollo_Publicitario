<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El plan de comunicación
  
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema1/imagen1.svg')
      .col-sm-12.col-lg-6
        p Teniendo claro que un plan de comunicación requiere la implementación de estrategias y acciones que lleven al cumplimiento de los objetivos propuestos. A través de este componente formativo, se verán los elementos que debe contener este plan, así como las estrategias que en este campo se pueden desarrollar para el proceso de comunicación de la empresa. Es importante tener claro que, si bien ya se ha estudiado la comunicación interna, esta tiene grandes diferencias con la comunicación dirigida a los consumidores de los productos o usuarios de los servicios de la empresa.

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.1 La comunicación en la empresa

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        p Las empresas, independientemente  de su actividad económica, requieren de una interacción permanente con sus clientes; de allí depende todo el funcionamiento de la compañía o por lo menos, así debería ser. Son los clientes quienes dan las pautas para el desarrollo de los productos o servicios, también son ellos quienes definen los canales de distribución, las estrategias de promoción y en gran medida, el precio de los productos. La comunicación por lo tanto debe ser concebida de doble vía, la empresa tiene que aprender a escuchar a sus clientes y consumidores y crear mecanismos para que lo que ellos dicen sea tenido en cuenta. 
        p La comunicación es parte del marketing mix  (P – Publicidad) y por ende, un factor principal en el desarrollo comercial de los productos y servicios. Es importante aclarar que hoy en día la P – Publicidad abarca todo un sistema integrado de comunicación que no se limita a estrategias ATL (Above The Line ), es decir a medios masivos convencionales; por el contrario, la comunicación se ha volcado a los medios alternativos y a la web, gracias a la conectividad mundial y a la proliferación de las redes sociales. 
        .cajon.color-secundario.p-4.mb-4
          p.p-4 Hoy el mundo se mueve a través del internet y es allí donde está el futuro de las estrategias comerciales y con ellas de las comunicaciones empresariales. Por este motivo, en la actualidad, las empresas deben pensar en una comunicación más integral, estratégica e individualizada.    
      .col-sm-12.col-lg-4
       img(src='@/assets/curso/temas/tema1/imagen2.svg')

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.2 Proceso de la comunicación
    p La comunicación es un proceso sencillo que se lleva a cabo todo el tiempo y con todas las personas con las que se interactúa, sin embargo debe abordarse con estrategias efectivas, si se quieren obtener resultados óptimos. 
    
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        .titulo-sexto.color-secundario
          h5 Figura 1.
          span
            |  Modelo de comunicación
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/imagen3.svg' alt="El diagrama describe los componentes del modelo de comunicación: El emisor  envía un mensaje en un código a través de un canal, el receptor lo recibe y le da una retroalimentación.")
          figcaption Nota. Tomado de SENA (2020)
    p El proceso de la comunicación es conocido por la mayoría de personas, así mismo es de fácil comprensión y contiene los siguientes elementos:

    SlyderF.mb-5.mt-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta1/imagen1.svg')
        .title-card.bg8.mx-2.mb-4 Emisor
        p.mb-0.text-center Es quien emite o genera el mensaje, es la persona que busca ser comprendida por otra u otras a través de lo que desea trasmitir.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta1/imagen2.svg')
        .title-card.bg8.mx-2.mb-4 Receptor
        p.mb-0.text-center Es la persona o personas que reciben el mensaje y quienes deben comprenderlo para generar una respuesta efectiva.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta1/imagen3.svg')
        .title-card.bg8.mx-2.mb-4 Código
        p.mb-0.text-center Es el formato que tiene el mensaje; este depende del medio o canal por donde se vaya a transmitir: escrito, oral, audiovisual, gesticular, etc.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta1/imagen4.svg')
        .title-card.bg8.mx-2.mb-4 Canal
        p.mb-0.text-center  Es el medio por el cual se transmite el mensaje para que sea recibido de la forma más adecuada posible por el receptor.
      .tarjeta.color-secundario-cus.py-4.px-5
        .row.justify-content-center.mb-4
          .col-sm-3.col-lg-5.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta1/imagen5.svg')
        .title-card.bg8.mx-2.mb-4 Feed back
        p.mb-0.text-center Es la realimentación a la comunicación, la respuesta al mensaje emitido. Puede ser un mensaje con el mismo código y canal, un mensaje a través de otro medio e incluso el silencio puede ser un feed back.

    p.mb-4 En la comunicación de marketing  el proceso es igual; sin embargo, los participantes tienen otros roles y los objetivos son comerciales y de persuasión hacia la compra de un producto, uso de un servicio, inscripción en un sitio web, recomendación de determinada marca, etc.
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        .titulo-sexto.color-secundario
          h5 Figura 2.
          span
            |  Comunicación de marketing
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/imagen4.svg' alt="el diagrama presenta los componentes de la comunicación de marketing: el anunciante envía un  mensaje en determinado código a través de un medio, el consumidor recibe el mensaje y le da una retroalimentación.")
          figcaption Nota. Tomado de SENA (2020)
    p.mb-5.mt-5 En este proceso, que sigue siendo igual al ya conocido, los roles tienen unos ligeros cambios que se verán a continuación:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-11.col-md-12.col-12
        .row.align-items-center.justify-content-center.mb-0
          .col-lg-4.col-md-9.col-9
            img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema1/imagen5.svg', alt='Texto que describa la imagen')
          .col-lg-7.col-md-12.col-12
            .tarjeta.tarjeta--verde.p-5
              SlyderA(tipo="b")
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Anunciante:</strong> es quien emite el mensaje, en este caso es la empresa dueña de la marca, el producto o servicio para el que se está realizando la estrategia de comunicación o la campaña.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Consumidor:</strong> es quien recibe la comunicación y para quien se desarrolla toda la estrategia, es el actor principal del proceso porque de su respuesta depende la efectividad de la misma.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Código:</strong> es el lenguaje utilizado para el diseño del mensaje; en la actualidad existen un sinnúmero de posibilidades, lo que permite generar una comunicación mucho más impactante, dinámica y persuasiva entre los lenguajes que se utilizan: audiovisual, gráfico, auditivo y textual. Estos a su vez presentan múltiples posibilidades de interacción.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Medio:</strong> es el canal por el cual se trasmite el mensaje, hoy en día los medios han evolucionado en cuanto a la comunicación de marketing, con la preferencia del mercado por las redes sociales para mantenerse informado y con la decadencia de la televisión convencional; los medios que operan a través de plataformas web son los más efectivos para el desarrollo de estrategias de promoción.
                .row
                  .col-lg-12.col-md-6.col-12
                    p <strong>Feed back:</strong> es la razón de ser de la comunicación de marketing , es a través de este que se pueden realizar las mediciones de efectividad de las estrategias y definir los ajustes pertinentes a las mismas. Los clientes pueden generar diferentes tipos de respuestas dependiendo de los objetivos que la empresa haya planteado y es deber de ella otorgar todos los medios necesarios para que el cliente pueda expresar de la forma más eficiente posible dichas respuestas. Entre las más frecuentes están: la compra, la inscripción a un sitio web o el diligenciamiento de un formulario, el like a un post en una red social, compartir o comentar una publicación o escribir un mensaje a través de WhatsApp u otro sistema de chat. 
    p En todo plan de comunicación es importante tener claro este proceso y entender que el llevarlo a cabo, teniendo en cuenta todos los detalles, permite generar respuestas acertadas por parte de los consumidores y de esta forma lograr los objetivos propuestos.

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.3 Técnicas de comunicación

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        p Las empresas se deben apoyar en diferentes técnicas de comunicación para el logro de los objetivos y cada una de ellas tiene un accionar en el proceso de promoción de los productos y servicios; así mismo, cada una aporta en el proceso de persuasión que lleva al incremento del consumo y el uso de los servicios de la empresa. Las diferentes técnicas permiten llegar a todos los públicos objetivo con una comunicación 360º; es decir, abarcando todos los medios posibles de acuerdo con las características que presenten los consumidores.
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema1/imagen6.svg')
    p Existen cinco técnicas básicas de comunicación, todas ellas con fines y características particulares; las cuales se verán a continuación:

    .row.fondo-completo.align-items-center.p-4.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-md-7
                  p <strong>Publicidad:</strong> según Philip Kotler la publicidad es “una comunicación no personal y onerosa de promoción de ideas, bienes o servicios, que lleva a cabo un patrocinador identificado”.
                  .cajon.bg1.p-3
                    p.text-small Para la AMA (American Marketing Asociation) la publicidad es “la colocación de avisos y mensajes persuasivos, en tiempo o espacio, comprado en cualesquiera de los medios de comunicación por empresas lucrativas, organizaciones no lucrativas, agencias del estado y los individuos que intentan informar y/o persuadir a los miembros de un mercado meta en particular o a audiencias acerca de sus productos, servicios, organizaciones o ideas”. Citado por Puon (2013)
                  p.mt-3 De acuerdo con ambas definiciones, la publicidad es una técnica de comunicación que se aplica en medios convencionales con objetivos comerciales; es decir, es pagada y busca el retorno de ese pago a través de la respuesta del mercado objetivo al que va dirigido el mensaje. La publicidad es programada en tiempo en los medios electrónicos como la televisión, la radio y actualmente en plataformas audiovisuales como YouTube y Facebook; así como en espacio en medios impresos como revistas y prensa o en sitios web a través de compra de pauta en Google AdWords. 
                .col-md-4
                  img(src='@/assets/curso/temas/tema1/tarjeta2/imagen1.svg' alt='')
              .row.justify-content-center.align-items-center
                .col-md-11  
                  p <strong>Relaciones públicas:</strong> este tipo de comunicación es indispensable en cualquier empresa, no solo es apta para llegar a clientes potenciales y consumidores, sino también a proveedores y aliados estratégicos. Según Stanton, Etzel y Walker (2004), las relaciones públicas se definen como: 
                  .cajon.bg1.p-3
                    p.text-small Una herramienta de administración destinada a influir favorablemente en las actitudes hacia la organización, sus productos y sus políticas. Es una forma de promoción que muchas veces se ignora, a diferencia de la mayor parte de la publicidad y de las ventas personales, no incluyen un mensaje de ventas específico. Los objetivos pueden ser clientes, accionistas, una organización gubernamental o un grupo de interés especial. (p. 643)
                  p.mb-3 De acuerdo con esta definición, es una excelente técnica para mantener intacta la imagen de la empresa, porque permite a través de las relaciones con los diferentes públicos corregir posibles adversidades, generar confianza, crear lazos entre la marca y los públicos y mejorar la imagen corporativa.  
                  img(src='@/assets/curso/temas/tema1/tarjeta2/imagen2.svg' alt='')
              .row.justify-content-center.align-items-center
                .col-md-7
                  p <strong>Propaganda:</strong> esta técnica suele confundirse con la publicidad; sin embargo, existe un abismo de diferencia entre ellas, si bien ambas pueden coincidir en el uso de algunos medios, su fin es muy diferente.
                  .cajon.bg1.p-3
                    p.text-small La AMA (American Marketing Asociation) la define como  “las ideas, información u otro material difundido comúnmente a través de los medios (periódicos, páginas amarillas, radio, televisión, etc.) en un esfuerzo por ganar a personas para una doctrina o punto de vista”. Citado por Thompson (2006). 
                  p.mt-3 Con la llegada de las redes sociales se ha podido utilizar esta estrategia para propósitos comerciales y políticos más que nunca. Cuando se postea algo, ya sea de índole personal o comercial sin acudir a la publicidad paga en las redes sociales, se está haciendo propaganda; para el caso los likes  que recibe dicho post o las veces que es compartido se convierte la propagación de una información sin haber pagado en los medios, solo por la convicción personal de quien los hizo, ya sea por gusto, por coincidencia ideológica o por apoyo a la causa. La propaganda es por lo tanto la divulgación sin ánimo de lucro de una idea, del concepto que se tenga de algo o de alguien; de ahí que su uso sea más frecuente en el escenario político, sin embargo, con estrategias bien estructuradas puede llegar a ser muy eficaz también en lo comercial.  
                .col-md-4
                  img(src='@/assets/curso/temas/tema1/tarjeta2/imagen3.svg' alt='')
              .row.justify-content-center.align-items-center
                .col-md-11  
                  p <strong>Free press:</strong> prensa gratis o publicity, es una técnica hoy en día muy utilizada, gracias al aumento en el número de medios e influenciadores que han llegado debido a la masificación de las redes sociales.  
                  p Un influenciador puede llegar a un número muy superior al de un medio local, además, de acuerdo con su temática y estilo, su público está segmentado, por lo que las marcas que van dirigidas a dicho target pueden obtener mayores beneficios.
                  p.mb-3 En ese orden de ideas, el free press puede lograrse con el pago directo, no a los medios, sino a influenciadores tales como deportistas, artistas, youtubers, comediantes, etc. Todos ellos con la posibilidad de hacer presencia tanto en medios convencionales como en los digitales; de ahí que ser sponsor o patrocinador de un equipo de futbol, de un tenista o de un artista, se convierta en una multiplataforma con la que las marcas pueden llegar a sus consumidores directos sin pagar por hacer presencia en medios.   
                  img(src='@/assets/curso/temas/tema1/tarjeta2/imagen4.svg' alt='')
              .row.justify-content-center.align-items-center
                .col-md-7
                  p <strong>Promoción de ventas:</strong> de acuerdo con Kotler y Armstrong (2003), la promoción de ventas se define como “los incentivos a corto plazo que fomentan la compra o venta de un producto o servicio” (p. 470-476). Dichos incentivos pueden llevarse a cabo de distintas formas: descuentos, ofertas, cupones, regalos, etc. 
                  p Esta técnica por lo tanto se realiza de forma casi exclusiva en los puntos de venta; no obstante, en la actualidad plataformas como Instagram y Facebook se han convertido en verdaderas vitrinas de los que antes fueron almacenes exclusivamente físicos, para transformarse en negocios multiplataforma, esto le ha permitido a muchas marcas expandir la cobertura de sus mercados y llegar a públicos que están por fuera de su área geográfica, todo acompañado de los cada vez mejores servicios de courier  que tiene la posibilidad de llegar a casi cualquier lugar. 
                  p Es por eso que hoy en día plataformas como Amazon y Ali Express permiten ventas a nivel mundial, a tal nivel que el propio comprador muchas veces ignora el origen del producto que está adquiriendo.
                  p.mt-3 La promoción de ventas es una muy eficaz técnica de comunicación debido a que más del 80 % de las compras que realiza una persona, las hace motivada por las emociones, por encima de la racionalidad; por lo tanto, las ofertas, los descuentos y los obsequios son un excelente generador de ventas por impulso. 
                .col-md-4
                  img(src='@/assets/curso/temas/tema1/tarjeta2/imagen5.svg' alt='')

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.4 Medios de comunicación

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4
        img(src='@/assets/curso/temas/tema1/imagen7.svg')
      .col-sm-12.col-lg-8
        p Para el desarrollo del plan de comunicaciones, es necesario contemplar la selección de un grupo de medios que permita llegar de la forma más oportuna al mercado objetivo; para ello, es indispensable tener en cuenta variables del target  como su caracterización demográfica y psicográfica, el presupuesto de la empresa y las características del producto o servicio. Los medios de comunicación elegidos deben contemplar el uso de todos los canales posibles para que la información llegue de una forma más integral, logrando incluso una plataforma de 360º y una mayor interacción entre los consumidores y la marca. 
        .cajon.color-secundario.p-4.mb-4
          p.p-2.text-bold Los medios que se empleen en un plan de comunicación se pueden dividir en dos grupos principales: los ATL y los BTL. 

    .row.mb-5(data-aos="zoom-in-left")
      .col-3
        img(src='@/assets/curso/temas/tema1/titulo1.svg' alt='')
    p Los medios ATL (Above The Line) son aquellos que la publicidad ha utilizado de forma tradicional durante décadas y que, gracias a su carácter masivo, permiten llegar a un número considerable de personas, logrando resultados de comunicación a un alto nivel. 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.ps-3(titulo="Televisión")
        .col-md-11.mb-4.mb-md-0
          .row.ps-3
            .col-md-8
              p Es un medio de información, audiovisual y conceptual. Sus características específicas son:
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Cobertura nacional
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-3
                  |  Audiencia masiva
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Bajo costo por mil (cada mil personas impactadas).
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Suele utilizarse como medio principal en las campañas.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Mensajes cortos (20, 30 o 45 segundos).
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Realización en formato digital.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Narrativa y lenguaje audiovisual muy versátil.
            .col-md-4
              img(src='@/assets/curso/temas/tema1/tarjeta3/imagen1.svg', alt='')
      .row.ps-3(titulo="Cine")
        .col-md-11.mb-4.mb-md-0
          .row.ps-3
            .col-md-8
              p Es un medio de comunicación social, audiovisual y conceptual. Sus características son:
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Cobertura nacional
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-3
                  |  Poca audiencia y muy heterogénea
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Alto costo por mil
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Mensajes largos (1 o 2 minutos)
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Narrativa y lenguaje audiovisual muy versátil
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Proceso de contratación directa o a través de agencias
            .col-md-4
              img(src='@/assets/curso/temas/tema1/tarjeta3/imagen2.svg', alt='')
      .row.ps-3(titulo="Radio")
        .col-md-11.mb-4.mb-md-0
          .row.ps-3
            .col-md-8
              p Medio de información auditiva, es conceptual cuando se trata de cuñas y argumental cuando es de información. Las características más importantes de este medio son:
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Generalmente local o regional, solo alcanza audiencia nacional cuando una emisora transmite en cadena.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-3.mt-3
                  |  Bajo costo por mil.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Es flexible, ya que permite la emisión de cuñas, jingles o programas.
            .col-md-4
              img(src='@/assets/curso/temas/tema1/tarjeta3/imagen3.svg', alt='')
      .row.ps-3(titulo="Prensa")
        .col-md-11.mb-4.mb-md-0
          .row.ps-3
            .col-md-8
              p  Es un medio de información impreso y argumental. Sus características específicas son:
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Local/regional.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-3
                  |  Poca audiencia.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Imágenes de baja calidad.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Duración muy limitada del mensaje (se desecha rápido).
            .col-md-4
              img(src='@/assets/curso/temas/tema1/tarjeta3/imagen4.svg', alt='')
      .row.ps-3(titulo="Revistas")
        .col-md-11.mb-4.mb-md-0
          .row.ps-3
            .col-md-8
              p  Hay dos tipos de revistas: de información general y especializada. Las primeras tienen alcance nacional indiscriminado, mientras que las segundas se enfocan en temas específicos y por lo tanto, llegan a públicos exclusivos. En ellas hay algunas características comunes, además de tratarse en todos los casos de medios de información, impresos y argumentales:
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Imágenes a todo color y alta resolución.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-3
                  |  Permanencia del mensaje (no se desecha de inmediato).
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Tamaños publicitarios específicos.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Audiencias homogéneas, enfocadas en cada temática específica.
            .col-md-4
              img(src='@/assets/curso/temas/tema1/tarjeta3/imagen5.svg', alt='')
      .row.ps-3(titulo="Publicidad exterior")
        .col-md-11.mb-4.mb-md-0
          .row.ps-3
            .col-md-8
              p  Se trata de un medio específicamente publicitario, impreso y conceptual. Es susceptible de adoptar todo tipo de formas y está situada siempre en la calle o en lugares de gran afluencia de público. Las características más importantes son:
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Generalmente se utiliza como medio de apoyo, por sus limitaciones de espacio.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-3
                  |  El mensaje que contiene debe ser breve (conceptual).
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Debe ser tratada con mucha fuerza gráfica, para producir un impacto inmediato.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Es más utilizado en comunicación local.
            .col-md-4
              img(src='@/assets/curso/temas/tema1/tarjeta3/imagen6.svg', alt='')
      .row.ps-3(titulo="Internet")
        .col-md-11.mb-4.mb-md-0
          .row.ps-3
            .col-md-8
              p  Más que un medio es un soporte para diferentes medios. En él, se encuentran desde los clásicos anuncios por palabras de toda la vida (Google AdWords), hasta los modernos formatos del Branded Content, similares a una película cinematográfica en formato corto. También, hay anuncios convencionales de televisión insertados en plataformas como YouTube o formatos especiales exclusivos para su uso en las redes sociales. Tiene las siguientes características: 
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3
                  |  Es muy flexible, soporta todo tipo de formatos digitales y casi cualquier tamaño.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0
                  |  Segmenta de forma específica debido a que cada espacio en internet tiene un público específico.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  Es integral, se puede realizar toda una campaña a través de internet y llegar a un gran porcentaje del mercado.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-3.mt-3
                  |  Es masivo, un porcentaje muy alto de la población utiliza la internet. 
            .col-md-4
              img(src='@/assets/curso/temas/tema1/tarjeta3/imagen7.svg', alt='')

    .row.mb-5.mt-5(data-aos="zoom-in-left")
      .col-3
        img(src='@/assets/curso/temas/tema1/titulo2.svg' alt='')
    

    .row.mb-5.mt-5.align-items-center.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--verdesola 
          .col-7
            .row
              .col-12
                p.mb-4.p-3.ps-4 Below The Line  (bajo la línea), también llamado marketing  de guerrilla, es una técnica de comunicación en la que se hace uso de medios no masivos de comunicación y los mensajes van enfocados a segmentos o nichos de mercado muy concretos. Se puede llevar a cabo en cualquier lugar o momento. El BTL se realiza con el fin de impresionar a miembros del mercado objetivo, a través de acciones sorpresivas y muy creativas, por eso recibe también el nombre de marketing  de guerrilla, porque las acciones que se realizan son similares a una emboscada en las que se toma al consumidor por sorpresa. Las acciones BTL se pueden realizar desde varios frentes del mercadeo: street marketing, merchandising,  promoción de ventas, activaciones de marca, impresos.
        .col-11.position-relative.p-3
          .avatar
            img(src="@/assets/curso/temas/tema1/imagen8.svg")
   
    TabsA.color-acento-botones.mb-5(data-aos="zoom-in-left")
      .tarjeta.tarjeta--verde.p-5(titulo="Street marketing")
        .row.justify-content-center
          p.ps-5  Street marketing
          .col-sm-12.col-lg-2
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta4/imagen1.svg', alt='')
          .col-sm-12.col-lg-9
            p Es una técnica que realiza en espacios públicos y concurridos, en la que se aprovechan los elementos del ambiente para el desarrollo de estrategias de comunicación con un alto nivel de conceptualización. El Street marketing suele ser un poco invasivo en algunas ocasiones; sin embargo, esa característica le da un alto grado de espectacularidad e impacto, elementos que garantizan la recordación del mensaje y la viralidad del mismo en redes sociales y otros medios.
      .tarjeta.tarjeta--verde.p-5(titulo="Merchandising")
        .row.justify-content-center
          p.ps-5  Merchandising
          .col-sm-12.col-lg-2
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta4/imagen2.svg', alt='')
          .col-sm-12.col-lg-9
            p Es una sub-rama del marketing, también llamado micromercadeo. Tiene como finalidad el diseño de las estrategias y actividades relacionadas con la promoción, exhibición y colocación de los productos en el punto de venta. Y es precisamente el punto de venta, uno de los focos donde se desarrollan acciones BTL con mayor frecuencia, debido a la concurrencia de personas y la posibilidad de segmentar el mercado a través de las categorías de productos. El BTL en el merchandising puede realizar acciones enfocadas en eventos, promociones, tomas de punto de venta, exhibiciones, concursos, ofertas y descuentos.
      .tarjeta.tarjeta--verde.p-5(titulo="Promoción de ventas")
        .row.justify-content-center
          p.ps-5  Merchandising
          .col-sm-12.col-lg-2
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta4/imagen3.svg', alt='')
          .col-sm-12.col-lg-9
            p Se define como “los incentivos a corto plazo que fomentan la compra o venta de un producto o servicio” (Kotler y Armstrong, 2003). 
            p.mb-3 Recuerde que este tema se explicó en las técnicas de comunicación.
      .tarjeta.tarjeta--verde.p-5(titulo="Activaciones de marca")
        .row.justify-content-center
          p.ps-5  Activaciones de marca
          .col-sm-12.col-lg-2
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta4/imagen4.svg', alt='')
          .col-sm-12.col-lg-9
            p Son acciones de marketing enfocadas en generar un alto nivel de recordación en el mercado objetivo; se realizan a través de experiencias en las que el consumidor tiene interacción con la marca, recibiendo un mensaje muy concreto relacionado con la propuesta de valor o los beneficios que esta ofrece. Las activaciones tienen un alto contenido de creatividad, implican un bajo presupuesto y tienen doble funcionalidad: generar impacto positivo y recordación en quienes son alcanzados por la acción y se convierten en un video promocional para las redes sociales, muchos de ellos llegando a ser muy virales. 
      .tarjeta.tarjeta--verde.p-5(titulo="Impresos")
        .row.justify-content-center
          p.ps-5  Impresos
          .col-sm-12.col-lg-2
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta4/imagen5.svg', alt='')
          .col-sm-12.col-lg-9
            p El BTL se puede realizar de múltiples formas, por lo general está involucrado el diseño gráfico y es ahí donde se pueden romper los esquemas convencionales. Este proceso debe involucrar tanto al diseñador como a quien va a producir la pieza, que por lo general representa un reto. 
    p.mb-4.mt-4 En el siguiente ejemplo se puede ver reflejado lo anterior, en la promoción de un parque de esquí en invierno:
   
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        .titulo-sexto.color-secundario
          h5 Figura 3.
          span
            | Marketing de guerrilla en la nieve
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/imagen9.svg' alt="la figura presenta una secuencia de 3 fotografías: una persona colocando una pequeña imagen de un esquiador sobre el parabrisas de una carro, el parabrisas de un carro lleno de nieve y sobresale un pequeño esquiador sobre el hielo, por ultimo una fila de varios carros con el pequeño esquiador sobre el parabrisas.")
          figcaption Nota. Tomado de InformaBTL (2010)

    Separador  
    #t_1_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 1.5 Estructura del plan de comunicación
    p.mb-4.mt-4 El plan de comunicación es muy similar al desarrollo de la campaña publicitaria; sin embargo, se puede considerar un plan como un proceso estructurado más a largo plazo, es por ello que en este se plantea un grupo de estrategias más detalladas y con un enfoque direccionado a que la marca mantenga interacción permanente con el cliente.
    .tarjeta.tarjeta--morada.p-5
      p.mb-0 El plan de comunicaciones debe realizarse con una estructura de planificación estratégica, la cual permite llevar a cabo cada una de las acciones en función del cumplimiento de los objetivos; teniendo en cuenta todos estos elementos el desarrollo del plan es claro para los participantes. Cada plan puede constituir varias campañas, una estrategia convertirse en una campaña, de ahí que para cada una se realice un brief  táctico. 
    p.mb-4.mt-4 Antes del desarrollo de la estructura del plan se debe contemplar al detalle varios elementos que van a servir como insumo para su desarrollo, sin ellos no sería posible realizarlo: 
 
    br
    .row.mb-5.mt-5.align-items-center.justify-content-center
      .col-lg-8
        .tarjeta.tarjeta--verdesola-recta
          .row.p-5
              .col-12
                ul.lista-ul-.mb-0
                  li.mb-0
                    i.fas.fa-plus.color-mas.mb-3
                    |  Descripción del producto o servicio
                  li.mb-0  
                    i.fas.fa-plus.color-mas.mb-0
                    |  Segmentación del mercado
                  li.mb-0
                    i.fas.fa-plus.color-mas.mb-0.mt-3
                    |  Objetivos de marketing     
        .col-12.position-relative.p-5
          .avatar
            img(src="@/assets/curso/temas/tema1/imagen10.svg")
    p.mb-5.mt-5 Una vez se han desarrollado estos elementos se comienza la elaboración de la estructura del plan y se debe tener presente que la estructura de planificación se realiza con los siguientes elementos, todos ligados entre sí:

    .row.mb-5.mt-5(data-aos="zoom-in-left")
      .col-2
        img(src='@/assets/curso/temas/tema1/titulo3.svg' alt='')

    .row.tarjeta--morada
      .col-2
        img.p-5(src='@/assets/curso/temas/tema1/imagen11.svg' alt='')
      .col-10
        p.mt-5 Se plantean con base en la estructura SMART ya vista anteriormente, Specífico, Medible, Alcanzable, Relevante y Temporal. Es importante que los objetivos se puedan medir y tengan una fecha de realización, cada uno al final estará monitorizado con un indicador de gestión. Además, deben ser llevados a cabo con el desarrollo de las estrategias. 

    .row.mb-5.mt-5(data-aos="zoom-in-left")
      .col-2
        img(src='@/assets/curso/temas/tema1/titulo4.svg' alt='')
    p.mt-4.mb-4 Se describen como una acción detallada de lo que se quiere hacer para lograr los objetivos, en la mayoría de oportunidades es necesario desarrollar varias estrategias para el logro de un objetivo. Implican el proceso creativo del plan de comunicación, es en este punto donde se proponen los medios y las técnicas de comunicación a implementar.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--verde2")(data-aos="zoom-in-left")
      .row(titulo="Estrategias corporativas")
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-10
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  <strong>Estrategia global de diferenciación:</strong> las empresas pueden seguir estrategias de diferenciación por atributos tangibles, intangibles... cada una se posiciona en diferentes valores.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Estrategia de asociación:</strong> en contraposición, la estrategia de asociación se refiere a aquellas que siguen las empresas para identificar los mismos valores o similares.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Estrategia mixta:</strong> se puede seguir una estrategia que combine las de mixta. Es decir, combinar las estrategias de diferenciación y asociación.       
      .row(titulo="Estrategias de marca")
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-10
              p Existen diferentes estrategias o decisiones en torno al desarrollo de la marca o marcas de la empresa: 
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  <strong>Estrategia de marca única o monolítica:</strong> supone poner el mismo nombre a todos los productos que la empresa comercializa y este nombre puede coincidir o no con el de la empresa. Esta estrategia también recibe el nombre de “marca paraguas”.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Estrategia de marcas múltiples o marquista:</strong> es el caso opuesto al anterior. La empresa no existe para el usuario y es el producto el que manda.
                  ul.list-ul.ps-3
                    li
                     i.fas.fa-check-circle.color-gris.mb-0
                     | <strong>Estrategia de marcas individuales:</strong> consiste en poner un nombre distinto a cada uno de los productos comercializados por la empresa.
                    li
                     i.fas.fa-check-circle.color-gris.mb-0
                     | <strong>Estrategia de marcas para líneas de productos:</strong> consiste en utilizar el mismo nombre de marca para varios productos relacionados entre sí.
                    li
                     i.fas.fa-check-circle.color-gris.mb-0
                     | <strong>Estrategia de segundas marcas:</strong> son marcas que pertenecen a fabricantes que tienen en el mercado otras marcas de más prestigio.
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Estrategia de marcas respaldadas o de endoso:</strong> la marca es individual, pero recibe el respaldo de una marca establecida. Esto produce que la marca esté apoyada por el prestigio de la marca establecida.
      .row(titulo="Estrategias de <em>lobby</em>")
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-10
              p Se encuentran dos estrategias en el desarrollo de la actividad del lobbying: 
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  <strong>Estrategia de <em>lobby</em> directo:</strong> el <em>lobby</em> directo es el realizado sin la participación de terceros. La empresa o el grupo de presión actúa directamente con la persona responsable que tiene el poder de tomar las decisiones. Implica que la empresa tenga un contacto y acceso directo a la persona de mayor responsabilidad.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Estrategia de lobby indirecto:</strong> el <em>lobby</em> indirecto consiste en utilizar a la ciudadanía, el electorado u otros intermediarios para hacer valer una postura o un interés ante los poderes públicos. De modo que estos se hagan eco del interés que promueve la empresa y tomen una decisión favorable. 
      .row(titulo="Estrategias de <em>marketing</em>")
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-10
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong>de captación:</strong> su estrategia se basa en conseguir nuevos clientes. Esta estrategia es más habitual en el pasado, ya que ahora es cada vez más difícil captar nuevos clientes y todo el esfuerzo se centra en mantener y mejorar las relaciones con los existentes.
              p.ps-3.mt-3 Políticas como precio o el lugar de ubicación de un producto son algunas de las herramientas que se utilizarán para alcanzar mayor número de clientes. 
              ul.lista-ul-.mb-3
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong>de fidelización o retención:</strong> su objetivo principal es mantener la fidelidad o lealtad de los clientes, aquellos que son los más rentables para la empresa, a través de una relación que produzca el mayor valor para el cliente.
              p.ps-3.mt-3 Esta estrategia se basa en prestar el mejor servicio al cliente, ofrecerle un producto personalizado a sus necesidades, poner en marcha programas de fidelización: regalos, tarjetas de puntos, etc. 
              p.ps-3.mt-3 En esta estrategia, los clientes fieles son menos sensibles al precio y tienen un coste de cambio que representa una barrera para los competidores. Cuando un cliente se encuentra verdaderamente satisfecho con la oferta de la empresa, este puede actuar incluso como prescriptor de la misma, de ahí la importancia de esta estrategia.
              ul.lista-ul-.mb-3
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong><em>one to one</em></strong>: consiste en una personalización total de la oferta y mensaje de la empresa. Se trata de conocer las necesidades del cliente y establecer una relación directa y especial con cada uno de ellos, one to one, uno a uno. 
              ul.lista-ul-.mb-3
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong>viral o <em>buzz</em></strong>: es una estrategia que se basa en que son los propios clientes los que dan a conocer el producto a otras personas. Especialmente destaca esta estrategia a través de internet, donde son los propios consumidores que envían y dan a conocer la oferta de la empresa.  
              p.ps-3.mt-3 Esta estrategia que cada vez se está desarrollando con mayor importancia debido a la saturación publicitaria, puede utilizar foros donde los consumidores dejan sus opiniones u otras herramientas como el desarrollo de juegos o acciones de publicidad más innovadoras.
              ul.lista-ul-.mb-3
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong>directo:</strong> estrategia que utiliza distintos medios publicitarios para conseguir una respuesta directa por parte del cliente. Generalmente busca el que se produzca la compra de la marca de la empresa, aunque también es muy común buscar generar contactos.  
              ul.lista-ul-.mb-3
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong>relacional:</strong> consiste en tratar de establecer una relación entre la empresa y el cliente. Una relación que sea duradera y beneficiosa para ambas partes.  
              ul.lista-ul-.mb-3
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong>emocional o experiencial:</strong> el marketing emocional se centra en la gestión de las experiencias vividas por cada cliente con la marca y la empresa. En este sentido, es fundamental crear un mundo para el cliente donde este participe.  
              ul.lista-ul-.mb-3
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  Marketing <strong>permisivo:</strong> estrategia de marketing donde la empresa ya cuenta anticipadamente con el permiso del cliente para poder hacerle llegar ofertas comerciales.   
      .row(titulo="Estrategias de publicidad")
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-10
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  <strong>Estrategia</strong> <em>Above The Line</em> <strong>(ATL)</strong>: estrategia que implica el empleo de medios tradicionales o convencionales para publicitar la oferta y los mensajes de la empresa. Se trata de una estrategia que utiliza medios masivos para llegar al mayor número de público objetivo. Entre los medios masivos se encuentran: la televisión, la radio, la prensa y la publicidad exterior.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Estrategia</strong> <em>Below The Line</em> <strong>(BTL)</strong>: el empleo de una estrategia <em>Below The Line</em> se centra en utilizar medios no convencionales, que se caracterizan por ser menos masivos y más directos. Algunos de ellos son: las relaciones públicas, el internet, el marketing directo, las promociones. 
      .row(titulo="Estrategias <em>web</em>")
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-10
              ul.lista-ul-.mb-0
                li.mb-0
                  i.fas.fa-plus.color-mas.mb-0
                  |  <strong>Registro en buscadores u otros directorios:</strong> consiste en dar de alta la referencia web de la empresa en los principales buscadores de internet, con el objetivo de que se muestre la web de la empresa entre los resultados de búsqueda de los usuarios/as de internet.
                p.ps-3.mt-3 El registro por ejemplo en directorios empresariales u otras páginas también es una de las estrategias de comunicación web.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Patrocinio de palabras claves o anuncios en buscadores:</strong> estrategia basada en elegir aquellas palabras con las que la empresa define lo que quiere comunicar.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Enlaces en otras páginas o <em>bartering:</em></strong> intercambio de enlaces en páginas <em>web</em> o <em>bartering</em> (intercambio promocional), consiste en publicar enlaces a la página web de la empresa u otras páginas propias en otras páginas <em>web</em>.
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong><em>Microsites</em> y comunidades virtuales:</strong> webs desarrolladas específicamente para dar a conocer una acción en concreto de la empresa. Con carácter general suelen tener una validez determinada en el tiempo, pues son creadas para una actividad en concreto. 
                p.ps-3.mt-3 Una comunidad virtual es un punto de encuentro en internet para que usuarios con intereses comunes puedan charlar, debatir, compartir información, etc  
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong><em>E-mail marketing:</em></strong> utilización del correo electrónico como herramienta de comunicación directa y personalizada con el usuario. Este medio de comunicación está desbancando al fax y al correo postal, como otras formas de comunicación. En parte debido a: el bajo coste de la comunicación, que no depende de la distancia ni del número de destinatarios/as, la rapidez, posibilidad de adjuntar ficheros, así como las distintas técnicas que ofrece como puede ser la posibilidad de encriptación. 
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong>Publicidad en internet:</strong> otra forma de publicidad en diferentes páginas web a través de banners o anuncios publicitarios en internet, ventanas emergentes o pop ups, botones, entre otros que aparecen cuando el usuario consulta otras páginas y contenidos <em>web</em>. 
                li.mb-0  
                  i.fas.fa-plus.color-mas.mb-0.mt-3
                  |  <strong><em>E-commerce:</em></strong> intercambio de información y pago de los productos a través de internet. La entrega final se realiza en el mundo real, salvo aquellos bienes que pueden ser digitalizados. La estrategia de e-commerce supone ofrecer al consumidor un nuevo canal de venta diferente de las formas tradicionales, venta directa, a través de correo postal o por teléfono. (Xunta de Galicia, s.f., p. 68-72) 

    .row.mb-5.mt-5(data-aos="zoom-in-left")
      .col-2
        img(src='@/assets/curso/temas/tema1/titulo5.svg' alt='')

    .row.tarjeta--morada(data-aos="zoom-in-left")
      .col-2
        img.p-5(src='@/assets/curso/temas/tema1/imagen12.svg' alt='')
      .col-10
        p.mt-5 Las actividades se detallan como el paso a paso para que cada una de las estrategias sean llevadas a cabo, es importante que en este punto se determinen todos los elementos en detalle. Las actividades serán desarrolladas por los responsables del plan y de ahí la importancia que su descripción sea muy clara en la definición de lo que se debe hacer. 

    .row.mb-5.mt-5(data-aos="zoom-in-left")
      .col-2
        img(src='@/assets/curso/temas/tema1/titulo6.svg' alt='')

    p.mt-4.mb-4 Los recursos se definen en función de las actividades planteadas. Cada actividad amerita la definición de los elementos necesario para llevarla a cabo y los recursos se determinan en:

    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
        .col-lg-10
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/imagen13.svg' alt='AvatarTop')
            .tarjeta.tarjeta--verdesola-recta
              .p-4
                ul.lista-ul-.mb-0
                  li.mb-
                    i.fas.fa-plus.color-mas.mb-0
                    |  Técnicos: aquí se enumeran las herramientas y los elementos necesarios para el desarrollo de la actividad.
                  li.mb-3
                    i.fas.fa-plus.color-mas.mb-0
                    |  Tecnológicos: estos recursos se definen desde los elementos de tecnología y software  que se requieren para el desarrollo de las actividades.
                  li.mb-3
                    i.fas.fa-plus.color-mas.mb-0
                    |  Humanos: aquí se definen los perfiles profesionales o técnicos de las personas que se requieren para el desarrollo de las actividades.
                  li.mb-3
                    i.fas.fa-plus.color-mas.mb-0
                    |  Económicos: este punto define el presupuesto necesario para obtener los recursos anteriores.

    .row.mb-5(data-aos="zoom-in-left")
      .col-2
        img(src='@/assets/curso/temas/tema1/titulo7.svg' alt='')

    .row.tarjeta--morada(data-aos="zoom-in-left")
      p.p-5 Los Los responsables son aquellos líderes seleccionados, de acuerdo a su perfil para responder por el desarrollo de las estrategias; ellos serán quienes coordinen el desarrollo de las actividades y gestionen los recursos necesarios para llevarlas a cabo y al final serán los que muestren el cumplimiento de los objetivos a través de los indicadores. 

    .row.mb-5.mt-5(data-aos="zoom-in-left")
      .col-2
        img(src='@/assets/curso/temas/tema1/titulo8.svg' alt='')

    .row.bg1(data-aos="zoom-in-left")
      .col-1
        img.p-1.mt-2(src='@/assets/curso/temas/tema1/imagen14.svg' alt='')
      .col-11
        p.mt-4 Los indicadores del plan de comunicación se derivan de los objetivos, estos se determinan con la meta cuantitativa y el tiempo definido en cada uno. 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
