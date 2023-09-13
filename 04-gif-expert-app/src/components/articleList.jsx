const articlesList = [
  {
    position: 1,
    title: "¿Qué es desarrollo web?",
    keyWord: "quees-desarolloweb",
    href: "/quees-desarolloweb",
    publication_date: "Ene 28 2022",
    person: "Dan El chalbzouri",
    description: `<p>Es el proceso mediante el cual se crea un sitio web, así de simple; lo principal es entender que este proceso consta de 4 etapas:</p>

    <ol>
    <h2>Investigación y análisis: se determinan las necesidades del proyecto y funcionalidad necesaria.</h2>



    <li>Creación de diseño y estructura: se crea un mapa del sitio o ‘layout’ que es una representación resumida de la web tanto a nivel estético como a nivel de navegación, es decir, su estructura.</li>
    
    
    
    
    <li>Desarrollo e implementación: se codifica el ‘layout’ a través de lenguajes de programación para convertir ese diseño en un sitio funcional.</li>
    <h3>Prueba, entrega y lanzamiento: se pone a prueba el sitio, se verifica que el funcionamiento sea correcto y se corrigen errores.</h3>
        <br>
    </ol>
    <p>Esta descripción es bastante resumida, ya que cada etapa consta de más variables en el proceso, si te interesa ahondar en el tema te recomiendo veas la explicación completa en Wikipedia. <a href="https://es.wikipedia.org/wiki/Desarrollo_web" target="_blank">https://es.wikipedia.org/wiki/Desarrollo_web</a></p>
    
    
    <p>Lo importante aquí es que veas, que cuando hablamos de desarrollo web, nos referimos también al diseño web, ya que es la etapa 2 del proceso de desarrollo, por lo tanto, las empresas que ofrecen <b>servicios de desarrollo web</b> están hablando de todo el proceso. Lo siguiente sería, ver qué tipo de desarrollo hacen: sitios web, aplicaciones o tiendas online y conocer además, qué tipo de tecnología web utilizan para ello.</p>
    
    <p>Entonces, ¿las empresas que ofrecen <b>servicios de diseño web</b> solo hacen la etapa 1 y 2 del proceso de creación de una web?</p>
    
    <p>Espero te estés preguntando esto ahora mismo, porque de ser así has comprendido bien lo que es desarrollo ;).</p>
    
    <h4>Cuando una empresa ofrece servicios de diseño web, realmente solo trabajan la etapa 1 y 2. Para completar la etapa 3, que es codificación, la hacen con un sistema de gestión de contenidos (CMS) como Wordpress o Drupal para páginas web o WooCommerce para tiendas online, así hacen que ese diseño sea funcional. Obviamente, la etapa 4 también se alcanza.</h4> 
    <p>De esta manera, sin demeritar el trabajo que realizan, (porque créeme, conlleva mucho curro, ya que no solo se trata de que sea agradable visualmente, sino que el diseño de la navegación sea óptima para la experiencia de usuario y otras variables que requieren experiencia en el tema) el diseño estará limitado, tanto en estructura como en funcionalidad, porque los CMS se basan en plantillas prediseñadas, que si bien se pueden personalizar en apariencia, para adaptarlas en funcionalidad hay que codificar, por lo tanto, si vas a contratar un servicio de diseño web asegúrate que la empresa cuente con un desarrollador web de backend.</p>
    
    <h2>¿Es mejor contratar un servicio de desarrollo web o de diseño web?</h2>
        <br>
            <br>
    
    <p>Como todo en esta vida, depende de los objetivos del proyecto y también del presupuesto. Lo que sí te podemos decir, a grosso modo, cuando es mejor una opción o la otra:</p>
    
    <p>Diseño web:</p>
    <h3>
        <br>
    <li>Si vas empezando con tu negocio y no quieres invertir un gran presupuesto (esto no significa que tendrás una web de baja calidad sino que la funcionalidad y navegación será similar a otras webs).</li>
    <li>Si para tu negocio, al menos por ahora, es más importante la estética que alguna navegación o funcionalidad particular.</li>
    </h3>
    <br>
    
    <p>Desarrollo web</p>
        <br>
    <ul>
    <li>Tu modelo de negocio no se ajusta a la funcionalidad o navegación de los CMS.</li>
    <li>Tu negocio ha crecido y necesitas un mejor rendimiento y seguridad de tu web.</li>
    <li>Quieres ofrecer a tus usuarios funciones muy concretas.</li></ul>`,
  },
  {
    position: 2,
    title: "¿Qué es Jamstack y por qué usarlo?",
    keyWord: "quees-jamstack",
    href: "/quees-jamstack",
    person: "Paul Barrios",
    description: `<p>Jamstack es una forma moderna de desarrollar sitios web y aplicaciones.</p>
    <p>En lugar, de usar un sistema tradicional en el que el código se ejecuta en el servidor y genera la página web dinámicamente cada vez que alguien la solicita, Jamstack utiliza un enfoque donde el código se ejecuta en el navegador del usuario (JavaScript) y se comunica con servicios externos (APIs) para obtener los datos necesarios.</p>

<p><b>Ventajas de usar Jamstack</b></p>
<ul>
<li>Carga rápida del sitio web: debido a que el contenido estático se puede almacenar y servir desde una red de distribución de contenido (CDN, por sus siglas en inglés) a cambio de tener que generarlo cada vez que alguien lo solicita.</li>
<li>Sitio web más escalable: como resultado de no tener que manejar un gran tráfico de peticiones de forma simultánea.</li>
<li>Arquitectura segura: gracias a que no existe un backend que pueda ser atacado o comprometido. </li>
<li>Fácil mantenimiento: dado que, el código está claramente separado entre el front-end y el back-end, lo que facilita la depuración y el desarrollo.</li>
<ul>

<p>En resumen, Jamstack es una forma moderna y eficiente de desarrollar sitios web y aplicaciones, que ofrece mejores tiempos de carga, escalabilidad y seguridad. Es una excelente opción para cualquier empresa que quiera ofrecer una experiencia web rápida y eficiente a sus usuarios.</p>`,
    publication_date: "Jun 13 2022",
  },
  {
    position: 3,
    title: "Características de una PWA Ecommerce",
    keyWord: "ecommerce-pwa",
    href: "/ecommerce-pwa",
    person: "Paul Barrios",
    description: `
    <p>Partiendo,  que ya estés familiarizado con el término ecommerce, esas tiendas online a las que muchos accedemos para realizar varias compras, te explicamos que una PWA (aplicación web progresiva) es una nueva tecnología o software que se utiliza para crear estos comercios online y que asegura muy buenos resultados.</p>
    <p>Características de una PWA Ecommerce</p>
    <ol>
    <li>Progressive Enhancement: las PWA están construidas teniendo en cuenta la mejora progresiva, lo que significa que funcionarán en cualquier dispositivo o navegador.
    
    <li>Offline Capabilities: las PWA se pueden usar sin conexión o con redes de baja calidad, lo que las hace ideales para el comercio electrónico.
    
    <li>Fast Loading: las PWA utilizan servicio para almacenar en caché los recursos y los datos, lo que las hace más rápidas que las aplicaciones web tradicionales.
    
    <li>Push Notifications: las PWA pueden enviar notificaciones push a los usuarios, las cuales se pueden utilizar para notificarles sobre ofertas o nuevos productos.
    
    <li>Homescreen: las PWA se pueden añadir a la pantalla de inicio del dispositivo del usuario, lo que les permite acceder fácilmente a la aplicación.
    
    <li>App-Like: las PWA ofrecen una experiencia similar a la de una app, con animaciones suaves, transiciones y navegación.
    
    <li>Low Data: las PWA utilizan menos datos que las aplicaciones web tradicionales, lo que es importante para los usuarios con conexiones de mala calidad.
    
    <li>Secure: las PWA utilizan HTTPS para garantizar transacciones seguras y proteger los datos de los usuarios.
    
    <li>Responsive: las PWA están diseñadas para ser Responsive, lo que significa que se adaptarán a cualquier tamaño de pantalla o dispositivo.
    
    <li>Cost-effective: las PWA son menos costosas de desarrollar y mantener que las aplicaciones tradicionales, lo que las convierte en una solución económica para el comercio electrónico.</li>
    </ol>
    
    <p>Es una excelente opción para el comercio electrónico, ya que ofrece una experiencia de usuario similar a la de una aplicación nativa mientras se mantienen en el navegador web. Esto significa que no es necesario que los usuarios descarguen una aplicación desde una tienda de aplicaciones, lo que puede aumentar la adopción y la retención de usuarios.</p>`,
    publication_date: "Sep 21 2022",
  },
  {
    position: 4,
    title: "Tu web en No-code",
    keyWord: "tu-web-no-code",
    href: "/tu-web-no-code",
    person: "Dan El chalbzouri",
    description: `<p>Crear un sitio web profesional sin tener que escribir código parece impensable, pero es posible con herramientas como Webflow, que permite a los diseñadores y desarrolladores, crear sitios y aplicaciones web a través de una interfaz visual.</p>


    <p>Con esta herramienta de Diseño web y desarrollo permite a los diseñadores y desarrolladores crear sitios web y aplicaciones web de forma visual, sin tener que escribir código. </p>
    
    <p>Algunas de las características más destacables son:</p>
    
    <ul>
       <li> Fácil de usar: Las plataformas no-code permiten a los usuarios crear y modificar su sitio web sin tener conocimientos previos de programación.</li>
    
       <li> Rápido de desarrollar: Al no tener que escribir código, el desarrollo de un sitio web no-code es mucho más rápido y eficiente.</li>
        
        <li> Bajo costo: Al no requerir de programadores para crear un sitio web, se ahorra en los costos de desarrollo.</li>
        
        <li> Personalización: Muchas plataformas no-code permiten personalizar los diseños y funcionalidades de su sitio web sin tener que escribir código.</li>
        
       <li> Sin límites técnicos: Al no requerir de conocimientos técnicos para crear un sitio web, es posible crear un sitio web desde cualquier lugar y en cualquier momento.</li>
    </ul>`,
    publication_date: "Dic 03 2022",
  },
];

export default articlesList;
