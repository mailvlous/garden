---
title: docker
draft: false
tags:
  - docker
  - eng
  - software engineering
published: '2026-10-08'
---
is a platform used to build, package, and run applications inside containers. 

a container is an isolated environment that includes everything an application needs to run, such as its dependencies, libraries, and runtime configuration.
  
main purpose of Docker is to make applications run consistently across different environments.

solve "It works on my machine" problem.

![image](/assets/image-20261008143404-fe77c1bd.png)


#### example:
```
FROM node:22-alpine  
WORKDIR /app  
COPY server.js .  
EXPOSE 3000  
CMD ["node", "server.js"]  
```

```
FROM node:22-alpine
```

Specifies the base image used to build your Docker image.
- FROM: Selects the base image.
- node: An official Node.js image.
- 22: Node.js major version 22.
- alpine: Uses Alpine Linux, a lightweight Linux distribution.

This means your container will have Node.js 22 installed in an Alpine Linux environment.
Why Alpine? It generally produces smaller images than Debian-based Node.js images, although some native dependencies may require additional compatibility packages.

```
WORKDIR /app
```

Sets /app as the working directory inside the image.
Think of it as the equivalent of:

```
mkdir -p /app
cd /app
```

If /app doesn't exist, Docker creates it automatically.  
All subsequent relative file paths are resolved from /app, unless another working directory is specified.  
Importantly, /app refers to a directory inside the image/container, not your computer's /app directory.  

```
COPY server.js .
```

Copies server.js from your local Docker build context into the image.  

```
EXPOSE 3000
```

Declares that the application inside the container is expected to listen on TCP port 3000.  
However, an important distinction:  
EXPOSE does not actually publish the port to your host computer.  
To make the application accessible through your host's port 3000, run: 
```
docker run -p 3000:3000 my-app 
```

```
CMD ["node", "server.js"]
```

Specifies the default command to ex ecute when the container starts.  
It is equivalent in purpose to running:  
```
node server.js  
```


```
# 1. Build the Docker image
docker build -t my-app .

# 2. Run a container from the image
docker run -p 3000:3000 my-app

# 3. Access the application
curl http://localhost:3000
```

