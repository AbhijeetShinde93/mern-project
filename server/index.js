import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express(); // this means with the app object we can use express

app.use(bodyParser.json({ linit: "30mb", extended: true })); //this bodyparser is use to handle POST request (exteneded:true is use to send send other then string data in json)
app.use(bodyParser.urlencoded({ linit: "30mb", extended: true }));
app.use(cors());
