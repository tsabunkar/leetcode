# Use the official Node.js LTS image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the JavaScript file into the container
COPY 1480.Running-Sum-of-1D-Array.js .

# Default command
CMD ["node", "1480.Running-Sum-of-1D-Array.js"]