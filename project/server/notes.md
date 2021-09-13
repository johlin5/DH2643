# Some notes about Docker and SQL 
I have setup a docker-compose file that runs a container with mySQL server. Make sure to install Docker before this. Either directly from their website[Docker Desktop](https://docs.docker.com/desktop/) or using [Homebrew](https://formulae.brew.sh/formula/docker). 

We have used the following reference pages, 
1, [Set up mySQL with Docker](https://phoenixnap.com/kb/mysql-docker-container)
2, [Set up mySQL with docker-compose](https://dev.to/frasnym/how-to-create-dockerized-nodejs-with-mysql-database-1o44)

# Work with Docker 
Before we start our docker container we have to be in the correct folder and have Docker installed on our computer. The path should be something like this, 
`*/DH2346/project/server` 

Once we are in the folder we can run the following command, 
`docker-compose up` 
This command starts up the docker container and runs in the background. Once we have started our docker container we can access it with the following command. 
`sudo docker exec -it <container name> bash` 
This command enters the docker container bash where we can hopefully run some commands to play around our mySQL server. 
Once we entered bash environment for our container we can type 
`mysql -u root -p`
This command starts mysql client such that we can interact with our databases. The password can be found in the file .env. 

**NOTE** We have stored the .env file in our repository which is a security issue. Once we deploy we have to make sure than .env files and such are not in the repo or alike
**NOTE** 

Congrats! We have entered our mySQL database in our docker container. 

# Useful docker commands 
Lists all the running containers 
`docker ps` 

List all repositories/images 
`docker images` 


