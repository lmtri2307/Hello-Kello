# Use the official Node.js image
FROM node:14

# Create folder in docker container to save the application code
WORKDIR /applications/hello

ENV PORT=3000

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE ${PORT}

# Define the command to run the app
CMD ["node", "app.js"]
