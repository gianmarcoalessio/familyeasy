# Use an official Node.js runtime as the base image
FROM node:18.17.1-alpine

# Set the working directory in the Docker container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN yarn

# Copy the rest of the app's source code to the working directory
COPY ./srcbk ./srcbk

COPY server.js .

# Per inserire i dati nel database
COPY dbtest.js .
COPY dbtest.json .

# Expose port 3000 for the app
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "server.js" ]