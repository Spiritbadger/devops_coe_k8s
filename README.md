# DevOps CoE: Kubernetes

## simple-k8s
Contains Kubernetes configuration files for setting up an Nginx container using either a pod or a deployment with NodePort service.


### Using pod
*kubectl apply -f simple-k8s/nginx-pod.yaml*
*kubectl apply -f simple-k8s/nginx-node-port.yaml*


### Using deployment
*kubectl apply -f simple-k8s/nginx-deployment.yaml*
*kubectl apply -f simple-k8s/nginx-node-port.yaml*


## complex-k8s

![complex-diagram](complex-diagram.png)

__k8s:__
Contains Kubernetes configuration files for setting up a full stack application.


__client:__
Contains source code and Dockerfile for building the front-end image. The front-end is created with React.


__server:__
Contains source code and Dockerfile for building the back-end image. The back-end is a RESTful API implemented using Node.js and Express.


__database:__
Contains source code and Dockerfile for creating a Postgres database image with initial data.


### Usage
All the Docker images needed for the application are already found in Dockerhub. No need to build anything. Just apply configuration files with:

*kubectl apply -f complex-k8s/k8s*