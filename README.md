# SPACE TEC · Landing page del proyecto final

Sitio estático (HTML + CSS + JS), sin dependencias ni proceso de build.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `spacetec`).
2. Sube **el contenido** de esta carpeta a la raíz del repositorio (`index.html` debe quedar en la raíz).
3. Ve a **Settings → Pages**.
4. En *Build and deployment*, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
5. Guarda. En un par de minutos tu sitio estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Qué editar

- **Textos del proyecto**: busca en `index.html` los textos de ejemplo (problema, idea, impacto, solución, etapas).
- **Integrantes**: sección `#equipo`. Cambia nombres, roles y las iniciales del círculo (o reemplázalas por una `<img>` con la foto).
- **Tecnologías**: lista `.chips` en la sección `#tecnologias`.
- **Entregables**: en la sección `#entregables`, cambia cada `href="#"` por el enlace real (documentación, video, repositorio, presentación).
- **Captura o demo**: en la sección `#solucion`, reemplaza el recuadro por una imagen guardada en `assets/`.
- **Pie de página**: nombre de la materia o institución.

## Estructura

```
index.html
css/style.css
js/main.js
assets/
  logo-circular.png      logotipo principal
  logo-horizontal.png    versión horizontal
  logo-icon.svg          ícono / favicon
.nojekyll
```

## Paleta

| Color | HEX |
|---|---|
| Azul espacial | `#14243B` |
| Dorado | `#D7B568` |
| Naranja | `#F16B2F` |
