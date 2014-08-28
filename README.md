Simple basic authentication service
===================================

NodeJS makes creating a Basic authentication service a breeze. All we need to do is to create a file containing our credentials using the htpasswd utility:
```
ubuntu@trusty-64:/basic-auth# apt-get install apache2-utils
ubuntu@trusty-64:/basic-auth# htpasswd -b -c super_secrets testuser testpassword
```
The code required to make this app work is tiny thanks to the http-auth module and can be found in https://github.com/opendns/basic-auth-service/blob/master/server.js

Now run and test the app:
```
ubuntu@trusty-64:/basic-auth# npm install http-auth
ubuntu@trusty-64:/basic-auth# node server.js &
ubuntu@trusty-64:/basic-auth# curl localhost:8000
401 Unauthorized
ubuntu@trusty-64:/basic-auth# curl -u testuser:testpassword localhost:8000
User authenticated successfully
```

Running the docker container:
```
ubuntu@trusty-64:/basic-auth# docker build -t simple-auth .
ubuntu@trusty-64:/basic-auth# docker run -p 0.0.0.0:8000:8000 simple-auth
```
