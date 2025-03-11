# Usa una imagen de Node.js como base para compilar el proyecto
FROM node:18-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación para producción
RUN npm run build --prod

# Usa una imagen de nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos compilados desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copia la configuración de nginx (opcional, ajusta según tus necesidades)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80
EXPOSE 80

# Comando para correr nginx
CMD ["nginx", "-g", "daemon off;"]