# Some notes about Docker and SQL 
I have setup a docker-compose file that runs a container with mySQL server. Make sure to install Docker before this. Either directly from their website[Docker Desktop](https://docs.docker.com/desktop/) or using [Homebrew](https://formulae.brew.sh/formula/docker). 


# Work with Docker 
We start off with creating an image and corresponding containers with 
`docker build -t <name of image> .`
Then once it has finished running we can run 
`docker-compose up`
This will run our containers and hopefully we have two containers running. One for MongoDB and one for Node. 

**NOTE** We have stored the .env file in our repository which is a security issue. Once we deploy we have to make sure than .env files and such are not in the repo or alike
**NOTE** 

# Useful docker commands 
Lists all the running containers 
`docker ps` 

List all repositories/images 
`docker images` 


