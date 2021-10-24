# Obtain node as Base image 
FROM node:16
# setting the work directory in container 
WORKDIR /src
# Copy dependencies from our project to container 
COPY package.json ./
# install all the dependencies on container 
RUN npm install
# copy the source code into container 
COPY . ./

ENV SECRET=D93326F58C732288DCE39948368B2
ENV PORT=8080
ENV NODE_DOCKER_PORT=8080
ENV HOST=0.0.0.0
# container exposed network port number. Change this later 
EXPOSE 8080
# command to run within the container 
CMD [ "npm", "start" ]