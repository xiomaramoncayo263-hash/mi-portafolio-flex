# Mi Portafolio Flex

## Descripción del proyecto
Este proyecto es un **portafolio personal** desarrollado como parte del programa **Análisis y Desarrollo de Software (ADSO)** del SENA.  
El objetivo es aplicar el modelo **CSS Flexbox** para maquetar una página web moderna, adaptable y completamente responsive, sin usar frameworks ni floats.

---

## Tecnologías utilizadas
- **HTML5** → estructura semántica del sitio.  
- **CSS3 (Flexbox)** → diseño flexible y responsive.  
- **JavaScript (DOM)** → interactividad del menú hamburguesa.  
- **Git y GitHub** → control de versiones y publicación del proyecto.

---

## Estructura del proyecto
mi-portafolio-flex/
-index.html (Página principal)
-css/ estilos.css (Estilos y layout con Flexbox)
-js/ app.js (Lógica del menú interactivo)
-img/ (Imágenes del portafolio)
-README.md (Documentación del proyecto)

---

## Características principales
- Diseño **responsive** con media queries para pantallas móviles.  
- Maquetación con **Flexbox** en todas las secciones (header, hero, sobre mí, habilidades, footer).  
- Menú **hamburguesa** funcional mediante JavaScript.  
- Estilo personalizado con colores suaves y tipografía legible.  
- Enlaces a **redes personales** (GitHub y correo electrónico).

---

## Secciones del sitio
| Sección | Descripción |
|----------|--------------|
| **Header** | Logo, nombre y navegación principal. |
| **Hero** | Presentación personal con foto y texto. |
| **Sobre mí** | Información personal y formación académica. |
| **Habilidades** | Lista de competencias técnicas. |
| **Footer** | Enlaces de contacto y créditos. |

---

## Funcionalidad JavaScript
El archivo `app.js` activa el menú hamburguesa:
```js
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

