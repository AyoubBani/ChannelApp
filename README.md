# Assignment Solution
this repository containes two folders one for the front-end and the other for the back-end.
### Backend Api
move to backend directory and type the following commands
```sh
$ cd backend
$ npm install
$ npm start
```
the back-end uses three endpoints:

 - GET http://127.0.0.1:3030/api/channels/ -> GET ALL CHANNELS
 - GET http://127.0.0.1:3030/api/messages/:channel/ -> GET ALL MESSAGES OF A CHANNEL
 - PUT http://127.0.0.1:3030/api/:channel/ -> ADD NEW MESSAGE TO A CHANNEL

### Frontend
move to direcotry and start the frontend application with npm start. The front end is built with redux .