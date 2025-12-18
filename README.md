# Semáforo AVISO (C-TPAT) — Web (con logos)

Incluye franja **AVISO** y dos espacios de logotipos (izquierda y derecha) encima del título.

## Colocar tus logos
Sustituye los archivos de la carpeta `assets/`:
- `assets/logo-left.png` → Logo de tu empresa (Lear, etc.)
- `assets/logo-right.png` → Logo del programa (CTPAT, etc.)

Los estilos `.logo` ajustan tamaño (alto 32px). Si necesitas más grande, edita:
```css
.logo{ height:48px; }
```

## Probabilidades
En `script.js`:
```js
const umbralRojo = 0.6; // 60% rojo
const color = Math.random() < umbralRojo ? 'rojo' : 'verde';
```
