---
title: docker
draft: false
tags:
  - docker
  - eng
  - software engineering
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

