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

# Install a lightweight web server to serve the React build
RUN npm install -g serve

# Expose port 9910
EXPOSE 9910

# Start the app on port 9910
CMD ["serve", "-s", "build", "-l", "9910"]
