# Portafolio Hawk Durant

Portafolio personal desarrollado con React, Bootstrap 4 y CSS personalizado. Presenta información profesional, proyectos destacados y un formulario de contacto funcional.

## Tecnologías Utilizadas

- **React 18.2.0** - Framework principal para la construcción de componentes
- **Bootstrap 4.6.2** - Framework CSS para diseño responsive
- **React Icons** - Biblioteca de iconos para habilidades técnicas
- **EmailJS** - Servicio para envío de correos desde el formulario de contacto
- **React Bootstrap** - Componentes Bootstrap para React (Modal)
- **CSS personalizado** - Estilos personalizados para mantener el diseño original

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
# Crea un archivo .env en la raíz del proyecto
# Agrega tus credenciales de EmailJS:
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=tu_public_key
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

## Configuración de EmailJS

El formulario de contacto utiliza EmailJS para enviar correos electrónicos. Para configurarlo:

1. Crea una cuenta gratuita en [EmailJS](https://www.emailjs.com/)
2. Configura tu servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email con los siguientes campos:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{subject}}` - Asunto del mensaje
   - `{{message}}` - Contenido del mensaje
4. Copia tus credenciales al archivo `.env`:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

**Importante:** El archivo `.env` está incluido en `.gitignore` y NO se subirá a GitHub. Tus credenciales están protegidas.

Para instrucciones detalladas y solución de problemas, consulta el archivo `EMAILJS_SETUP.md`.

## Estructura del Proyecto

```
Portafolio_Hawk_Durant/
├── public/
│   ├── index.html          # HTML principal con CDN de Bootstrap y jQuery
│   └── img/                # Imágenes del portafolio
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navbar.js       # Barra de navegación con scroll dinámico
│   │   ├── Header.js       # Sección principal con imagen de fondo
│   │   ├── About.js        # Sección "Acerca de mí"
│   │   ├── Qualification.js # Educación y proyectos personales
│   │   ├── Skills.js       # Habilidades técnicas con iconos
│   │   ├── Services.js     # Servicios ofrecidos
│   │   ├── Portfolio.js    # Galería de proyectos con filtros y modales
│   │   ├── Testimonial.js   # Testimonios (comentado)
│   │   ├── Blog.js          # Entradas de blog con noticias IT
│   │   ├── Contact.js       # Formulario de contacto con EmailJS
│   │   ├── Footer.js        # Pie de página con enlaces sociales
│   │   └── ScrollToTop.js   # Botón para volver arriba
│   ├── styles/             # Archivos CSS
│   │   ├── style.css       # Estilos principales
│   │   └── Skills.css      # Estilos específicos de habilidades
│   ├── App.js              # Componente principal que orquesta todos los componentes
│   └── index.js            # Punto de entrada de la aplicación
├── package.json            # Dependencias y scripts del proyecto
├── README.md               # Este archivo
└── EMAILJS_SETUP.md        # Guía de configuración de EmailJS
```

## Características Implementadas

- **Diseño Responsive** - Adaptado a todos los tamaños de pantalla usando Bootstrap y CSS personalizado
- **Navegación Suave** - Scroll suave entre secciones mediante JavaScript nativo
- **Navbar Dinámico** - Aparece automáticamente al hacer scroll hacia abajo
- **Galería de Portafolio** - Filtros por categoría (Web, Móvil, Todos) y modales con enlaces a GitHub y sitios web
- **Formulario de Contacto** - Validación de campos y envío de correos mediante EmailJS
- **Habilidades Técnicas** - Iconos con colores característicos y nombres descriptivos
- **Blog** - Sección con últimas noticias del mundo IT e IA con enlaces externos
- **Scroll to Top** - Botón flotante para volver al inicio de la página
- **Enlaces Sociales** - GitHub y LinkedIn en el footer

## Secciones del Portafolio

1. **Header** - Presentación principal con imagen de fondo y botones de acción
2. **Acerca de mí** - Información profesional y enlace a GitHub
3. **Formación y Experiencias** - Educación académica y proyectos personales
4. **Habilidades Destacadas** - Tecnologías y herramientas con iconos
5. **Servicios** - Servicios ofrecidos como desarrollador
6. **Portafolio** - Galería de proyectos con filtros y enlaces
7. **Blog** - Últimas noticias sobre tecnología e inteligencia artificial
8. **Contacto** - Formulario funcional para recibir mensajes
9. **Footer** - Información de contacto y enlaces a redes sociales

## Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto creará una carpeta `build` con los archivos optimizados y minificados listos para desplegar en cualquier servicio de hosting estático.

## Despliegue en Producción

### Variables de Entorno

Cuando despliegues en producción (Vercel, Netlify, GitHub Pages, etc.), configura las variables de entorno en el panel de configuración de tu plataforma:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

**El archivo `.env` NO se sube a GitHub** - está protegido en `.gitignore`. Solo configura las variables de entorno en tu plataforma de despliegue.

### Ejemplo para Vercel:

1. Ve a tu proyecto en Vercel
2. Settings > Environment Variables
3. Agrega las tres variables con tus credenciales de EmailJS
4. Vuelve a desplegar el proyecto

### Ejemplo para Netlify:

1. Ve a tu proyecto en Netlify
2. Site settings > Build & deploy > Environment
3. Agrega las tres variables con tus credenciales de EmailJS
4. Trigger deploy para aplicar los cambios

## Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo en modo desarrollo
- `npm run build` - Crea una versión optimizada para producción
- `npm test` - Ejecuta las pruebas (si están configuradas)
- `npm run eject` - Expone la configuración de Create React App (irreversible)

## Notas Importantes

- El formulario de contacto requiere configuración de EmailJS para funcionar correctamente
- Las imágenes deben estar en la carpeta `public/img/` para ser accesibles
- El proyecto utiliza Bootstrap 4 desde CDN para mantener compatibilidad
- jQuery se carga desde CDN solo para funcionalidades específicas de Bootstrap
- La sección de Testimonios está comentada y no aparece en la página

## Autor

Hawk Durant - Ingeniero Informático

- GitHub: [www.github.com/james14k](https://www.github.com/james14k)
- LinkedIn: [www.linkedin.com/in/hawkdurant](https://www.linkedin.com/in/hawkdurant)

## Licencia

Este proyecto es de uso personal y educativo.
