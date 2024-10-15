# Use an official Node.js image
FROM node:16.20.2

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app's source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 (React default)
EXPOSE 9910

# Start the React app
CMD ["npm", "start"]
