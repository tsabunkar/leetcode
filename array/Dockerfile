# Use an official OpenJDK base image
FROM openjdk:21-slim

# Set working directory inside the container
WORKDIR /app

# Copy local Java source file into the container
COPY ./ .

# Compile the Java file
RUN javac DVD.java

# Set default command to run the compiled class
CMD ["java", "DVD"]