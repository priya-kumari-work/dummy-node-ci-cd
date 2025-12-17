
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (or whatever your app uses)
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
