# Guía para Principiantes – Proyecto IN-HOUSE52

Esta guía explica, de manera simple y paso a paso, cómo está organizada y cómo continuar trabajando en el sitio web IN-HOUSE52.

## Requisitos
- Un navegador (Chrome, Edge o similar).
- Editor de código recomendado: Visual Studio Code (VS Code).
- Carpeta del proyecto: `IN-HOUSE52`.

## Estructura del Proyecto
Los archivos principales en la carpeta son:
- `index.html`: Página principal.
- `styles.css`: Estilos globales para toda la web.
- `script.js`: Funciones generales (menú móvil, animaciones, scroll suave, utilidades).
- `equipo.html`: Página del equipo con tarjetas y filtros.
- `equipo.css`: Estilos específicos para la página del equipo.
- `equipo.js`: Lógica de la página del equipo (filtros, modales, datos de miembros).
- `galeria.html`, `galeria.css`, `galeria.js`: Página y estilos/funciones de la galería.
- `prueba.html`, `prueba.css`: Página de pruebas/ejemplos.
- `logo 1.png`, `favicon.jpg`: Recursos gráficos (logo y favicon).

No hay subcarpetas en esta versión del proyecto.

## Cómo abrir y ver la página
1. Abre VS Code.
2. Menú "File" → "Open Folder…" → selecciona `IN-HOUSE52`.
3. Para ver la web:
   - Opción rápida: haz doble clic en un archivo `.html` (por ejemplo `index.html`) para abrirlo en el navegador.
   - En VS Code, puedes instalar la extensión "Live Server": clic derecho en el archivo `.html` → "Open with Live Server" (actualiza automáticamente al guardar).

## ¿Qué hace cada archivo?
- `index.html`
  - Contiene la cabecera (navbar), un carrusel de héroe y secciones: Inicio, Programas, Servicios, Impacto, etc.
  - Enlaza `styles.css` para los estilos y usa fuentes/íconos de Google Fonts y Font Awesome.

- `styles.css`
  - Define colores, tipografías, tamaños, espaciados y estilos comunes.
  - La navbar y las tarjetas de secciones usan clases allí definidas.

- `script.js`
  - Menú móvil: abre/cierra el menú en pantallas pequeñas (`initializeMobileMenu`).
  - Efectos de scroll: cambia el fondo de la navbar y activa animaciones al entrar elementos en pantalla (`initializeScrollEffects`).
  - Scroll suave a secciones internas (`initializeSmoothScrolling`).
  - Utilidades (debounce, notificaciones, validación simple), pensadas para futuras funciones.

- `equipo.html`
  - Página del equipo. Muestra un encabezado con estadísticas y un "álbum" de cartas con cada miembro.
  - Botones de filtro (Todos, Líderes, Área de Diseño y Estrategia, Área de Producción Audiovisual).
  - Cada carta tiene una imagen, nombre, cargo y abre un modal con más información.

- `equipo.css`
  - Estilos de las cartas (frente), grilla del álbum, botones de filtro, y modal del miembro.

- `equipo.js`
  - `miembrosData`: objeto con la información de cada persona (nombre, cargo, programa, foto, experiencia, habilidades, proyectos y contacto).
  - `filterTeam(programa)`: muestra/oculta cartas según el filtro seleccionado.
  - `openMemberModal(id)`: abre el modal con la información del miembro según su `id` dentro de `miembrosData`.
  - `closeMemberModal()`: cierra el modal.
  - `searchTeamMembers(term)`: (para futuras mejoras) buscar por nombre/cargo.
  - `sortTeamMembers(criteria)`: (para futuras mejoras) ordenar por criterio.

- `galeria.*`
  - Estructura y lógica de la galería de proyectos (si aplican).

## Cómo agregar un nuevo miembro al equipo (paso a paso)
1. Abre `equipo.html` y busca un bloque de carta como:
   ```html
   <div class="carta-miembro" data-programa="comunicacion" onclick="openMemberModal('com1')">
       <div class="carta-inner">
           <div class="carta-front">
               <img src="URL_O_RUTA_DE_IMAGEN" alt="Nombre">
               <div class="carta-info">
                   <h3>Nombre</h3>
                   <p>Cargo</p>
               </div>
           </div>
       </div>
   </div>
   ```
