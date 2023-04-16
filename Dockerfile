# Utilisez l'image de base Node.js
FROM node:latest

# Créez un répertoire de travail pour l'application frontend
WORKDIR /app/frontend

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY frontend/package*.json ./

# Installez les dépendances
RUN yarn install

# Copiez les fichiers de l'application frontend dans le répertoire de travail
COPY frontend .

# Exposez le port 3000 pour l'application frontend
EXPOSE 3000

# Démarrez l'application frontend sur le port 3000


# Créez un répertoire de travail pour l'application backend
WORKDIR /app/backend

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY backend/package*.json ./

# Installez les dépendances
RUN yarn install

# Copiez les fichiers de l'application backend dans le répertoire de travail
COPY backend .

# Exposez le port 8000 pour l'application backend
EXPOSE 8000

RUN yarn build

# Démarrez l'application backend sur le port 8000
WORKDIR /
CMD ["bash", "-c", "cd /app/frontend && yarn start & cd /app/backend && yarn start"]


