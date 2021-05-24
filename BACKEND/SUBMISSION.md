## Repository: 

```
https://github.com/Ranime2/Fall-2021-Interview.git
```

## Run Instructions

The server runs on NodeJS, Assuming you are already in the `BACKEND` folder, you need to install the packages needed using the following commands:   
```
cd src
npm install
```

The application is using psql as a database, before starting the application, you need to create your databases. In the `BACKEND` folder, run the following (You might need to add the flag `-U username` depending on your set-up):
```
psql -c "CREATE DATABASE backend"
psql -d backend -f ./src/schema.sql
```
a `.env` file with the mostly used attributes is available, you can change to fit your database set-up.
You can then run the applications, either test or dev
1. Running the server:  
Fist, please make sure that to set `NODE_ENV=dev` in the `.env` file. Then run:
```
cd src
npm run server
```
You can send API `GET` requests using postman or insomnia or any other API testing tool to either:
- `http://localhost:3000/encode` 
- `http://localhost:3000/decode`    
a typical request (for both endpoints) looks like the following ( Note: only urls are accepted ) :
```
{
    "url": "https://www.google.com/"
}
```
a typical response looks like the following: 
```
{
    "status": 200,
    "headers": {
        "content-type": "application/json",
        "user-agent": "PostmanRuntime/7.28.0",
        "accept": "*/*",
        "postman-token": "109c9d74-73fb-4f62-8070-16c3fcd869a6",
        "host": "localhost:3000",
        "accept-encoding": "gzip, deflate, br",
        "connection": "keep-alive",
        "content-length": "77"
    },
    "response": {
        "message": "encoding successfull",
        "encoding": {
            "id": 1,
            "original_url": "https://www.google.com/",
            "short_encoding": "http://short.ly/5jRnsu",
            "insertion_time": "2021-05-24T20:57:30.400Z"
        },
        "request": {
            "url": "http://google.ly/kgwIHk",
            "description": "a new world"
        }
    }
}
```


---
<br>
2. Running the tests:  
Fist, please make sure that to set `NODE_ENV=test` in the `.env` file. Then run:    

```
cd src
npm run test
```

You can delete the db once you are done.
## Additional Information

My tests seem to stay open even after finishing, I am still working on that issue.
A try for the front-end challenge is also available in the branch "fron-end".
Here is the link:
```
https://github.com/Ranime2/Fall-2021-Interview/tree/front-end
```