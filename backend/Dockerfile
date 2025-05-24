# Use official Node.js image
FROM node:20

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build TypeScript
RUN npm run compile

# Expose port
EXPOSE 4000

# Start the server
CMD ["npm", "start"]
