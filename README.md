# Quanta Landing Page

Landing page para **Quanta** — Software MRP/ERP para empresas manufactureras (Empowered by apalliance).

## Estructura del proyecto

```
/quanta-landing (raíz del repo)
├── assets/
│   ├── css/
│   │   ├── reset.css       # Reseteo de estilos del navegador
│   │   ├── variables.css   # Variables CSS (colores, fuentes, espaciado)
│   │   ├── base.css        # Layout base, página de carga, contenedor
│   │   ├── header.css      # Estilos del navbar
│   │   ├── hero.css        # Estilos de la sección hero
│   │   ├── rest.css        # Resto: producto, universidad, precios, contacto, modals, footer, responsive
│   │   └── main.css        # Archivo principal que importa todos los módulos
│   ├── js/
│   │   ├── config.js       # Configuración (webhooks, precios) — disponible para futura modularización
│   │   └── script.js       # Lógica principal (formularios, modales, cotización, PDF, etc.)
│   ├── images/
│   │   ├── logos/          # logo-quanta.png, nombre.png, etc.
│   │   ├── icons/
│   │   ├── hero/           # esfera.png, fondo.png
│   │   └── illustrations/  # fondo_p.png, banner_coti.png
│   └── fonts/              # Fuentes locales (opcional)
├── index.html              # Página principal
├── tratamiento-datos.html   # Política de tratamiento de datos
├── README.md
└── .gitignore
```

## Imágenes

Mueve tus archivos actuales a la nueva estructura:

- `logo.png` → `assets/images/logos/logo.png`
- `nombre.png` → `assets/images/logos/nombre.png`
- `esfera.png` → `assets/images/hero/esfera.png`
- `fondo.png` → `assets/images/hero/fondo.png`
- `fondo_p.png` → `assets/images/illustrations/fondo_p.png`
- `banner_coti.png` → `assets/images/illustrations/banner_coti.png`

## Desarrollo local

1. Abre `index.html` con **Live Server** (VS Code / Cursor), o  
2. Sirve la carpeta con:  
   `python -m http.server 8000`  
   y entra en `http://localhost:8000`

## Integración Make.com

La landing está integrada con Make.com para:

- Envío del **formulario de contacto**
- Envío de datos de **cotización** (paso 1 y paso 2)
- Notificaciones (p. ej. Microsoft Teams)
- Registro en Excel (OneDrive)

Los webhooks se configuran en `assets/js/config.js` (o en las URLs dentro de `script.js`).

## Notas

- **CSS**: Los estilos están divididos en módulos; `main.css` importa `reset`, `variables`, `base`, `header`, `hero` y `rest.css`.
- **JS**: La lógica está en `assets/js/script.js`. `config.js` contiene constantes reutilizables para una futura migración a ES6 modules.
- **Rutas**: Todas las rutas en HTML y CSS son relativas a la raíz del proyecto (`assets/...`).
