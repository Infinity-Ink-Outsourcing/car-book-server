import http from 'http';
import socketio from 'socket.io';
import express from 'express';
import cors from 'cors';
import router from './routers';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import {username , password ,cluster  , dbname} from './config/mongo.config';


mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`);
// mongoose.connect(`mongodb://localhost:27017/limeServer`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const port = 5000;


const app = express();


app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
router(app);
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const server = http.createServer(app)
const io = new socketio.Server(server, {cors: { origin: 'http://localhost:3000'}});


server.listen(process.env.PORT || port, () => {
  console.log(`Clover POs listening at http://localhost:${port}`);
});