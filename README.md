# TechBot - Asistente de Rutas de Aprendizaje 🤖

TechBot es una aplicación web que ayuda a los usuarios a descubrir y planificar sus rutas de aprendizaje en tecnología. Utilizando inteligencia artificial, genera diagramas personalizados y proporciona recursos relevantes para cada etapa del aprendizaje.

## 🚀 Características

- **Chat Interactivo**: Interfaz conversacional intuitiva para entender tus objetivos de aprendizaje
- **Diagramas Personalizados**: Generación de rutas de aprendizaje visuales y estructuradas
- **Recursos Curados**: Enlaces a documentación, cursos y tutoriales relevantes
- **Historial de Chats**: Acceso a conversaciones y diagramas anteriores
- **Autenticación**: Soporte para login tradicional y Google OAuth
- **Diseño Responsivo**: Experiencia optimizada para dispositivos móviles y desktop

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast
- Google OAuth
- Date-fns

## 📋 Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn
- Una cuenta en Google Cloud Platform (para OAuth)

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/techbot-frontend.git
cd techbot-frontend
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_API_URL=http://localhost:8000/api
VITE_GOOGLE_CLIENT_ID=tu_google_client_id
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🚀 Despliegue

Para desplegar en Vercel:

1. Asegúrate de tener el archivo `vercel.json` configurado
2. Configura las variables de entorno en el dashboard de Vercel:
   - `VITE_API_URL`
   - `VITE_GOOGLE_CLIENT_ID`
3. Conecta tu repositorio con Vercel
4. ¡Despliega!

## 📁 Estructura del Proyecto

```
src/
├── assets/         # Imágenes, iconos y otros recursos estáticos
├── components/     # Componentes reutilizables
├── context/       # Contextos de React (DiagramContext)
├── hooks/         # Hooks personalizados
├── pages/         # Componentes de página
├── services/      # Servicios de API
├── shared/        # Utilidades compartidas
└── types/         # Definiciones de tipos TypeScript
```

## 🔐 Autenticación

La aplicación soporta dos métodos de autenticación:
- Login tradicional con email/password
- Google OAuth

## 🎨 Personalización

El diseño utiliza una paleta de colores personalizada definida en `tailwind.config.js`:
- Lavanda (`#B39DDB`)
- Pink (`#F48FB1`)
- Black (`#162D3A`)
- Gray Light (`#F4F4F4`)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.


## 🙏 Agradecimientos

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
