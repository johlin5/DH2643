# Obtain node as Base image 
FROM node:14
# setting the work directory in container 
WORKDIR /app
# Copy dependencies from our project to container 
COPY app/package.json ./
# install all the dependencies on container 
RUN npm install
# copy the source code into container 
COPY app/ ./
# container exposed network port number. Change this later 
EXPOSE ${PORT}
# command to run within the container 
CMD [ "npm", "start" ]