2. Duplica ese bloque y pega abajo.
3. Cambia:
   - `data-programa`: usa uno de estos valores según el área: `coordinacion`, `comunicacion`, `multimedia` (o el que corresponda en tu grilla).
   - `onclick="openMemberModal('ID')"`: pon un nuevo `ID` único (por ejemplo `com5` o `mul7`).
   - Imagen `src`: si usas una imagen local, guárdala (por ejemplo en una futura carpeta `img/`) y enlázala con `src="img/nombre.png"`. Si usas una URL externa, pega la URL.
   - Texto `alt`, `<h3>` y `<p>` con nombre y cargo reales.
4. Abre `equipo.js` y añade una nueva entrada en `miembrosData` con el MISMO `ID`:
   ```js
   miembrosData.com5 = {
     nombre: "Nombre Apellido",
     cargo: "Cargo",
     programa: "Comunicación Comercial",
     foto: "img/nombre.png", // o URL
     descripcion: "Breve descripción",
     experiencia: ["Punto 1", "Punto 2"],
     habilidades: ["Habilidad 1", "Habilidad 2"],
     proyectos: ["Proyecto 1", "Proyecto 2"],
     contacto: { email: "correo@example.com", linkedin: "#", telefono: "+57 300 000 0000" }
   };
   ```
5. Guarda ambos archivos (`equipo.html` y `equipo.js`) y recarga el navegador.

## Cómo cambiar estilos (CSS)
- Abre `styles.css` para estilos globales o `equipo.css` para estilos de la página del equipo.
- Cambia colores, tipografías y tamaños ajustando propiedades como `color`, `background`, `font-size`, `margin`, `padding`.
- Para que se vea bien en celular, usa reglas `@media (max-width: …)` y revisa que los bloques se apilen correctamente.

## Cómo editar el menú y enlaces
- En `index.html` y `equipo.html` verás elementos `<nav>` con enlaces `<a href="...">`.
- Si creas una nueva página (por ejemplo `proyectos.html`), agrega un enlace en el menú: `<a href="proyectos.html">Proyectos</a>`.

## Buenas prácticas para principiantes
- Nombra archivos e imágenes sin espacios y en minúsculas: `equipo.html`, `equipo.css`, `logo.png`, `ficha-nathaly.png`.
- Siempre usa el atributo `alt` en las imágenes (ej.: `alt="Foto de Nathaly"`).
- Haz cambios pequeños y prueba cada vez.
- Antes de eliminar algo, coméntalo y verifica que nada se rompa (`<!-- comentario -->`).
- Si vas a usar imágenes externas (URLs), verifica que carguen y considera copiarlas al proyecto para mayor estabilidad.

## Cómo probar cambios
- Abre el `.html` en el navegador y presiona F5 (recargar).
- Con Live Server en VS Code: clic derecho sobre el `.html` → "Open with Live Server".

## Checklist de entrega
- La página abre sin errores.
- Las imágenes se ven bien.
- Los enlaces funcionan.
- En celular, el menú y las cartas se ven y se leen.
- No quedan `console.log` innecesarios ni código sin usar.

## Glosario básico
- **HTML**: estructura del contenido.
- **CSS**: apariencia visual (colores, tamaños, posiciones).
- **JavaScript**: comportamiento (menús, animaciones, modales).
- **`src`**: ruta de un recurso (por ejemplo imágenes).
- **`alt`**: texto alternativo que describe una imagen.
- **Responsive**: que se adapte a distintas pantallas.

## Siguientes pasos comunes
- Crear una carpeta `img/` para centralizar imágenes locales y evitar URLs externas.
- Documentar brevemente cambios grandes (qué cambiaste y por qué).
- Mantener coherencia visual (misma paleta y fuentes entre páginas).

Cualquier cambio que hagas, recuerda guardar y revisar en el navegador. Si algo no funciona, vuelve al último cambio que sí funcionaba y avanza paso a paso.